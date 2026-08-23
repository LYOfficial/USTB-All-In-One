# USTB-All-In-One 详细维护与部署文档

本文档面向项目维护者、前端开发者和服务器管理员，记录站点结构、数据维护、本地开发、活动同步、Docker 部署、备份升级与常见问题。

普通内容贡献者只需阅读[仓库首页的 README](https://github.com/LYOfficial/USTB-All-In-One#readme)。

## 1. 项目概览

USTB-All-In-One 是一个基于 VitePress 和 Vue 3 的导航站。主体内容在构建时生成静态 HTML，由 Nginx 提供访问。

站点包含首页和五个分区页：

| 页面 | 访问路径 | 源文件 | 主要内容 |
| --- | --- | --- | --- |
| 首页 | `/` | `docs/index.md` | Hero、每周校园活动 |
| 学校官方网站 | `/official` | `docs/official.md` | 学校官方服务与院系站点 |
| 开源工具 | `/tools` | `docs/tools.md` | 校友开源工具与脚本 |
| 学习资料 | `/materials` | `docs/materials.md` | 课程资料、模板与复习内容 |
| 校内社团 | `/clubs` | `docs/clubs.md` | A–H 类社团信息 |
| 同好社群 | `/communities` | `docs/communities.md` | QQ 群及加群入口 |

## 2. 仓库结构

```text
USTB-All-In-One/
├── docs/                              # VitePress 站点根目录
│   ├── README.md                      # 本详细文档
│   ├── index.md                       # 首页
│   ├── official.md                    # 学校官方网站
│   ├── tools.md                       # 开源工具
│   ├── materials.md                   # 学习资料
│   ├── clubs.md                       # 校内社团页面骨架
│   ├── communities.md                 # 同好社群页面骨架
│   ├── public/
│   │   ├── icon/                      # 站点 Logo、浏览器图标与默认图标
│   │   ├── img/                       # SiteCard 使用的本地图标
│   │   └── activity/                  # 校园活动缓存图片
│   └── .vitepress/
│       ├── config.mjs                 # 站点导航、侧边栏、页脚等配置
│       ├── data/
│       │   ├── activities.js          # 每周校园活动数据
│       │   ├── clubs.js               # 校内社团数据
│       │   └── qqGroups.js            # QQ 群数据
│       └── theme/
│           ├── index.js               # 自定义主题入口与全局组件注册
│           ├── Layout.vue             # 全局布局与侧栏
│           ├── style.css               # 全局卡片、首页和响应式样式
│           └── components/
│               ├── SiteCard.vue       # 通用站点卡片
│               ├── SiteGrid.vue       # 响应式卡片网格
│               ├── SiteSection.vue    # 分区容器
│               ├── ClubCard.vue       # 社团卡片
│               ├── QqGroupCard.vue    # QQ 群卡片
│               └── WeeklyActivities.vue # 每周校园活动
├── scripts/
│   └── scrape-activities.mjs          # 校园活动抓取与图片缓存脚本
├── docker/
│   └── nginx.conf                     # 静态资源、API 反代与缓存配置
├── Dockerfile                         # VitePress 构建与 Nginx 运行镜像
├── docker-compose.yml                 # 端口、资源限制与持久化卷
├── package.json                       # npm 命令与依赖
└── README.md                          # 面向普通贡献者的项目说明
```

构建生成的 `docs/.vitepress/dist/` 和开发缓存 `docs/.vitepress/cache/` 已被忽略，不应提交。

## 3. 内容维护

### 3.1 普通站点与项目卡片

官方站点、开源工具和学习资料主要通过 `<SiteCard>` 维护：

```vue
<SiteCard
  title="项目标题"
  url="https://example.com"
  desc="一句话简介"
  icon="/img/example.png"
  badge="推荐"
/>
```

参数说明：

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 卡片标题 |
| `url` | 是 | 点击后访问的链接 |
| `desc` | 否 | 简短描述，建议一至两行 |
| `icon` | 否 | `docs/public/` 下的绝对站内路径 |
| `badge` | 否 | 卡片右上角的小徽标 |

图标加载顺序：

1. `icon` 指定的本地图片。
2. GitHub 链接使用仓库所有者（用户或组织）的 GitHub 头像。
3. 其他网址根据目标域名请求远程 favicon。
4. 使用 `docs/public/icon/ustb.png` 兜底。

新增本地图标时，应放在 `docs/public/img/`，引用形式为 `/img/文件名`。不要把图片放到仓库根目录的临时文件夹中。

GitHub 项目若已有自己的项目图标，可继续通过 `icon` 显式指定；显式图标始终优先于所有者头像。

最后提交时间已达到四年的项目使用 `badge="OUTDATED"` 标记，并放入当前 `SiteSection` 的 `outdated` 插槽。页面默认折叠这些卡片：

```vue
<template #outdated>
  <SiteCard
    title="旧项目"
    url="https://github.com/example/old-project"
    desc="项目简介"
    badge="OUTDATED"
  />
</template>
```

### 3.2 新增章节

分区页面的章节标题由 Markdown 的二级标题提供，`SiteSection` 只负责副标题和卡片布局：

```markdown
## 🌟 新章节标题 {#stable-anchor}

<SiteSection subtitle="共 N 个">
<SiteCard title="项目名" url="https://example.com" desc="一句话简介" />
</SiteSection>
```

新增章节后，还需要在 `docs/.vitepress/config.mjs` 对应的 sidebar 配置中添加相同锚点。锚点应使用稳定的英文或拼音名称，避免以后修改标题导致旧链接失效。

### 3.3 校内社团

社团数据位于 `docs/.vitepress/data/clubs.js`，按 A–H 分类维护。页面不保存社团图片，只展示名称、代号和简介。

修改后重点检查：

- 社团所属分类是否正确。
- 代号是否重复。
- 简介是否客观、简洁。
- JavaScript 数组逗号与引号是否完整。

### 3.4 同好社群

QQ群数据位于 `docs/.vitepress/data/qqGroups.js`。新增群组时应提供准确的群号、名称和官方加群链接，避免提交个人联系方式或无法确认来源的邀请地址。

### 3.5 校园活动

活动数据位于 `docs/.vitepress/data/activities.js`，图片缓存位于 `docs/public/activity/`。抓取脚本为：

```bash
node scripts/scrape-activities.mjs
```

仓库不再包含远程托管平台的自动任务。需要自动更新活动时，请在自己的服务器上使用 cron、systemd timer 或其他调度系统执行该脚本，然后重新构建并部署站点。

一个典型的人工更新流程如下：

```bash
node scripts/scrape-activities.mjs
npm run docs:build
git diff -- docs/.vitepress/data/activities.js docs/public/activity
```

确认抓取结果合理后再提交数据。不要在未检查内容、日期和图片的情况下自动提交到仓库。

## 4. 自定义主题

主题入口位于 `docs/.vitepress/theme/index.js`，主要组件如下：

| 组件 | 职责 |
| --- | --- |
| `Layout.vue` | 包装 VitePress 默认布局与移动端侧栏 |
| `SiteCard.vue` | 通用链接卡片与图标 fallback |
| `SiteGrid.vue` | 3 / 2 / 1 列响应式布局 |
| `SiteSection.vue` | 分区副标题与卡片容器 |
| `ClubCard.vue` | 纯文本社团卡片 |
| `QqGroupCard.vue` | QQ 群头像、群号与加群入口 |
| `WeeklyActivities.vue` | 首页活动列表 |
| `GuideLayout.vue` | 新人引领的阅读目录 |

全局样式位于 `docs/.vitepress/theme/style.css`。修改时至少检查桌面端、平板宽度和手机端三种布局，以及浅色、深色两种主题。

## 5. 本地开发与检查

### 5.1 环境要求

- Node.js 20 或更高版本。
- npm。
- 完整容器测试需要 Docker 与 Docker Compose。

### 5.2 安装与开发

```bash
git clone https://github.com/LYOfficial/USTB-All-In-One.git
cd USTB-All-In-One
npm ci
npm run docs:dev
```

VitePress 开发服务器默认地址为 `http://localhost:5173`。

### 5.3 构建与预览

```bash
npm run docs:build
npm run start
```

- 构建产物：`docs/.vitepress/dist/`
- 本地预览默认地址：`http://localhost:2000`

提交代码前至少运行：

```bash
npm run docs:build
git diff --check
```

### 5.4 内容检查清单

- 所有新增链接均可访问。
- Markdown 标题层级正确。
- 新章节已经同步更新 sidebar。
- 卡片在浅色和深色模式下均可阅读。
- 手机端没有横向滚动或按钮溢出。
- 没有提交 `dist`、缓存或日志文件。

## 6. Docker 部署

### 6.1 Compose 部署

```bash
docker compose up -d --build
```

默认将服务器的 `2000` 端口映射到容器的 `80` 端口。可通过环境变量修改：

```bash
USTB_PORT=8080 docker compose up -d --build
```

常用命令：

```bash
docker compose ps
docker compose logs -f ustb-site
docker compose restart ustb-site
docker compose down
```

### 6.2 直接运行镜像

```bash
docker build -t ustb-all-in-one .
docker run -d \
  --name ustb-all-in-one \
  --restart unless-stopped \
  -p 2000:80 \
  ustb-all-in-one
```

### 6.3 反向代理建议

生产环境建议让主机上的 Nginx、Caddy 或其他网关负责 HTTPS，然后转发到 `127.0.0.1:2000`。

代理层需要允许：

- 静态页面和 `/assets/` 资源访问。
- WebSocket 不是生产站点的必要条件。

## 7. 更新站点

```bash
git pull
docker compose up -d --build
docker compose ps
```

更新完成后应访问任意页面，确认页面正常打开。

## 8. Nginx 与容器说明

镜像采用多阶段构建：

1. `node:20-alpine` 安装依赖并构建 VitePress。
2. `nginx:1.27-alpine` 提供静态页面。

`docker/nginx.conf` 负责：

- VitePress clean URL 与回退处理。
- `/assets/` 指纹资源的长期缓存。
- HTML 与普通路径访问。
- gzip 压缩。

## 9. 技术栈

- VitePress 1.6：静态站点生成与 Markdown 渲染。
- Vue 3：自定义主题和交互组件。
- Node.js：构建与活动抓取。
- Nginx 1.27：生产静态资源服务与 API 反向代理。
- Docker / Docker Compose：构建、运行和持久化卷管理。

## 10. 常见问题

### 新页面能打开但侧栏没有章节

在 `docs/.vitepress/config.mjs` 中为对应页面增加 sidebar 项，并确保链接锚点与 Markdown 标题后的 `{#anchor}` 完全一致。

### 新图片在开发环境正常、构建后丢失

图片必须放在 `docs/public/` 下，并使用以 `/` 开头的站内路径引用，例如 `/img/example.png`。

### 活动数据没有自动更新

仓库本身不包含自动调度任务。请在自己的服务器上配置 cron、systemd timer 或其他定时任务运行 `node scripts/scrape-activities.mjs`，随后重新构建和部署站点。
