---
layout: page
title: 北京科技大学导航站
aside: false
---

<style>
.nav-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 0.5rem 0 1.5rem;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.nav-strip a {
  flex: 1 1 220px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  transition: transform 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
}
.nav-strip a:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}
.section-anchor {
  scroll-margin-top: 80px;
}
.lead {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem;
}
</style>

<div class="nav-strip">
  <a href="#official">🏫 学校官方网站</a>
  <a href="#tools">🛠️ 开源工具</a>
  <a href="#materials">📚 学习资料</a>
</div>

<p class="lead">
  欢迎来到 <strong>USTB All-In-One</strong>！这里集中整理了北京科技大学校友们开源的 <strong>GitHub 实用工具</strong>、<strong>校园服务脚本</strong>、<strong>学习资料</strong> 以及 <strong>校内外常用站点</strong>。所有内容均为纯文本 Markdown，零门槛即可参与贡献。
</p>

<a id="official" class="section-anchor"></a>

## 🏫 学校官方网站

这里收集了北京科技大学官方提供的各类基础服务网站、院系官网、研究院与重点实验室，以及学生组织与周边站点。


### 学校主站与门户 {#official-main}

<SiteSection subtitle="共 9 个">
  <SiteCard title="学校官网" url="https://www.ustb.edu.cn/" desc="北京科技大学官方网站" />
  <SiteCard title="新闻网" url="https://news.ustb.edu.cn/" desc="校内新闻、通知公告、媒体看北科" />
  <SiteCard title="信息公开" url="http://xxgk.ustb.edu.cn/" desc="学校信息公开网" />
  <SiteCard title="校务公开" url="https://www1.ustb.edu.cn/" desc="校务公开综合服务" />
  <SiteCard title="北科记忆" url="https://memory.ustb.edu.cn/" desc="学校历史、人物、大事记" />
  <SiteCard title="视觉形象 VI" url="https://vi.ustb.edu.cn/" icon="/img/60038" desc="学校视觉形象识别系统" />
  <SiteCard title="外网访问" url="https://n.ustb.edu.cn/" icon="/img/020c7cf486002081041015a18bbb1866.png" desc="校外访问校内资源" />
  <SiteCard title="北科元宇宙" url="https://www.ustb.world/" desc="像素北科 · 元宇宙体素工作坊" />
  <SiteCard title="学校英译规范" url="https://info.ustb.edu.cn/docs//2022-03/da1bba2f6f3247bc99ae4a8593e9ec02.pdf" desc="学校校名校誉使用规范（PDF）" />
</SiteSection>

### 教学与公共服务 {#official-teaching}

<SiteSection subtitle="共 37 个">
  <SiteCard title="教务系统" url="https://jwgl.ustb.edu.cn/" icon="/img/NS2022062.png" desc="选课、查看课表、查看考试成绩" />
  <SiteCard title="本研一体化教务" url="https://seam.ustb.edu.cn/" icon="/img/90" desc="新版一体化教务平台" />
  <SiteCard title="教务处" url="https://jwc.ustb.edu.cn/" icon="/img/509ae21a42994049d34097039b9930d3.png" desc="通知公告、规章制度" />
  <SiteCard title="研究生院" url="http://gs.ustb.edu.cn/" desc="研究生管理系统" />
  <SiteCard title="研究生招生" url="https://yzxc.ustb.edu.cn/" desc="考研、招生简章" />
  <SiteCard title="本科招生" url="https://zhaosheng.ustb.edu.cn/" icon="/img/222" desc="高考招生信息" />
  <SiteCard title="就业服务平台" url="https://job.ustb.edu.cn/" icon="/img/edaee93f024d164ba6c29fe77ba1463b.png" desc="校园招聘、就业指导" />
  <SiteCard title="图书馆" url="https://lib.ustb.edu.cn/" icon="/img/191" desc="馆藏目录、电子资源" />
  <SiteCard title="网络教学平台" url="https://elearning.ustb.edu.cn/" desc="在线课程平台" />
  <SiteCard title="教学证明服务" url="http://bkcjd.ustb.edu.cn/" desc="在校生成绩、学历证明开具" />
  <SiteCard title="缴费大厅" url="https://pay.ustb.edu.cn/" desc="学杂费缴纳" />
  <SiteCard title="正版软件" url="https://soft.ustb.edu.cn/" icon="/img/117" desc="学校正版软件下载" />
  <SiteCard title="信息办" url="https://info.ustb.edu.cn/" desc="信息化建设与管理办公室" />
  <SiteCard title="网络教学" url="https://byyt.ustb.edu.cn/" icon="/img/60041" desc="贝壳学堂" />
  <SiteCard title="校园卡服务" url="https://info.ustb.edu.cn/xxfw/xykfw/" desc="校园卡充值、挂失、电子校园卡" />
  <SiteCard title="OA 站点" url="http://oacheck.ustb.edu.cn/" desc="需经 VPN 访问" />
  <SiteCard title="体育部" url="https://tyb.ustb.edu.cn/" icon="/img/8eb768ea1a31d1b3dcec6d2293a44ced.png" desc="体育场馆、体测" />
  <SiteCard title="办事大厅" url="http://e.ustb.edu.cn" icon="/img/XT2017008.png" desc="一站式网上办事服务平台" />
  <SiteCard title="安全教育平台" url="https://bkdaqjy.ustb.edu.cn" />
  <SiteCard title="北科期刊中心" url="https://qkzx.ustb.edu.cn/qkdh/index.htm" icon="/img/194" />
  <SiteCard title="北科学位论文" url="http://thesis.ustb.edu.cn" icon="/img/60007" />
  <SiteCard title="贝壳学堂" url="http://mooc.ustb.edu.cn/" icon="/img/60041" desc="在线学习与培训平台" />
  <SiteCard title="化学实验虚拟仿真" url="http://xnaq.ustb.edu.cn" />
  <SiteCard title="继续教育平台" url="http://emis.ustb.edu.cn" icon="/img/60010" desc="继续教育管理与服务平台" />
  <SiteCard title="教师能力培训" url="http://jsfz.ustb.edu.cn/developCenter/home" icon="/img/192" />
  <SiteCard title="教学资源平台" url="https://djvod.ustb.edu.cn/Default.aspx?stationID=1" icon="/img/92" />
  <SiteCard title="期刊导航" url="https://sfx-86ustb.hosted.exlibrisgroup.com.cn/ej/ustb/ej.htm" />
  <SiteCard title="实验室安全教育" url="http://aqjy.ustb.edu.cn" icon="/img/XT2017026.png" desc="实验室安全教育与考试系统" />
  <SiteCard title="图书馆书目检索" url="http://lib1.ustb.edu.cn" icon="/img/60031" />
  <SiteCard title="图书检索" url="http://lib1.ustb.edu.cn:8080/opac/search.php" />
  <SiteCard title="危化品采购" url="https://whgl.ustb.edu.cn:8000" icon="/img/97" />
  <SiteCard title="新生入馆教育" url="http://rgjy.ustb.edu.cn" icon="/img/60023" />
  <SiteCard title="虚拟仿真实验" url="http://ilab.ustb.edu.cn" icon="/img/60032" desc="虚拟仿真实验教学平台" />
  <SiteCard title="学术资源发现" url="http://discovery.ustb.edu.cn:1701/primo_library/libweb/action/search.do?vid=ustb" icon="/img/101" />
  <SiteCard title="研究生教学" url="https://ustb2.yuketang.cn/pro/portal/courselist" icon="/img/60037" />
  <SiteCard title="雨课堂" url="https://ustb.yuketang.cn/" icon="/img/60037" desc="雨课堂线上教育平台" />
  <SiteCard title="智慧教学平台" url="https://ustb.smartclass.cn" icon="/img/60078" desc="智慧教学与互动平台" />
  <SiteCard title="专业拓展课平台" url="https://mec.ustb.edu.cn/logon" icon="/img/150" />
