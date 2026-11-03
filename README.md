# 李思达的个人主页

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

页面默认中文；点击 English 可切换英文。论文链接指向 arXiv、出版社或项目页面。其他论文默认展开，读者可手动收起。所有论文使用原论文主图或方法图，按原图比例显示。
