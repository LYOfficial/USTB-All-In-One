# 🚀 USTB-All-In-One

> **北京科技大学（USTB）开源项目及资料导航站**

[![MIT License](https://img.shields.io/github/license/LYOfficial/USTB-All-In-One)](LICENSE)
[![Stars](https://img.shields.io/github/stars/LYOfficial/USTB-All-In-One)](https://github.com/LYOfficial/USTB-All-In-One/stargazers)


欢迎来到 **USTB-All-In-One**！这里收集并整理了大量由北京科技大学优秀的学长学姐们开源的 GitHub 实用工具、校园服务自动脚本、以及各专业的学习资料。

本项目现已全面升级为现代化的**导航站**，让你能够以最快的速度、更直观的方式找到你需要的内容！

🎉 **[点击这里访问全新导航站](https://one.ustb.world/)** 🎉

---

## 🌟 为什么需要这个项目？

你科建校以来人才辈出，许多善于探索与编程的校友们留下了大量的虚拟宝藏。为了防止这些宝藏在浩瀚的互联网中沉寂，我们创建了这个项目，将其集中归类，方便所有的北科学子们**采撷使用**、**前人栽树后人乘凉**！

## 🛠️ 项目技术栈

本项目近期进行了重要重构，从之前的单文件静态页面，升级为了基于 [Node.js](https://nodejs.org/) 与 [VitePress](https://vitepress.dev/) 驱动的现代化文档导航站：
- **VitePress**: 提供极速响应的页面路由和优雅的左侧分类边栏结构。
- **Markdown**: 数据内容纯文本化维护，让任何人都能零门槛参与贡献！

---

## 🤝 参与贡献 (We Need You!)

你发现了更好用的工具？你自己写了超酷的抢课/签到脚本？又或者你整理了一份期末复习宝典？
**千万不要藏着掖着，快把它加入到这个仓库里吧！**

我们非常极其以及特别欢迎各位校友提交 Pull Request (PR)。无需复杂的本地环境，只需要几步即可完成贡献：

### 贡献指南

1. **右上角 Fork 本仓库**：[点击这里 Fork](https://github.com/LYOfficial/USTB-All-In-One/fork)。
2. **修改数据源文件**：
   - 官方网址补充：编辑 `docs/official.md`
   - 开源工具补充：编辑 `docs/tools.md`
   - 学习资料补充：编辑 `docs/materials.md`
3. **提交 Pull Request (PR)**：
   - 在你的仓库中点击 `Pull requests` -> `New pull request`。
   - 目标分支一般为 `dev` 或 `main`，简要描述你添加的项目。
   - 等待维护者审核合并，你就会成为本项目的贡献者！

> **⚠️ 注意**：提交 PR 前，请确保你 Fork 的仓库已是最新版本（点击自己仓库的 `Sync fork` 按钮即可同步）。

### 本地开发与预览

如果你希望在本地预览或对主题进行深度修改：
```bash
# 1. 克隆代码到本地
git clone https://github.com/LYOfficial/USTB-All-In-One.git
cd USTB-All-In-One

# 2. 安装依赖
npm install

# 3. 启动本地开发服务器
npm run docs:dev

# 4. 构建生产环境
npm run docs:build
```

### 🐳 Docker 一键部署

项目已经过容器化封装，无需在本地安装 Node.js 即可一键部署：

```bash
# 1. 拉取镜像并启动容器（默认监听 2000 端口）
docker compose up -d

# 2. 自定义宿主机端口（可选）
USTB_PORT=8080 docker compose up -d

# 3. 查看运行状态
docker compose ps

# 4. 查看日志
docker compose logs -f ustb-site

# 5. 停止并移除容器
docker compose down
```

也可以直接使用 `docker build` + `docker run`，跳过 `docker compose`：
```bash
# 构建镜像
docker build -t ustb-all-in-one .

# 运行容器（将容器 80 端口映射到宿主机的 2000 端口）
docker run -d --name ustb-all-in-one -p 2000:80 ustb-all-in-one

# 浏览器访问 http://localhost:2000
```

镜像基于 `nginx:1.27-alpine`，构建阶段使用 `node:20-alpine`，最终产物大小仅约 **40 MB**，支持 healthcheck、资源限制与 CNAME 热更新。详细配置见 [Dockerfile](Dockerfile) 与 [docker-compose.yml](docker-compose.yml)。

---

## 🏆 贡献者墙

感谢每一位为本项目搬运砖块、添砖加瓦的校友！

[![Contrib](https://contrib.rocks/image?repo=LYOfficial/USTB-All-In-One)](https://github.com/LYOfficial/USTB-All-In-One/graphs/contributors)

## 📈 我们的成长

[![Stargazers over time](https://starchart.cc/LYOfficial/USTB-All-In-One.svg?variant=adaptive)](https://starchart.cc/LYOfficial/USTB-All-In-One/stargazers)

> **如果您觉得本项目对你有帮助，请不要吝啬右上角的 “⭐ Star”，你的支持是我们持续整理的动力！**