</SiteSection>

### 学院官网 {#official-schools}

<SiteSection subtitle="共 11 个">
  <SiteCard title="冶金与生态工程学院" url="https://metall.ustb.edu.cn/" />
  <SiteCard title="材料科学与工程学院" url="https://mse.ustb.edu.cn/" />
  <SiteCard title="机械工程学院" url="https://me.ustb.edu.cn/" />
  <SiteCard title="自动化学院" url="https://saee.ustb.edu.cn/" />
  <SiteCard title="计算机与通信工程学院" url="https://scce.ustb.edu.cn/" />
  <SiteCard title="人工智能学院" url="https://ai.ustb.edu.cn/" />
  <SiteCard title="经济管理学院" url="https://sem.ustb.edu.cn/" />
  <SiteCard title="外国语学院" url="https://sfl.ustb.edu.cn/" />
  <SiteCard title="文法学院" url="https://law.ustb.edu.cn/" />
  <SiteCard title="马克思主义学院" url="https://marx.ustb.edu.cn/" />
  <SiteCard title="国家卓越工程师学院" url="https://gcsxy.ustb.edu.cn/" />
</SiteSection>

### 研究院与重点实验室 {#official-labs}

<SiteSection subtitle="共 5 个">
  <SiteCard title="新金属材料国家重点实验室" url="http://skl.ustb.edu.cn/" />
  <SiteCard title="新材料技术研究院" url="https://adma.ustb.edu.cn/" />
  <SiteCard title="工程技术研究院" url="http://iet.ustb.edu.cn/" />
  <SiteCard title="国家材料服役安全科学中心" url="https://ncms.ustb.edu.cn/" />
  <SiteCard title="碳中和研究院" url="https://icn.ustb.edu.cn/" />
</SiteSection>

### 学生事务 {#official-student}

<SiteSection subtitle="共 3 个">
  <SiteCard title="贝壳校园微服务" url="http://jwstu.ustb.edu.cn" icon="/img/60074" desc="校园微服务聚合平台" />
  <SiteCard title="心理素质教育" url="http://xinli.ustb.edu.cn/" icon="/img/XT2017024.png" desc="心理素质与心理咨询教育中心" />
  <SiteCard title="智慧学工" url="http://stu.ustb.edu.cn" icon="/img/60034" desc="学生日常事务统一管理平台" />
</SiteSection>

### 财务资产 {#official-finance}

<SiteSection subtitle="共 3 个">
  <SiteCard title="财务服务" url="http://fsp.ustb.edu.cn" icon="/img/XT2017011.png" desc="财务报销、酬金发放、财务查询等服务综合平台" />
  <SiteCard title="财务服务助手" url="http://chat.ustb.edu.cn/page/site/newPc?app=1" desc="财务知识智能问答智能体" />
  <SiteCard title="校园缴费" url="https://xyjf.ustb.edu.cn/#/login?redirect=%2Fdashboard" icon="/img/XT2017005.png" desc="网上缴纳网费、学宿费等费用的电子支付平台。" />
