# 🚀 USTB-All-In-One

> **北京科技大学（USTB）开源项目及资料导航站**

[![GPL-3.0 License](https://img.shields.io/github/license/LYOfficial/USTB-All-In-One)](LICENSE)
[![Stars](https://img.shields.io/github/stars/LYOfficial/USTB-All-In-One)](https://github.com/LYOfficial/USTB-All-In-One/stargazers)

欢迎来到 **USTB-All-In-One**！这里集中整理了北京科技大学校友们开源的 **GitHub 实用工具**、**校园服务脚本**、**学习资料**、**同好社群**以及**校内外常用站点**。

项目内容主要使用 Markdown 和简单的数据文件维护，不需要掌握复杂的前端知识也可以参与贡献。

🎉 **[点击这里访问导航站](https://one.ustb.world/)** 🎉

---

## 📑 收录内容

| 分区 | 内容 |
| --- | --- |
| 🏫 [学校官方网站](docs/official.md) | 教务、图书馆、学院、实验室、学生事务、IT 与 AI 服务等官方站点 |
| 🛠️ [开源工具](docs/tools.md) | 抢课、校园网、教务、AI 等校友开源项目 |
| 📚 [学习资料](docs/materials.md) | 课程资料、LaTeX 模板、复习宝典、实验报告等 |
| 🏛️ [校内社团](docs/clubs.md) | 按类别整理的社团名称、代号与简介 |
| 👥 [同好社群](docs/communities.md) | 北科兴趣交流 QQ 群与加群入口 |
| 📅 [每周活动](docs/index.md) | 学校近期校园活动信息 |

## 🌟 为什么需要这个项目？

许多北科校友留下了优秀的开源项目和学习资料，但它们散落在 GitHub 与各类平台中，不容易被后来者发现。

**USTB-All-In-One** 希望把这些内容集中整理、分类展示，让更多北科学子能够快速找到需要的工具和资料，也让优秀项目被更多人看见。

## 🤝 参与贡献

发现了好用的工具、课程资料、校园站点或同好社群？欢迎直接提交 Pull Request！

### 修改哪个文件？

| 想添加的内容 | 修改位置 |
| --- | --- |
| 学校官方站点 | `docs/official.md` |
| 开源工具或脚本 | `docs/tools.md` |
| 学习资料 | `docs/materials.md` |
| 校内社团 | `docs/.vitepress/data/clubs.js` |
| 同好社群 | `docs/.vitepress/data/qqGroups.js` |

添加普通站点或项目时，可以在对应章节中复制并修改一行卡片：

```markdown
<SiteCard
  title="项目名称"
  url="https://example.com"
  desc="一句话介绍这个项目"
/>
```

如果需要使用本地图标，请把图片放入 `docs/public/img/`，然后增加 `icon`：

```markdown
<SiteCard
  title="项目名称"
  url="https://example.com"
  desc="一句话介绍这个项目"
  icon="/img/example.png"
/>
```

### 提交步骤

1. [Fork 本仓库](https://github.com/LYOfficial/USTB-All-In-One/fork)。
2. 修改对应的 Markdown 或数据文件。
3. 检查链接、标题和简介是否准确。
4. 提交 Pull Request，并简单说明新增或修改了什么。

提交前建议确认：

- 链接可以正常访问，且来源可信。
- 简介简洁客观，不包含广告或夸张描述。
- 内容放在正确的分区与章节中。
- 图片清晰、体积合理，并且拥有可使用的来源。
- 没有提交构建产物、临时文件或个人隐私信息。

维护者、开发者及服务器部署人员请阅读 [详细维护与部署文档](docs/README.md)。

## 🏆 贡献者

感谢每一位为项目添砖加瓦的校友！

[![Contrib](https://contrib.rocks/image?repo=LYOfficial/USTB-All-In-One)](https://github.com/LYOfficial/USTB-All-In-One/graphs/contributors)

## 📄 开源许可

本项目使用 [GPL-3.0 License](LICENSE) 开源。

> 如果这个项目对你有帮助，欢迎点亮右上角的 **⭐ Star**。你的支持是我们持续整理的动力！
