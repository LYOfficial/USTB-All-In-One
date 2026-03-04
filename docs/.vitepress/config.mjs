import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "USTB All-In-One",
  description: "USTB 在 Github 上的常用开源工具及资料网站统计大全",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航', link: '/official' },
      { text: 'GitHub', link: 'https://github.com/LYOfficial/USTB-All-In-One' }
    ],

    sidebar: [
      {
        text: '北京科技大学导航站',
        items: [
          { text: '学校官方网站', link: '/official' },
          { text: '开源工具', link: '/tools' },
          { text: '学习资料', link: '/materials' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LYOfficial/USTB-All-In-One' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present USTB Open Source Contributors'
    }
  }
})