</SiteSection>

### 组织人事 {#official-hr}

<SiteSection subtitle="共 1 个">
  <SiteCard title="论文综合管理" url="https://lwgl.ustb.edu.cn" icon="/img/NS2022017.png" desc="论文信息管理系统旨在高效管理学术论文的各类信息。系统提供论文录入功能，涵盖标题、作者、摘要、关键词、发表期刊等关键信息，支持批量导入导出，方便快速整理数据。用户可按作者、关键词、发表时间等多维度搜索查询，精准定位所需论文。" />
</SiteSection>

### 行政办公 {#official-admin}

<SiteSection subtitle="共 1 个">
  <SiteCard title="外事服务" url="http://ims.ustb.edu.cn" icon="/img/XT2017015.png" desc="学校师生出国（境）、海外交流项目等事务服务平台" />
</SiteSection>

### IT 服务 {#official-it}

<SiteSection subtitle="共 18 个">
  <SiteCard title="北科云盘" url="http://yunpan.ustb.edu.cn" icon="/img/XT2019004.png" desc="面向师生服务的文档存储和分享管理平台" />
  <SiteCard title="北科云盘客户端" url="https://soft.ustb.edu.cn/product.html?id=362" desc="校园文件存储系统客户端" />
  <SiteCard title="福昕PDF编辑器" url="https://soft.ustb.edu.cn/product.html?id=355" />
  <SiteCard title="金山WPS365软件" url="https://soft.ustb.edu.cn/product.html?id=338" />
  <SiteCard title="麒麟操作系统" url="https://soft.ustb.edu.cn/product.html?id=392" />
  <SiteCard title="微软软件激活工具" url="https://soft.ustb.edu.cn/product.html?id=370" />
  <SiteCard title="校园直播" url="https://live.ustb.edu.cn" icon="/img/60048" desc="校园活动直播与录制平台" />
  <SiteCard title="校园IPTV" url="http://iptv.ustb.edu.cn" icon="/img/60050" desc="网络电视" />
  <SiteCard title="Adobe Desktop" url="https://soft.ustb.edu.cn/product.html?id=361" />
  <SiteCard title="EndNote21" url="https://soft.ustb.edu.cn/product.html?id=353" />
  <SiteCard title="IT服务助手" url="http://chat.ustb.edu.cn/page/site/newPc?app=2" desc="信息办IT知识智能问答智能体" />
  <SiteCard title="MathType" url="https://soft.ustb.edu.cn/product.html?id=388" />
  <SiteCard title="MATLAB R2024b" url="https://soft.ustb.edu.cn/product.html?id=386" />
  <SiteCard title="NoteExpress" url="https://soft.ustb.edu.cn/product.html?id=347" />
  <SiteCard title="Office 2024" url="https://soft.ustb.edu.cn/product.html?id=383" />
  <SiteCard title="OriginPro 2025" url="https://soft.ustb.edu.cn/product.html?id=389" />
  <SiteCard title="Windows 11" url="https://soft.ustb.edu.cn/product.html?id=1" />
  <SiteCard title="Xmind-Windows" url="https://soft.ustb.edu.cn/product.html?id=390" />
</SiteSection>

### AI 与智能服务 {#official-ai}

<SiteSection subtitle="共 1 个">
  <SiteCard title="DeepSeek-R1" url="http://chat.ustb.edu.cn" icon="/img/85a4e352d4f4dc1f9c7be9ecd25b0d99.png" desc="北科大DeepSeek-R1大模型" />
</SiteSection>

### 学生组织与周边站点 {#official-organization}

<SiteSection subtitle="共 4 个">
  <SiteCard title="共青团北科大委员会" url="https://5470.ustb.edu.cn/" desc="校团委官网（5470 即「北科大精神」的口号）" />
  <SiteCard title="校友会" url="https://alumni.ustb.edu.cn/" desc="校友会、母校新闻" />
  <SiteCard title="iBeiKe 爱北科" url="https://user.ibeike.work/" desc="校学生会 iBeiKe 团队的微信小程序、课表系统" />
  <SiteCard title="806 实验室" url="https://ustb-806.github.io/" desc="「勤敏轩」学生创新实验室" />
</SiteSection>

<a id="tools" class="section-anchor"></a>

## 🛠️ 开源工具

收集北科大相关的实用小工具、脚本、测试程序等。仓库名带 `USTB` / `ustb` 关键字的校友项目均收录于此。

### 通用工具 / 元工具 {#tools-general}

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

### 选课 / 抢课 {#tools-course}

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

### 校园网 / 网络 {#tools-network}

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

### 教务 / 成绩 / 课表 {#tools-academic}

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

### 在线学习 / 网课 {#tools-online-learning}

<SiteSection subtitle="共 2 个">
<SiteCard title="USTB-RongYouXueTang-Automation-Script" url="https://github.com/study-233/USTB-RongYouXueTang-Automation-Script" desc="USTB 融优学堂自动刷课脚本" />
<SiteCard title="USTB-RongYouXueTang-2508-WuYu-River-Automation-script" url="https://github.com/River-ut/USTB-RongYouXueTang-2508-WuYu-River-Automation-script" desc="全自动实现网课代刷" />
</SiteSection>

### 趣味 / 游戏 / 杂项 {#tools-fun}

