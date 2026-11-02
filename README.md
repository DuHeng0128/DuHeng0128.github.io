# 李思达的个人主页

独立的个人学术网站，使用 GitHub 仓库保存源文件，由 GitHub Pages 托管；不是 GitHub 个人资料页或 README。无需安装依赖或构建。直接打开 `index.html` 即可预览。

## 发布

1. 在 `DuHeng0128` 账号下创建公开仓库 `DuHeng0128.github.io`。
2. 将本目录内的文件放在仓库的 `main` 分支根目录，保持 `assets` 文件夹结构。
3. 在仓库的 **Settings → Pages** 中，将 Source 设为 **Deploy from a branch**，选择 **main** 和 **/(root)**，点击 Save。
4. 发布完成后访问 https://duheng0128.github.io/ 。

后续修改提交到 `main` 即会更新网站。`.nojekyll` 用于按普通静态文件发布。

GitHub 官方说明：https://docs.github.com/en/pages/quickstart

## 维护

- `index.html`：个人介绍、教育经历、荣誉与对应英文译文，也包含可直接阅读的中文论文内容。
- `script.js`：论文数据、英文切换和 BibTeX 引用交互；修改论文后应同步更新 HTML 中的中文论文内容。
- `style.css`：排版与手机、打印样式。
- `assets/sida-li.jpg`：个人照片。
- `assets/ornament.webp`：Owen Jones 馆藏图版，用于页眉与浅色页边。
- `assets/*.webp`：从对应论文项目资料取得的预览图；出处见 [图片来源](assets/SOURCES.md)。

页面默认中文；点击 English 可切换英文。论文链接指向 arXiv、出版社或项目页面。其他论文默认展开，读者可手动收起。所有论文使用原论文主图或方法图，按原图比例显示；学生工作按时间倒序放在联系之前。

排版参考 [Jon Barron 的学术主页](https://github.com/jonbarron/jonbarron.github.io)，并针对中文和手机阅读调整。案例调研包括 [awesome-github-profiles](https://github.com/EddieHubCommunity/awesome-github-profiles)，采用独立网页结构与页内导航。

背景使用大都会艺术博物馆标注为公有领域的 Owen Jones《装饰的法则》（1868）图版，配色取自原图的蓝、赭与纸色。图片没有经过生成式修改。正文保持安静的阅读区域；页面没有自动播放或滚动动画。
