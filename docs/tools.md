---
title: 开源工具
aside: false
---

<style>
.page-nav-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0 0 1.5rem;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.page-nav-strip a {
  flex: 1 1 200px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.page-nav-strip a:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.page-nav-strip a.is-active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.section-anchor {
  scroll-margin-top: 80px;
}
.page-lead {
  font-size: 1.02rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem;
}
</style>

<div class="page-nav-strip">
  <a href="/official">🏫 学校官方网站</a>
  <a href="/tools" class="is-active">🛠️ 开源工具</a>
  <a href="/materials">📚 学习资料</a>
</div>

<p class="page-lead">
  收集北科大相关的实用小工具、脚本、测试程序等。仓库名带 <code>USTB</code> / <code>ustb</code> 关键字的校友项目均收录于此。
</p>

::: tip 💡 使用提示
点击卡片即可跳转到对应 GitHub 仓库。
:::

# 🛠️ 开源工具

## 通用工具 / 元工具 {#tools-general}

<SiteSection subtitle="共 9 个">
<SiteCard title="USTB-All-In-One" url="https://github.com/LYOfficial/USTB-All-In-One" desc="USTB 在 Github 上的常用开源工具及资料网站统计大全" />
<SiteCard title="HelloUSTB" url="https://github.com/genshen/HelloUSTB" desc="USTB 校园 Android App" />
<SiteCard title="USTB-SSO" url="https://github.com/isHarryh/USTB-SSO" desc="USTB 单点登录（SSO）身份认证实现库" />
<SiteCard title="The-Beike" url="https://github.com/isHarryh/The-Beike" desc="大贝壳：北京科技大学校园助手（集成课表/成绩/通知等）" />
<SiteCard title="ustbclass" url="https://github.com/kotoyuuko/ustbclass" desc="Laravel 开发的课程表日历自动推送系统，北科大专用" />
<SiteCard title="USTB-TeachSystem-API" url="https://github.com/jeasonstudio/USTB-TeachSystem-API" desc="教务管理系统接口（非官方）" />
<SiteCard title="ustb_sso_server" url="https://github.com/dashjay/ustb_sso_server" desc="USTB 单点登录系统（完全开源）" />
<SiteCard title="USTB-OpenAI-Py" url="https://github.com/isHarryh/USTB-OpenAI-Py" desc="北科大 LLM 平台的 OpenAI 样式客户端" />
<SiteCard title="ustb-auto-score" url="https://github.com/Eryia/ustb-auto-score" desc="自动抢智育分的脚本程序" />
</SiteSection>

## 选课 / 抢课 {#tools-course}

<SiteSection subtitle="共 10 个">
<SiteCard title="USTB-Auto-Select" url="https://github.com/ustb-auto/USTB-Auto-Select" desc="辅助教务处选课的开源浏览器插件" />
<SiteCard title="USTBJwAssistant" url="https://github.com/jacklanda/USTBJwAssistant" desc="USTB Auto Course-selecting Assistant" />
<SiteCard title="ustb_choose_course_system" url="https://github.com/nladuo/ustb_choose_course_system" desc="选课系统第三方 Win/Linux/Mac/Android/iOS 客户端" badge="OUTDATED" />
<SiteCard title="ustb-jwgl-manager" url="https://github.com/U202142209/ustb-jwgl-manager" desc="贝壳选课辅助工具" />
<SiteCard title="USTB-GetClass" url="https://github.com/sunnysnow7/USTB-GetClass" desc="GitHub Actions 自动抢课脚本（锐格平台）" />
<SiteCard title="USTB-CourseGrabber" url="https://github.com/jiajun2001/USTB-CourseGrabber" desc="强智抢课脚本，支持 Actions 自动抢课与 Server酱推送" />
<SiteCard title="UstbQuickGetClass" url="https://github.com/KevinZonda/UstbQuickGetClass" desc="USTB 抢课程序，支持自动推送通知" />
<SiteCard title="USTB-courseHelper" url="https://github.com/fearlesman/USTB-courseHelper" desc="针对 byyt.ustb.edu.cn 的简易 AI 抢课可视脚本" />
<SiteCard title="jwgl" url="https://github.com/z2z63/jwgl" desc="Python+Pyside6 GUI 选课程序，用于网络拥塞时抢课" />
<SiteCard title="-USTB-Grabber-" url="https://github.com/ss12113/-USTB-Grabber-" desc="北科抢课脚本，仅供学习交流" />
</SiteSection>

## 校园网 / 网络 {#tools-network}

<SiteSection subtitle="共 20 个">
<SiteCard title="ustb-wifi-tools" url="https://github.com/CakeAL/ustb-wifi-tools" desc="校园网实用工具，查询流量、解绑 MAC" />
<SiteCard title="Login-USTB-Net" url="https://github.com/login-ustb/Login-USTB-Net" desc="命令行快速登录校园网认证脚本" />
<SiteCard title="ustb-cli" url="https://github.com/Jason23347/ustb-cli" desc="Linux 校园网工具箱：登录、账户/网费/流量" />
<SiteCard title="USTBLogin" url="https://github.com/maning00/USTBLogin" desc="IPv6 长期稳定在线，自动重连，IPv6 DDNS 自动更新" />
<SiteCard title="USTB-Login" url="https://github.com/gehongyan/USTB-Login" desc="北科大校园网自动登录程序" />
<SiteCard title="ustb_dorm_wired" url="https://github.com/dfldylan/ustb_dorm_wired" desc="宿舍有线网口打开脚本" />
<SiteCard title="USTBNetUsageInfo" url="https://github.com/Soulter/USTBNetUsageInfo" desc="北科大校园网使用情况查询" />
<SiteCard title="luci-app-ustb-net" url="https://github.com/cc-404/luci-app-ustb-net" desc="OpenWrt/Lede 校园网登录助手" />
<SiteCard title="luci-app-ustb" url="https://github.com/WROIATE/luci-app-ustb" desc="OpenWrt Luci 校园网登录插件" />
<SiteCard title="wssocks-plugin-ustb" url="https://github.com/genshen/wssocks-plugin-ustb" desc="USTB/BUPT（或其他基于 webvpn 的高校）网络访问代理工具" />
<SiteCard title="ustb-login" url="https://github.com/kotoyuuko/ustb-login" desc="USTB 网络登录脚本" />
<SiteCard title="ustb-login-daemon" url="https://github.com/Jason23347/ustb-login-daemon" desc="校园网周期性登录守护进程" />
<SiteCard title="ustb-clock" url="https://github.com/Jason23347/ustb-clock" desc="控制台钟表，并显示网费流量信息" />
<SiteCard title="openwrt-ustb-cli" url="https://github.com/Jason23347/openwrt-ustb-cli" desc="OpenWrt 版本校园网 CLI" />
<SiteCard title="luci-app-ustb-login" url="https://github.com/Jason23347/luci-app-ustb-login" desc="ImmortalWrt 校园网自动登录插件" />
<SiteCard title="Campus-Linker" url="https://github.com/IamJasperJ/USTB_Campus-Linker" desc="自动登入校园网的玩具" />
<SiteCard title="LoginUSTBNetwork" url="https://github.com/USTBDeveloper/LoginUSTBNetwork" desc="校园网登录多种方式" />
<SiteCard title="ustb_login" url="https://github.com/z52527/ustb_login" desc="USTB 网络登录脚本" />
<SiteCard title="USTB_login" url="https://github.com/LoveFlamehaze/USTB_login" desc="北科大校园网自动登录" />
<SiteCard title="USTB-MFA" url="https://github.com/James0x57/USTB-MFA" desc="USTB 校园网 MFA 验证码识别" />
</SiteSection>

## 教务 / 成绩 / 课表 {#tools-academic}

<SiteSection subtitle="共 14 个">
<SiteCard title="USTB-OES-JS" url="https://github.com/isHarryh/USTB-OES-JS" desc="锐格平台和中国大学 MOOC 参考答案辅助脚本" />
<SiteCard title="USTB-Awesome-JS" url="https://github.com/isHarryh/USTB-Awesome-JS" desc="锐格 / 慕课 / 超星 / 抢课 等线上平台辅助脚本合集（油猴）" />
<SiteCard title="USTB-QGXF" url="https://github.com/isHarryh/USTB-QGXF" desc="强国先锋系列课程自动代理（国防教育/DXPX）" />
<SiteCard title="USTB-Course-ICS-Exporter" url="https://github.com/NicodeSS/USTB-Course-ICS-Exporter" desc="从北科大微教务导出课表 ICS 文件" />
<SiteCard title="USTB-NoStop" url="https://github.com/LYOfficial/USTB-NoStop" desc="视频播放网站反复弹窗导致视频播放异常的解决方案" />
<SiteCard title="UTSB-ScoreRank" url="https://github.com/Avioleter/UTSB-ScoreRank" desc="USTB 教务系统油猴脚本：自动显示成绩排名、计算加权平均分、一键导出 Excel" />
<SiteCard title="ustb-grade-rank-extension" url="https://github.com/napnah/ustb-grade-rank-extension" desc="教务系统成绩排名浏览器扩展" />
<SiteCard title="USTB-daily-report" url="https://github.com/Jason23347/USTB-daily-report" desc="Auto daily health report 北京科技大学自动平安报" />
<SiteCard title="ustb-daily-with-hass" url="https://github.com/terrance-liang/ustb-daily-with-hass" desc="基于 Home Assistant 位置数据的平安报" />
<SiteCard title="USTB_edusys" url="https://github.com/shinerio/USTB_edusys" desc="北京科技大学本科教务管理系统" />
<SiteCard title="USTB-major-extension-helper" url="https://github.com/FKSJDSCZ/USTB-major-extension-helper" desc="专业选修课程查询与选课辅助" />
<SiteCard title="USTB-curricula-variable-helper" url="https://github.com/FKSJDSCZ/USTB-curricula-variable-helper" desc="选课变量系统查询与选课辅助" />
<SiteCard title="USTB-api" url="https://github.com/abowloflrf/USTB-api" desc="elearning.ustb.edu.cn 课程 API（PHP）" />
<SiteCard title="ustb-elearning" url="https://github.com/kotoyuuko/ustb-elearning" desc="USTB Elearning System API" />
</SiteSection>

## 在线学习 / 网课 {#tools-online-learning}

<SiteSection subtitle="共 2 个">
<SiteCard title="USTB-RongYouXueTang-Automation-Script" url="https://github.com/study-233/USTB-RongYouXueTang-Automation-Script" desc="USTB 融优学堂自动刷课脚本" />
<SiteCard title="USTB-RongYouXueTang-2508-WuYu-River-Automation-script" url="https://github.com/River-ut/USTB-RongYouXueTang-2508-WuYu-River-Automation-script" desc="全自动实现网课代刷" />
</SiteSection>

## 趣味 / 游戏 / 杂项 {#tools-fun}

<SiteSection subtitle="共 13 个">
<SiteCard title="go-arcade-ustb" url="https://github.com/zeronx798/go-arcade-ustb" desc="北科周边街机游戏地图" />
<SiteCard title="USTB-Adventure" url="https://github.com/RoboEva/USTB-Adventure" desc="基于 FunCode 平台的跑酷类游戏" />
<SiteCard title="auto-get-ustb-ammeter" url="https://github.com/CakeAL/auto-get-ustb-ammeter" desc="自动获取北科电表电量并整理成 CSV" />
</SiteSection>

## AI / 机器学习 / 爬虫 {#tools-ai}

<SiteSection subtitle="共 6 个">
<SiteCard title="USTBCrawlers" url="https://github.com/nladuo/USTBCrawlers" desc="「那些年，我爬过的北科」定向爬虫教程" />
<SiteCard title="AI-GROWING-USTB-305LAB" url="https://github.com/2JONAS/AI-GROWING-USTB-305LAB" desc="AI 305 实验室成长记录" />
<SiteCard title="ustb-ai3d" url="https://github.com/ustb-ai3d" desc="北科大 AI3D 视觉实验室" />
</SiteSection>

## 系统 / 编译器 / 体系结构 {#tools-system}

<SiteSection subtitle="共 7 个">
<SiteCard title="MimiC" url="https://github.com/ustb-owl/MimiC" desc="SysY 编译器（USTB NSCSCC 队）" />
<SiteCard title="Uranus" url="https://github.com/ustb-owl/Uranus" desc="MIPS 处理器（MaxXing & USTB NSCSCC）" />
<SiteCard title="TinyMIPS" url="https://github.com/ustb-owl/TinyMIPS" desc="从零搭建完整计算机系统的本科教学项目" />
<SiteCard title="Lava" url="https://github.com/ustb-owl/Lava" desc="C 子集编译器（USTB OWL Wheel Lab）" />
<SiteCard title="ustb-os-tutorial" url="https://github.com/USTB-806/ustb-os-tutorial" desc="USTB 操作系统课程在线教程" />
<SiteCard title="ustb-os-kernel" url="https://github.com/USTB-806/ustb-os-kernel" desc="USTB OS 内核" />
<SiteCard title="judger" url="https://github.com/USTB-LETTers/judger" desc="Docker 沙箱内运行用户代码并比对输出" />
</SiteSection>

## LaTeX 模板 {#tools-latex}

<SiteSection subtitle="共 12 个">
<SiteCard title="USTBExam" url="https://github.com/htharoldht/USTBExam" desc="北京科技大学试卷 LaTeX 模板" />
<SiteCard title="USTBReport" url="https://github.com/htharoldht/USTBReport" desc="USTB 报告主题" />
<SiteCard title="USTBBook" url="https://github.com/htharoldht/USTBBook" desc="USTB LaTeX 书籍模板" />
<SiteCard title="USTBThesis" url="https://github.com/Jeff-Hugh/USTBThesis" desc="北京科技大学硕博毕业设计论文 LaTeX 模板" />
<SiteCard title="ustb-thesis" url="https://github.com/bosswnx/ustb-thesis" desc="USTB 本科毕业论文 LaTeX 模板" />
<SiteCard title="ustb-latex-template" url="https://github.com/Ivanbeethoven/ustb-latex-template" desc="北科大硕/博士毕业论文 LaTeX 模板" />
<SiteCard title="USTB-latex" url="https://github.com/qin-nz/USTB-latex" desc="USTB 本科生 LaTeX 模板" />
<SiteCard title="LaTeX-Beamer-USTB" url="https://github.com/ShawniLee/LaTeX-Beamer-USTB" desc="Beamer 模板与课程 report 模板" />
<SiteCard title="USTB-Beamer-Theme" url="https://github.com/koumingyang/USTB-Beamer-Theme" desc="USTB Beamer 主题" />
<SiteCard title="USTB-tex" url="https://github.com/Dafeigy/USTB-tex" desc="USTB 报告 LaTeX 模板" />
<SiteCard title="Latex-for-USTB-Master-Thesis" url="https://github.com/oliang/Latex-for-USTB-Master-Thesis" desc="USTB 硕士论文 Latex" />
<SiteCard title="ustb-thesis" url="https://github.com/westye655/ustb-thesis" desc="USTB 论文 LaTeX 模板" />
</SiteSection>

## 其他小工具 {#tools-misc}

<SiteSection subtitle="共 17 个">
<SiteCard title="Gewulab" url="https://github.com/BarnabyAlexandraBaron/Gewulab" desc="大物实验数字计算脚本" />
<SiteCard title="USTB-Signals-Lab" url="https://github.com/LYOfficial/USTB-Signals-Lab" desc="信号与系统分析实验 Python 模拟" />
<SiteCard title="FunCode-Test-USTB" url="https://github.com/jeasonstudio/FunCode-Test-USTB" desc="2016.7 USTB FunCode Games 编程考核" />
<SiteCard title="USTBL" url="https://github.com/LYOfficial/USTBL" desc="USTB-SkyCode Minecraft Launcher" />
<SiteCard title="Markdown-Templates" url="https://github.com/xingwangzhe/Markdown-Templates" desc="包含 USTB 模板的 Markdown 模板集合" />
<SiteCard title="USTB-Tool" url="https://github.com/xingwangzhe/USTB-Tool" desc="USTB 综合工具：地图、社团、选课推荐等" />
<SiteCard title="USTB-iCourse-Select-Helper" url="https://github.com/USTB-iCourse-Select-Helper/USTB-iCourse-Select-Helper" desc="课程信息/推荐/社团/校友" />
<SiteCard title="discover_PLF" url="https://github.com/houjingyi-ustb/discover_PLF" desc="编程语言基础探索" />
<SiteCard title="OS-Work" url="https://github.com/lyfcsdo2011/OS-Work" desc="USTB 操作系统实验作业" />
<SiteCard title="pic_to_wall" url="https://github.com/Albert723/pic_to_wall" desc="爬虫图片组合字符示例" />
<SiteCard title="ess" url="https://github.com/moleculea/ess" desc="USTB Encyclopedic Search System" />
<SiteCard title="USTB-NLP_Group" url="https://github.com/imageFish/USTB-NLP_Group" desc="USTB NLP Group" />
<SiteCard title="spack-repos" url="https://github.com/hpcde/spack-repos" desc="Spack repos for HPC&DE, USTB" />
<SiteCard title="USTB-Term-Assignments" url="https://github.com/isHarryh/USTB-Term-Assignments" desc="USTB 课程大作业合集" />
<SiteCard title="USTB-EmbeddedSystem-2024" url="https://github.com/exder145/USTB-EmbeddedSystem-2024" desc="24 学年大三上嵌入式实验 (STM32F10x)" />
</SiteSection>