<SiteSection subtitle="共 13 个">
<SiteCard title="go-arcade-ustb" url="https://github.com/zeronx798/go-arcade-ustb" desc="北科周边街机游戏地图" />
<SiteCard title="USTBird" url="https://github.com/iloveOREO/USTBird" desc="扑翼飞行器控制代码" />
<SiteCard title="USTB-Adventure" url="https://github.com/RoboEva/USTB-Adventure" desc="基于 FunCode 平台的跑酷类游戏" />
<SiteCard title="auto-get-ustb-ammeter" url="https://github.com/CakeAL/auto-get-ustb-ammeter" desc="自动获取北科电表电量并整理成 CSV" />
<SiteCard title="ustb-campus" url="https://github.com/U202142209/ustb-campus" desc="「贝壳校园墙」小程序改编，golang + vue3 实现" />
<SiteCard title="USTB-Welcome" url="https://github.com/Vincent-Leon/USTB-Welcome" desc="校学生会 iBeiKe 团队新生手册小程序" />
<SiteCard title="USTB-Lost-and-Found" url="https://github.com/Vincent-Leon/USTB-Lost-and-Found" desc="校学生会 iBeiKe 团队失物招领小程序" />
<SiteCard title="USTB-Smart-Car-competition" url="https://github.com/AutoMother/USTB-Smart-Car-competition" desc="北科大智能车竞赛相关代码" />
<SiteCard title="USTBSmartCarRaceTimer_Upper" url="https://github.com/Xiangyuan-Xie/USTBSmartCarRaceTimer_Upper" desc="智能汽车竞赛计时器 PC 端" />
<SiteCard title="ustb_smartcar19th" url="https://github.com/CarllSagan/ustb_smartcar19th" desc="21 届 USTB 智能车参赛作品" />
<SiteCard title="ustb_19th_smartcar" url="https://github.com/ljk4/ustb_19th_smartcar" desc="智能车校内赛 ROS 组：Cartographer 建图、YOLOv5 等" />
<SiteCard title="ustb-16th-ros" url="https://github.com/ChengJB/ustb-16th-ros" desc="第 16 届智能车 ROS" />
<SiteCard title="USTB_MEI_Camera" url="https://github.com/FKSJDSCZ/USTB_MEI_Camera" desc="ABU ROBOCON 2024 多相机检测系统（YOLO+TensorRT）" />
</SiteSection>

### AI / 机器学习 / 爬虫 {#tools-ai}

<SiteSection subtitle="共 6 个">
<SiteCard title="USTBCrawlers" url="https://github.com/nladuo/USTBCrawlers" desc="「那些年，我爬过的北科」定向爬虫教程" />
<SiteCard title="Predictive-and-Adaptive-Deep-Coding-for-Wireless-Image-Transmission-in-Semantic-Communication" url="https://github.com/wyzhang-ustb/Predictive-and-Adaptive-Deep-Coding-for-Wireless-Image-Transmission-in-Semantic-Communication" desc="IEEE TWC 论文 Pytorch 代码" />
<SiteCard title="AI-GROWING-USTB-305LAB" url="https://github.com/2JONAS/AI-GROWING-USTB-305LAB" desc="AI 305 实验室成长记录" />
<SiteCard title="ustb-ai3d" url="https://github.com/ustb-ai3d" desc="北科大 AI3D 视觉实验室" />
<SiteCard title="magang" url="https://github.com/ustb-ai3d/magang" desc="马钢钢板表面缺陷检测" />
<SiteCard title="PointRCNN" url="https://github.com/cxl-ustb/PointRCNN" desc="PaddlePaddle 复现 PointRCNN" />
</SiteSection>

### 系统 / 编译器 / 体系结构 {#tools-system}

<SiteSection subtitle="共 7 个">
<SiteCard title="MimiC" url="https://github.com/ustb-owl/MimiC" desc="SysY 编译器（USTB NSCSCC 队）" />
<SiteCard title="Uranus" url="https://github.com/ustb-owl/Uranus" desc="MIPS 处理器（MaxXing & USTB NSCSCC）" />
<SiteCard title="TinyMIPS" url="https://github.com/ustb-owl/TinyMIPS" desc="从零搭建完整计算机系统的本科教学项目" />
<SiteCard title="Lava" url="https://github.com/ustb-owl/Lava" desc="C 子集编译器（USTB OWL Wheel Lab）" />
<SiteCard title="ustb-os-tutorial" url="https://github.com/USTB-806/ustb-os-tutorial" desc="USTB 操作系统课程在线教程" />
<SiteCard title="ustb-os-kernel" url="https://github.com/USTB-806/ustb-os-kernel" desc="USTB OS 内核" />
<SiteCard title="judger" url="https://github.com/USTB-LETTers/judger" desc="Docker 沙箱内运行用户代码并比对输出" />
</SiteSection>

### LaTeX 模板 {#tools-latex}

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

### 其他小工具 {#tools-misc}

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
<SiteCard title="MSP_432_learning_material" url="https://github.com/USTB-3rd-zckj-techdepartment/MSP_432_learning_material" desc="MSP432P401r 学习资料" />
<SiteCard title="TMS320F28335_Learning_Notes" url="https://github.com/USTB-3rd-zckj-techdepartment/TMS320F28335_Learning_Notes" desc="TMS320F28335 学习笔记" />
</SiteSection>

<a id="materials" class="section-anchor"></a>

## 📚 学习资料

