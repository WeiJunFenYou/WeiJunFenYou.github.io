import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: '静谧平和的博客',
  subtitle: '欢迎访问的我的博客！',
  author: {
    name: '静谧平和',
  },
  description: '编程知识、经济学、玄学、科学新理论，我都感兴趣',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/WeiJunFenYou',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/7035164',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
  },
  statistics: { enable: true },
})
