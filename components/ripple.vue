<template>
  <canvas id="myCanvas" width="800" height="600"></canvas>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // 核心参数配置
  const config = {
    center: { x: canvas.width / 2, y: canvas.height / 2 },
    mainRadius: 150,
    waveCount: 2,      // 每波生成数量
    spawnInterval: 100, // 生成间隔(ms)
    waveSpeed: 0.5      // 扩散速度
  };

  class Wave {
    constructor(angle) {
      // 生成点位于主圆半径1/5处
      const spawnRadius = config.mainRadius * 0.2;
      this.x = config.center.x + spawnRadius * Math.cos(angle);
      this.y = config.center.y + spawnRadius * Math.sin(angle);
      this.radius = 0;
    }
  }

  let waves = [];
  let lastSpawnTime = 0;

  function animate(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 生成新波纹（按固定间隔）
    if (timestamp - lastSpawnTime > config.spawnInterval) {
      const angleStep = (Math.PI * 2) / config.waveCount;
      for (let i = 0; i < config.waveCount; i++) {
        waves.push(new Wave(angleStep * i));
      }
      lastSpawnTime = timestamp;
    }

    // 更新并绘制波纹
    waves.forEach((wave, index) => {
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 0, 255, 1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      wave.radius += config.waveSpeed;

      // 移出画布对角线范围的波纹
      const maxRadius = Math.max(canvas.width, canvas.height);
      if (wave.radius > maxRadius) {
        waves.splice(index, 1);
      }
    });

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})
</script>
