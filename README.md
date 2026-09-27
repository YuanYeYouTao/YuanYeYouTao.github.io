# YuanYeYouTao.github.io

我的個人部落格：<https://yuanyeyoutao.github.io>

使用 [Astro](https://astro.build) 建置，推送到 `main` 後由 GitHub Actions 自動部署到 GitHub Pages。

## 本地開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
```

## 寫文章

在 `src/content/blog/` 新增 Markdown 檔：

```md
---
title: 文章標題
description: 一句話摘要
pubDate: 2026-10-01
tags: [標籤]
draft: false
---
```

## 修改專案列表

編輯 `src/data/projects.ts`。