收集北科大的各类课程资料、期末复习宝典、实验报告以及 LaTeX 模板等。仓库名带 `USTB` / `ustb` 关键字的校友项目均收录于此。

### 论文 / LaTeX 模板 {#materials-latex}

<SiteSection subtitle="共 12 个">
<SiteCard title="USTBThesis" url="https://github.com/Jeff-Hugh/USTBThesis" desc="北京科技大学硕博毕业设计论文 LaTeX 模板" />
<SiteCard title="ustb-thesis" url="https://github.com/bosswnx/ustb-thesis" desc="USTB 本科毕业论文 LaTeX 模板" />
<SiteCard title="ustb-latex-template" url="https://github.com/Ivanbeethoven/ustb-latex-template" desc="北科大硕/博士毕业论文 LaTeX 模板" />
<SiteCard title="USTB-latex" url="https://github.com/qin-nz/USTB-latex" desc="USTB 本科生 LaTeX 模板" />
<SiteCard title="USTBExam" url="https://github.com/htharoldht/USTBExam" desc="北京科技大学试卷 LaTeX 模板" />
<SiteCard title="USTBReport" url="https://github.com/htharoldht/USTBReport" desc="USTB 报告主题" />
<SiteCard title="USTBBook" url="https://github.com/htharoldht/USTBBook" desc="USTB LaTeX 书籍模板" />
<SiteCard title="LaTeX-Beamer-USTB" url="https://github.com/ShawniLee/LaTeX-Beamer-USTB" desc="Beamer 模板与课程 report 模板" />
<SiteCard title="USTB-Beamer-Theme" url="https://github.com/koumingyang/USTB-Beamer-Theme" desc="USTB Beamer 主题" />
<SiteCard title="USTB-tex" url="https://github.com/Dafeigy/USTB-tex" desc="USTB 报告 LaTeX 模板" />
<SiteCard title="Latex-for-USTB-Master-Thesis" url="https://github.com/oliang/Latex-for-USTB-Master-Thesis" desc="USTB 硕士论文 Latex" />
<SiteCard title="ustb-thesis" url="https://github.com/westye655/ustb-thesis" desc="USTB 论文 LaTeX 模板" />
</SiteSection>

### 综合资料 / 课程合集 {#materials-courses}

<SiteSection subtitle="共 19 个">
<SiteCard title="USTB-Course-materials" url="https://github.com/Orochisun/USTB-Course-materials" desc="北科课程资料，保及格" />
<SiteCard title="USTB-Signals-Lab" url="https://github.com/LYOfficial/USTB-Signals-Lab" desc="信号与系统分析实验 Python 模拟" />
<SiteCard title="USTB_DigitalLogic_2024" url="https://github.com/episvr/USTB_DigitalLogic_2024" desc="北京科技大学数字逻辑 2024 年秋作业及实验代码" />
<SiteCard title="USTB-Courses" url="https://github.com/Sccot/USTB-Courses" desc="大量北京科技大学相关课程及考研资料" />
<SiteCard title="USTB-CS-Courses" url="https://github.com/USTB-CS/USTB-CS-Courses" desc="计算机专业课件、历年卷及作业解答汇总" />
<SiteCard title="USTB-KaoYan" url="https://github.com/ustb-msc/USTB-KAOYAN" desc="北京科技大学历年考研专业课真题及题解" />
<SiteCard title="USTB-resource" url="https://github.com/Starlitnightly/USTB-resource" desc="北科课程资源库，目前包含数据结构-实验-计蒜客等" />
<SiteCard title="courses-mse-ustb" url="https://github.com/Bit-Part-Young/courses-mse-ustb" desc="材料学院材科专业课程资料（高数、物理、C++、C 语言等）" />
<SiteCard title="Course-code-and-project-homework" url="https://github.com/lyy0709/Course-code-and-project-homework" desc="北科大课程相关代码及项目作业" />
<SiteCard title="Course-Assignment" url="https://github.com/tangrizzly/Course-Assignment" desc="USTB Course Lab & Assignment" />
<SiteCard title="ustb-806.github.io" url="https://github.com/USTB-806/ustb-806.github.io" desc="「勤敏轩」学生创新实验室官方网站" />
<SiteCard title="USTB-miniPaper" url="https://github.com/JackHCC/USTB-miniPaper" desc="计通学院大学相关课程报告汇总" />
<SiteCard title="USTB-Computer-Courses-Codes" url="https://github.com/WitchElaina/USTB-Computer-Courses-Codes" desc="计算机系课程代码总集，个人导航仓库" />
<SiteCard title="ustb-class-homework" url="https://github.com/BoffinZhang/Collection-of-Study-Materials-USTB-CS" desc="计科学习资料合集" />
<SiteCard title="USTB-Paper" url="https://github.com/Albert723/USTB_Paper" desc="北京科技大学课程报告作业" />
<SiteCard title="USTB-Term-Assignments" url="https://github.com/isHarryh/USTB-Term-Assignments" desc="USTB 课程大作业合集" />
<SiteCard title="USTB_CS_Graduate_Analysis" url="https://github.com/NormanBeta/USTB_CS_Graduate_Analysis" desc="计算机考研分析" />
<SiteCard title="USTB-Advanced-Algebra" url="https://github.com/yao-luan/USTB-Advanced-Algebra" desc="工科高等代数复习资料" />
<SiteCard title="USTB-exam-School-of-Energy-and-Environmental-Engineering" url="https://github.com/Acuserpast/USTB-exam-School-of-Energy-and-Environmental-Engineering" desc="能源与动力工程大部分课程 PPT、作业、复习资料、考研真题" />
</SiteSection>

