import { defineConfig } from 'vitepress'

// 三页统一用一套 UI 骨架：相同的顶部跳转条 + 相同的 SiteCard / SiteSection 组件 + 相同的右侧 sidebar 锚点导航
const sidebarOfficial = {
  text: '学校官方网站',
  collapsed: false,
  items: [
    { text: '学校主站与门户', link: '/official#official-main' },
    { text: '教学与公共服务', link: '/official#official-teaching' },
    { text: '学院官网', link: '/official#official-schools' },
    { text: '研究院与重点实验室', link: '/official#official-labs' },
    { text: '学生事务', link: '/official#official-student' },
    { text: '财务资产', link: '/official#official-finance' },
    { text: '组织人事', link: '/official#official-hr' },
    { text: '行政办公', link: '/official#official-admin' },
    { text: 'IT 服务', link: '/official#official-it' },
    { text: 'AI 与智能服务', link: '/official#official-ai' },
    { text: '学生组织与周边站点', link: '/official#official-organization' }
  ]
}

const sidebarTools = {
  text: '开源工具',
  collapsed: false,
  items: [
    { text: '通用工具 / 元工具', link: '/tools#tools-general' },
    { text: '选课 / 抢课', link: '/tools#tools-course' },
    { text: '校园网 / 网络', link: '/tools#tools-network' },
    { text: '教务 / 成绩 / 课表', link: '/tools#tools-academic' },
    { text: '在线学习 / 网课', link: '/tools#tools-online-learning' },
    { text: '趣味 / 游戏 / 杂项', link: '/tools#tools-fun' },
    { text: 'AI / 机器学习 / 爬虫', link: '/tools#tools-ai' },
    { text: '系统 / 编译器 / 体系结构', link: '/tools#tools-system' },
    { text: 'LaTeX 模板', link: '/tools#tools-latex' },
    { text: '其他小工具', link: '/tools#tools-misc' }
  ]
}

const sidebarMaterials = {
  text: '学习资料',
  collapsed: false,
  items: [
    { text: '论文 / LaTeX 模板', link: '/materials#materials-latex' },
    { text: '综合资料 / 课程合集', link: '/materials#materials-courses' },
    { text: '数学 / 物理', link: '/materials#materials-math' },
    { text: '计算机 / 软件工程', link: '/materials#materials-cs' },
    { text: '人工智能 / 机器学习', link: '/materials#materials-ai' },
    { text: '机器人 / 智能车 / 自动控制', link: '/materials#materials-robot' },
    { text: '周边项目', link: '/materials#materials-others' }
  ]
}

const sidebarClubs = {
  text: '校内社团',
  collapsed: false,
  items: [
    { text: 'A类 · 思想', link: '/clubs#clubs-a' },
    { text: 'B类 · 科学实践', link: '/clubs#clubs-b' },
    { text: 'C类 · 学术知识', link: '/clubs#clubs-c' },
    { text: 'D类 · 创新创业', link: '/clubs#clubs-d' },
    { text: 'E类 · 文化', link: '/clubs#clubs-e' },
    { text: 'F类 · 传媒', link: '/clubs#clubs-f' },
    { text: 'G类 · 艺术', link: '/clubs#clubs-g' },
    { text: 'H类 · 竞技', link: '/clubs#clubs-h' }
  ]
}

const sidebarCommunities = {
  text: '同好社群',
  collapsed: false,
  items: [
    { text: 'QQ群列表', link: '/communities#communities-groups' }
  ]
}

export default defineConfig({
  title: "USTB All In One",
  description: "USTB 在 Github 上的常用开源工具及资料网站统计大全",
  // Clean URLs (without .html) for nicer share links
  cleanUrls: true,
  head: [
    // 浏览器侧栏 / 标签页图标：使用去背景版本 icon_p.png
    ['link', { rel: 'icon', type: 'image/png', href: '/icon/icon_p.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学校官方网站', link: '/official' },
      { text: '开源工具', link: '/tools' },
      { text: '学习资料', link: '/materials' },
      { text: '校内社团', link: '/clubs' },
      { text: '同好社群', link: '/communities' }
    ],

    // 站点 Logo：白天用 original_p.png，黑夜用 monochrome_p.png
    logo: {
      src: '/icon/original_p.png',
      srcDark: '/icon/monochrome_p.png',
      alt: 'USTB All In One'
    },

    // 每页右侧 sidebar 列出当前页面的全部子节锚点，三页 UI 一致
    sidebar: {
      '/official': [sidebarOfficial],
      '/tools': [sidebarTools],
      '/materials': [sidebarMaterials],
      '/clubs': [sidebarClubs],
      '/communities': [sidebarCommunities]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LYOfficial/USTB-All-In-One' }
    ],

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    footer: {
      message: 'Released under the <a href="https://github.com/LYOfficial/USTB-All-In-One#GPL-3.0-1-ov-file">GPL-3.0 License</a>.',
      copyright: 'Copyright © 2026 <a href="https://www.ustb.world/about" target="_blank" rel="noopener noreferrer">SkyCode</a>'
    }
  }
})
