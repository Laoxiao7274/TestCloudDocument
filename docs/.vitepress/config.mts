import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TestCloud",
  description: "云试的开发文档",
  base: '/TestCloudDoc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '项目介绍', link: '/introduce' },
          { text: '前端介绍', link: '/front/pageIntroduce' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