### 数学 / 物理 {#materials-math}

<SiteSection subtitle="共 3 个">
<SiteCard title="USTB-Physical-Experiments" url="https://github.com/simcrq/USTB-Physical-Experiments" desc="USTB 理科物理实验笔记" />
<SiteCard title="Gewulab" url="https://github.com/BarnabyAlexandraBaron/Gewulab" desc="大物实验数字计算脚本" />
<SiteCard title="AQM2014" url="https://github.com/jiyanjiang/AQM2014" desc="USTB 2014 AQM 笔记" />
</SiteSection>

### 计算机 / 软件工程 {#materials-cs}

<SiteSection subtitle="共 51 个">
<SiteCard title="USTB-Data-Structure" url="https://github.com/MontaEllis/USTB-Data-Structure" desc="数据结构" />
<SiteCard title="Data_Structure_of_USTB" url="https://github.com/Williamrjw/Data_Structure_of_USTB" desc="数据结构课程作业" />
<SiteCard title="USTB-cpp-programming" url="https://github.com/CakeAL/ustb-cpp-programming" desc="USTB 程序设计实践 I" />
<SiteCard title="USTB-CPP-Programming" url="https://github.com/study-233/USTB-CPP-Programming" desc="USTB 程序设计基础 A 与程序设计实践 I" />
<SiteCard title="USTB-Programming_Project_Sets" url="https://github.com/Char1esss-xyz/USTB_Programming_Project_Sets" desc="编程实践大作业" />
<SiteCard title="USTB-Data-Algorithm-OJworks" url="https://github.com/liqueural/USTB-Data-Algorithm-OJworks" desc="2023 级数据与算法 OJ 平台实验" />
<SiteCard title="USTB-LambdaOJ-answer" url="https://github.com/baiyeidk/USTB-LambdaOJ-answer" desc="LambdaOJ 答题" />
<SiteCard title="USTB_PrinciplesOfComputerCompositionCourseDesign" url="https://github.com/Lixiaokun0106/USTB_PrinciplesOfComputerCompositionCourseDesign" desc="计组课程设计" />
<SiteCard title="mipsCPU" url="https://github.com/YujiaZhao/mipsCPU" desc="USTB-计算机组成原理实验" />
<SiteCard title="USTB-SingleCycleCPU" url="https://github.com/landingcloud/USTB-SingleCycleCPU" desc="USTB 计组实验，单周期处理器扩展指令" />
<SiteCard title="USTB_5-MIPS" url="https://github.com/ljk98116/USTB_5-MIPS" desc="五级流水线，主频 60MHZ" />
<SiteCard title="USTB-MIPS" url="https://github.com/Renliang-dotcom/USTB_MIPS" desc="MIPS CPU" />
<SiteCard title="single-circle-processor" url="https://github.com/WitchElaina/single-circle-processor" desc="USTB 计组作业" />
<SiteCard title="COAT" url="https://github.com/DLD-USTB/COAT" desc="Computer Organization and Architecture Tutorial" />
<SiteCard title="DLD-USTB/minitinymips" url="https://github.com/DLD-USTB/minitinymips" desc="Mini TinyMIPS" />
<SiteCard title="USTB_LA32R_2024" url="https://github.com/Marquiswhite/USTB_LA32R_2024" desc="LA32R" />
<SiteCard title="USTB-Computer-Networks-Lab" url="https://github.com/A-zero-two-A/USTB-Computer-Networks-Lab" desc="计算机网络实验代码及报告" />
<SiteCard title="USTB-Computer-network-course-design" url="https://github.com/Lixiaokun0106/USTB-Computer-network-course-design" desc="计算机网络课程设计" />
<SiteCard title="network-experiments_2025" url="https://github.com/FENGZIYI0711/network-experiments_2025" desc="2025 USTB 计算机网络实验" />
<SiteCard title="ustb_network_course_design" url="https://github.com/wchstrife/ustb_network_course_design" desc="Jpcap 发送 ARP/ICMP" />
<SiteCard title="LanChat" url="https://github.com/umiskky/LanChat" desc="计网课设 - 聊天室" />
<SiteCard title="ustb-CPU" url="https://github.com/xianzaishi-xiawuyidianzheng/USTB-CPU" desc="支持 MIPS 指令的 CPU（Verilog）" />
<SiteCard title="USTB-Database" url="https://github.com/exder145/USTB-Database" desc="数据库原理课程内容" />
<SiteCard title="USTB-openGauss-lab" url="https://github.com/A-zero-two-A/USTB-openGauss-lab" desc="北科大数据库实验（openGauss）" />
<SiteCard title="DatabaseUSTB2020" url="https://github.com/zhaiyunfan/DatabaseUSTB2020" desc="数据库 2020" />
<SiteCard title="USTB-HospitalManager" url="https://github.com/xianzaishi-xiawuyidianzheng/USTB-HospitalManager" desc="web 搭建校医院管理系统" />
<SiteCard title="USTBHospital" url="https://github.com/Zelda1002/USTBHospital" desc="数据库课程三层 web 应用，docker 封装" />
<SiteCard title="SoftwareEngineering_USTB" url="https://github.com/Kirishima-Mana/SoftwareEngineering_USTB" desc="软件工程课程设计" />
<SiteCard title="-USTB-" url="https://github.com/weizhusong2024/-USTB-" desc="编译原理实验代码" />
<SiteCard title="CSharpCourseUSTB" url="https://github.com/zhaiyunfan/CSharpCourseUSTB" desc="C# 课程" />
<SiteCard title="ustb-programming" url="https://github.com/dmx20070206/ustb-programming" desc="程序设计" />
<SiteCard title="USTB_digital_logic_homework" url="https://github.com/Nxiso/USTB_digital_logic_homework" desc="数字逻辑作业（计通/自动化）" />
<SiteCard title="ustb-Digital-logic-code" url="https://github.com/FENGZIYI0711/ustb-Digital-logic-code" desc="数字逻辑课程代码" />
<SiteCard title="USTB_Digital_Logic" url="https://github.com/user19122/ustb_Digital_Logic" desc="北科大数字逻辑课程作业" />
<SiteCard title="USTB_FPGA_ExperimentReport_Pros" url="https://github.com/jeasonstudio/USTB_FPGA_ExperimentReport_Pros" desc="数字逻辑 FPGA 实验报告及项目文件" />
<SiteCard title="USTB_verilog_elevator" url="https://github.com/observerw/USTB_verilog_elevator" desc="数字逻辑电梯" />
<SiteCard title="DigitalLogic_Info" url="https://github.com/USTB-806/DigitalLogic_Info" desc="数字逻辑 DLD Info" />
<SiteCard title="DigitalLogic_Info" url="https://github.com/DLD-USTB/DigitalLogic_Info" desc="数字逻辑 DLD Info" />
<SiteCard title="USTB-digital-image-processing" url="https://github.com/flourinee/USTB-digital-image-processing" desc="数字图像处理实验代码" />
<SiteCard title="USTB-Information-security" url="https://github.com/Bighandsome-handsome/USTB-Information-security" desc="信息安全课程" />
<SiteCard title="EOS-Lab-USTB" url="https://github.com/WitchElaina/EOS-Lab-USTB" desc="EOS Lab" />
<SiteCard title="EOS---2025-" url="https://github.com/Bighandsome-handsome/USTB-EOS---2025-" desc="EOS 2025" />
<SiteCard title="2025-USTB-SCCE-cryptography-CGhomework" url="https://github.com/zter0/2025-USTB-SCCE-cryptography-CGhomework" desc="计通现代密码学 CG 编程作业" />
<SiteCard title="USTB-EmbeddedSystem-2024" url="https://github.com/exder145/USTB-EmbeddedSystem-2024" desc="24 学年大三上嵌入式实验" />
<SiteCard title="USTB-embed" url="https://github.com/xianzaishi-xiawuyidianzheng/USTB-embed" desc="嵌入式 STM32 流水灯" />
<SiteCard title="ustb_safetyLab" url="https://github.com/Hermit503/ustb_safetyLab" desc="网络安全实验" />
<SiteCard title="ustb_safetyLab_wx" url="https://github.com/Hermit503/ustb_safetyLab_wx" desc="网络安全实验 wx" />
<SiteCard title="OS-Work" url="https://github.com/lyfcsdo2011/OS-Work" desc="操作系统实验作业" />
<SiteCard title="2026USTBRust-OS" url="https://github.com/Bighandsome-handsome/2026USTBRust-OS" desc="Rust OS 2026" />
<SiteCard title="The-C-java-coding-inUSTB" url="https://github.com/Bighandsome-handsome/The-C-java-coding-inUSTB" desc="C/Java 编码合集" />
</SiteSection>

