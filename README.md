# 🚀 USTB-All-In-One

> **北京科技大学（USTB）开源项目及资料导航站**

[![MIT License](https://img.shields.io/github/license/LYOfficial/USTB-All-In-One)](LICENSE)
[![Stars](https://img.shields.io/github/stars/LYOfficial/USTB-All-In-One)](https://github.com/LYOfficial/USTB-All-In-One/stargazers)

欢迎来到 **USTB-All-In-One**！这里集中整理了北京科技大学校友们开源的 **GitHub 实用工具**、**校园服务脚本**、**学习资料** 以及 **校内外常用站点**。

本项目是基于 [VitePress](https://vitepress.dev/) 搭建的静态导航站，所有数据都是纯文本 Markdown，零门槛即可参与贡献！

🎉 **[点击这里访问导航站](https://one.ustb.world/)** 🎉

---

## 📑 目录速览

| 页面 | 路径 | 收录内容 |
| --- | --- | --- |
| 🏫 [学校官方网站](docs/official.md) | `/official` | 教务 / 图书馆 / 网络教学 / 学院 / 实验室 / 学生事务 / IT / AI 等官方服务 |
| 🛠️ [开源工具](docs/tools.md) | `/tools` | 抢课、校园网、平安报、AI 等校友开源 GitHub 项目 |
| 📚 [学习资料](docs/materials.md) | `/materials` | 课程合集、LaTeX 模板、复习宝典、实验报告等 |

---

## 🌟 为什么需要这个项目？

USTB 自建校以来人才辈出，许多校友留下了大量宝藏项目。但它们散落在 GitHub 的各个角落难以检索。
**USTB-All-In-One** 把它们集中归类、统一展示，方便所有北科学子**采撷使用**、**前人栽树后人乘凉**！

---

## 🤝 参与贡献（We Need You!）

发现了好用的工具 / 资料？写了一键脚本？整理了期末复习宝典？**通通欢迎提交 PR！**

> 整个仓库的数据层**只有 3 个 Markdown 文件**，对应 3 个导航页面，没有任何数据库。

### 🗂️ 仓库结构

```
USTB-All-In-One/
├── docs/                         # 📦 VitePress 站点根目录
│   ├── index.md                  # 首页（首页不需要改）
│   ├── official.md               # 🏫 学校官方网站（按章节维护 SiteCard）
│   ├── tools.md                  # 🛠️ 开源工具（GitHub 项目）
│   ├── materials.md              # 📚 学习资料（GitHub 项目）
│   ├── CNAME                     # GitHub Pages 域名
│   └── .vitepress/
│       ├── config.mjs            # VitePress 站点配置（导航 / 侧边栏）
│       └── theme/                # 🎨 自定义主题
│           ├── index.js          # 主题入口（注册全局组件）
│           ├── style.css         # 卡片样式（3/2/1 列响应式）
│           └── components/
│               ├── SiteCard.vue  # 站点卡片（图标 + 标题 + 简介）
│               ├── SiteGrid.vue  # 卡片网格容器（响应式）
│               └── SiteSection.vue  # 章节块（仅副标题，由 markdown ## 提供主标题）
└── docs/
    └── public/
        └── img/                  # 🖼️ 本地图标素材（由 <SiteCard icon="/img/..."> 引用）
├── Dockerfile                    # 多阶段 Docker 构建（node:20-alpine → nginx:1.27-alpine）
├── docker-compose.yml            # docker compose 配置（含 healthcheck / 资源限制）
├── docker/
│   └── nginx.conf                # nginx 配置（SPA fallback / gzip / 不可变缓存）
├── package.json                  # npm scripts（dev / build / preview）
└── README.md
```

### ✏️ 三步贡献指南

#### 1. Fork 仓库

点击仓库右上角 **Fork** 按钮：[Fork USTB-All-In-One](https://github.com/LYOfficial/USTB-All-In-One/fork)。

#### 2. 编辑数据文件

根据你要添加的内容，打开对应的 Markdown 文件，新增一段 `SiteCard`：

| 想添加什么 | 编辑哪个文件 | 插入位置 |
| --- | --- | --- |
| 新的官方站点 | `docs/official.md` | 对应章节的 `<SiteSection>…</SiteSection>` 块内 |
| 新的开源工具 | `docs/tools.md` | 对应章节的 `<SiteSection>…</SiteSection>` 块内 |
| 新的学习资料 | `docs/materials.md` | 对应章节的 `<SiteSection>…</SiteSection>` 块内 |

如果你想新增一个**全新章节**，在对应 Markdown 文件中按下面的模板新增一段即可（不需要改任何 Vue 组件或 CSS）：

```markdown
## 🌟 新章节标题

<SiteSection subtitle="共 N 个">
<SiteCard title="项目名" url="https://github.com/xxx/yyy" desc="一句话简介" />
</SiteSection>
```

> **说明**：`<SiteSection>` 不会重复渲染标题。Markdown 的 `##` 是唯一的章节标题，`subtitle` 仅在标题下方显示一条灰色副文本（如条目数）。

#### 3. 提交 Pull Request

在你的仓库中点击 **Pull requests → New pull request**，目标分支一般为 `dev` 或 `main`。

> ⚠️ **提交 PR 前**，请确保你的 Fork 已是最新版本（点击自己仓库的 `Sync fork` 按钮同步）。

---

## 🧩 `<SiteCard>` 组件用法速查

```vue
<SiteCard
  title="项目标题"        <!-- 必填：卡片主标题 -->
  url="https://..."        <!-- 必填：点击跳转的链接 -->
  desc="一句话简介"        <!-- 可选：单行说明 -->
  icon="/img/xxx.png"      <!-- 可选：本地图标路径（docs/public/img/ 下的文件） -->
  badge="推荐"             <!-- 可选：右上角小徽标 -->
/>
```

### 🖼️ 图标解析优先级

1. `icon` prop（手动指定）→ 例如 `icon="/img/edaee93f024d164ba6c29fe77ba1463b.png"`
2. 远程 favicon（自动从 `url` 提取 host，调用 [`favicon.im`](https://favicon.im/zh) 获取）→ 例如 `https://favicon.im/www.ustb.edu.cn`
3. 首字母 fallback（浅灰渐变方块）

### ➕ 如何新增/替换图标

1. 把图片放到 `docs/public/img/`（项目根目录的 img/ 在 build 时不会被打包，必须是 docs/public/img/）
2. 在对应 `<SiteCard>` 上加 `icon="/img/文件名"`，例如：

```markdown
<SiteCard title="就业服务" url="https://job.ustb.edu.cn/" icon="/img/edaee93f024d164ba6c29fe77ba1463b.png" />
```

> 图标素材源：北京科技大学融合门户 [i.ustb.edu.cn/home/app-list](https://i.ustb.edu.cn/home/app-list)。

---

## 💻 本地开发与预览

```bash
# 1. 克隆代码
git clone https://github.com/LYOfficial/USTB-All-In-One.git
cd USTB-All-In-One

# 2. 安装依赖
npm install

# 3. 启动本地开发服务器（默认 http://localhost:5173）
npm run docs:dev

# 4. 构建生产产物到 docs/.vitepress/dist/
npm run docs:build

# 5. 本地预览构建产物（默认 http://localhost:2000）
npm run start
```

**主题开发**：自定义主题源码全部在 `docs/.vitepress/theme/` 下，包含 3 个 Vue 组件和 1 个 CSS 文件。VitePress 的扩展点参见[官方文档](https://vitepress.dev/guide/custom-theme)。

---

## 🐳 Docker 一键部署

无需在本地安装 Node.js：

```bash
# 1. 启动容器（默认监听宿主 2000 端口）
docker compose up -d

# 2. 自定义宿主机端口
USTB_PORT=8080 docker compose up -d

# 3. 查看状态 / 日志
docker compose ps
docker compose logs -f ustb-site

# 4. 停止
docker compose down
```

或直接 `docker build` + `docker run`：

```bash
docker build -t ustb-all-in-one .
docker run -d --name ustb-all-in-one -p 2000:80 ustb-all-in-one
```

镜像基于 `nginx:1.27-alpine`，构建阶段使用 `node:20-alpine`，最终产物仅约 **40 MB**，包含 healthcheck、资源限制与 CNAME 热更新。详见 [Dockerfile](Dockerfile) 与 [docker-compose.yml](docker-compose.yml)。

---

## 🛠️ 技术栈

- **VitePress 1.6**：静态站点生成、Markdown 渲染、Vue 3 组件支持
- **Vue 3**：自定义卡片组件（`SiteCard` / `SiteGrid` / `SiteSection`）
- **nginx 1.27**：生产环境部署
- **Docker**：多阶段镜像构建

---

## 🏆 贡献者墙

感谢每一位为本项目添砖加瓦的校友！

[![Contrib](https://contrib.rocks/image?repo=LYOfficial/USTB-All-In-One)](https://github.com/LYOfficial/USTB-All-In-One/graphs/contributors)

## 📈 我们的成长

[![Stargazers over time](https://starchart.cc/LYOfficial/USTB-All-In-One.svg?variant=adaptive)](https://starchart.cc/LYOfficial/USTB-All-In-One/stargazers)

> 如果觉得本项目对你有帮助，请不要吝啬右上角的 **⭐ Star**，你的支持是我们持续整理的动力！