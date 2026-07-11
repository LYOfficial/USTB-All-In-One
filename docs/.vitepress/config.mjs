import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "USTB All-In-One",
  description: "USTB 在 Github 上的常用开源工具及资料网站统计大全",
  // Clean URLs (without .html) for nicer share links
  cleanUrls: true,
  head: [
    // 浏览器侧栏 / 标签页图标：使用去背景版本 icon_p.png
    ['link', { rel: 'icon', type: 'image/png', href: '/icon/icon_p.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '导航', link: '/' },
      { text: 'GitHub', link: 'https://github.com/LYOfficial/USTB-All-In-One' }
    ],

    // 站点 Logo：白天用 original_p.png，黑夜用 monochrome_p.png
    logo: {
      src: '/icon/original_p.png',
      srcDark: '/icon/monochrome_p.png',
      alt: 'USTB All-In-One'
    },

    // 右侧 sidebar 始终显示，列出一级分区 + 各小节锚点
    sidebar: [
      {
        text: '北京科技大学导航站',
        collapsed: false,
        items: [
          { text: '🏫 学校官方网站', link: '/#official' },
          {
            text: '   学校主站与门户',
            link: '/#official-main'
          },
          {
            text: '   教学与公共服务',
            link: '/#official-teaching'
          },
          {
            text: '   学院官网',
            link: '/#official-schools'
          },
          {
            text: '   研究院与重点实验室',
            link: '/#official-labs'
          },
          {
            text: '   学生事务',
            link: '/#official-student'
          },
          {
            text: '   财务资产',
            link: '/#official-finance'
          },
          {
            text: '   组织人事',
            link: '/#official-hr'
          },
          {
            text: '   行政办公',
            link: '/#official-admin'
          },
          {
            text: '   IT 服务',
            link: '/#official-it'
          },
          {
            text: '   AI 与智能服务',
            link: '/#official-ai'
          },
          {
            text: '   学生组织与周边站点',
            link: '/#official-organization'
          },
          { text: '🛠️ 开源工具', link: '/#tools' },
          {
            text: '   通用工具 / 元工具',
            link: '/#tools-general'
          },
          {
            text: '   选课 / 抢课',
            link: '/#tools-course'
          },
          {
            text: '   校园网 / 网络',
            link: '/#tools-network'
          },
          {
            text: '   教务 / 成绩 / 课表',
            link: '/#tools-academic'
          },
          {
            text: '   在线学习 / 网课',
            link: '/#tools-online-learning'
          },
          {
            text: '   趣味 / 游戏 / 杂项',
            link: '/#tools-fun'
          },
          {
            text: '   AI / 机器学习 / 爬虫',
            link: '/#tools-ai'
          },
          {
            text: '   系统 / 编译器 / 体系结构',
            link: '/#tools-system'
          },
          {
            text: '   LaTeX 模板',
            link: '/#tools-latex'
          },
          {
            text: '   其他小工具',
            link: '/#tools-misc'
          },
          { text: '📚 学习资料', link: '/#materials' },
          {
            text: '   论文 / LaTeX 模板',
            link: '/#materials-latex'
          },
          {
            text: '   综合资料 / 课程合集',
            link: '/#materials-courses'
          },
          {
            text: '   数学 / 物理',
            link: '/#materials-math'
          },
          {
            text: '   计算机 / 软件工程',
            link: '/#materials-cs'
          },
          {
            text: '   人工智能 / 机器学习',
            link: '/#materials-ai'
          },
          {
            text: '   机器人 / 智能车 / 自动控制',
            link: '/#materials-robot'
          },
          {
            text: '   周边项目',
            link: '/#materials-others'
          }
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