### 人工智能 / 机器学习 {#materials-ai}

<SiteSection subtitle="共 8 个">
<SiteCard title="USTB-Artificial-Intelligence-Machine-Learning-Practices" url="https://github.com/tes223/USTB-Artificial-Intelligence-Machine-Learning-Practices" desc="2021 级 AI 与机器学习实践" />
<SiteCard title="USTB-Machine-Learning" url="https://github.com/WitchElaina/USTB-Machine-Learning" desc="物联网机器学习实验" />
<SiteCard title="USTB-Pattern-Recognition-AI-Implementation-Practice" url="https://github.com/Harrison-HXLiu/USTB-Pattern-Recognition-AI-Implementation-Practice" desc="模式识别 AI 实践" />
<SiteCard title="USTB-Intelligent-sensing-lab-code" url="https://github.com/flourinee/USTB-Intelligent-sensing-lab-code" desc="智能感知相关代码" />
<SiteCard title="USTB-MLLM_Agent_Paper_Course" url="https://github.com/fearlesman/USTB-MLLM_Agent_Paper_Course" desc="MLLM Agent 论文课程" />
<SiteCard title="BMI_predictor_USTB_2025Spring" url="https://github.com/Sotier71an/BMI_predictor_USTB_2025Spring" desc="AI 与机器学习课程作业" />
<SiteCard title="USTB-web-practice-2020" url="https://github.com/zhaiyunfan/USTB-web-practice-2020" desc="计科大二夏季学期认识实习" />
<SiteCard title="USTB-Aomaotuan_Course_Code" url="https://github.com/Ernest-coding/USTB_Aomaotuan_Course_Code" desc="计科澳猫团小学期项目" />
</SiteSection>

### 机器人 / 智能车 / 自动控制 {#materials-robot}

<SiteSection subtitle="共 18 个">
<SiteCard title="USTB-Smart-Car-competition" url="https://github.com/AutoMother/USTB-Smart-Car-competition" desc="智能车竞赛相关代码" />
<SiteCard title="ustb_19th_smartcar" url="https://github.com/ljk4/ustb_19th_smartcar" desc="校内赛 ROS 组" />
<SiteCard title="ustb_smartcar19th" url="https://github.com/CarllSagan/ustb_smartcar19th" desc="21 届 USTB 智能车参赛作品" />
<SiteCard title="ustb-16th-ros" url="https://github.com/ChengJB/ustb-16th-ros" desc="第 16 届智能车 ROS" />
<SiteCard title="USTBSmartCarRaceTimer_Upper" url="https://github.com/Xiangyuan-Xie/USTBSmartCarRaceTimer_Upper" desc="PC 端计时器" />
<SiteCard title="RobotRaceOfUSTB" url="https://github.com/ysy950803/RobotRaceOfUSTB" desc="智能车比赛" />
<SiteCard title="USTB_CAR" url="https://github.com/liangyongyu/USTB_CAR" desc="自动驾驶小车" />
<SiteCard title="Witsensor-IMU-ros-pkg" url="https://github.com/Lenny-Lee-ustb/Witsensor-IMU-ros-pkg" desc="维特智能 IMU 驱动（Ubuntu 20.04 + noetic）" />
<SiteCard title="Post-Impact-Control-Simulink-Carsim" url="https://github.com/Lenny-Lee-ustb/Post-Impact-Control-Simulink-Carsim" desc="Carsim + MATLAB" />
<SiteCard title="4WD-CAR-ROMA" url="https://github.com/Lenny-Lee-ustb/4WD-CAR-ROMA" desc="4WD 小车包" />
<SiteCard title="4WD-CAR-ROMA-ros2" url="https://github.com/Lenny-Lee-ustb/4WD-CAR-ROMA-ros2" desc="4WD ROS2 包" />
<SiteCard title="fly_control_stm1.1_CRSF_onlyPITCH-ROLL_numb1" url="https://github.com/ZQ-USTB/fly_control_stm1.1_CRSF_onlyPITCH-ROLL_numb1" desc="飞控 STM32 1.1 (CRSF only PITCH/ROLL)" />
<SiteCard title="fly_control_stm1.2_CRSF_R-Y-P_numb2" url="https://github.com/ZQ-USTB/fly_control_stm1.2_CRSF_R-Y-P_numb2" desc="飞控 STM32 1.2 (CRSF R/Y/P)" />
<SiteCard title="Mocap" url="https://github.com/ZQ-USTB/Mocap" desc="Mocap 动捕" />
<SiteCard title="Stair_Loco" url="https://github.com/USTB-YuJ/Stair_Loco" desc="楼梯机器人" />
<SiteCard title="myrobot" url="https://github.com/USTB-YuJ/myrobot" desc="机器人项目" />
<SiteCard title="ustb-embodied-intelligence-lab" url="https://github.com/decade719/ustb-embodied-intelligence-lab" desc="具身智能实验室" />
<SiteCard title="ustb2025mi4c" url="https://github.com/LiangXiaohan506/ustb2025mi4c" desc="2025 世界机器人大赛 BCI 脑控" />
</SiteSection>

### 周边项目 {#materials-others}

<SiteSection subtitle="共 15 个">
<SiteCard title="USTB-Dude" url="https://github.com/dashjay/USTB-Dude" desc="What's up dude?" />
<SiteCard title="memora" url="https://github.com/USTB-806/memora" desc="USTB 806 实验室项目" />
<SiteCard title="Source-of-USTB" url="https://github.com/Source-of-USTB" desc="学习/项目仓库组" />
<SiteCard title="USTB-Welcome" url="https://github.com/Vincent-Leon/USTB-Welcome" desc="iBeiKe 团队新生手册" />
<SiteCard title="USTB-Lost-and-Found" url="https://github.com/Vincent-Leon/USTB-Lost-and-Found" desc="iBeiKe 失物招领" />
<SiteCard title="comment-for-USTB-course" url="https://github.com/dashjay/comment-for-USTB-course" desc="课程评论" />
<SiteCard title="ustbhuangyi" url="https://github.com/ustbhuangyi/ustbhuangyi" desc="慕课网讲师个人主页" />
<SiteCard title="ustbhuangyi-vue-music" url="https://github.com/yuqifang/ustbhuangyi-vue-music" desc="慕课 vue 音乐项目源码" />
<SiteCard title="vue-sell-by-ustbhuangyi" url="https://github.com/mx623303468/vue-sell-by-ustbhuangyi" desc="高仿饿了么外卖移动 WebApp" />
<SiteCard title="vue-music-by-ustbhuangyi" url="https://github.com/adotpeng/vue-music-by-ustbhuangyi" desc="仿 vue 音乐 webapp" />
<SiteCard title="The-Beike" url="https://github.com/isHarryh/The-Beike" desc="大贝壳：USTB 校园助手" />
<SiteCard title="USTB-Term-Assignments" url="https://github.com/isHarryh/USTB-Term-Assignments" desc="USTB 课程大作业合集" />
<SiteCard title="USTB20190823" url="https://github.com/FranklinZhang1/USTB20190823" desc="USTBTAIJI 项目" />
<SiteCard title="ustbaana" url="https://github.com/ustbaana/ustbaana" desc="USTB-AANA 北美校友会" />
<SiteCard title="dev-log" url="https://github.com/christopher-ustb/dev-log" desc="一些技术总结与开发日志" />
</SiteSection>

---