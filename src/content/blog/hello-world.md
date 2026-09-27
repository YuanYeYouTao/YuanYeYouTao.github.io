---
title: 你好，世界：部落格重新開張
description: 舊站壞掉了，乾脆全部砍掉重練。這裡會記錄我做 AI Agent、寫工具和讀書的過程。
pubDate: 2026-09-27
tags: [雜記]
---

舊的部落格是一個一直沒修好的模板，這次決定整個砍掉，用 [Astro](https://astro.build) 重新蓋一個乾淨的版本。

## 這裡會寫什麼

- **AI Agent**：主要是 [Yuki](https://github.com/YuanYeYouTao/Yuki) 的開發筆記——長期記憶怎麼存、Agent 什麼時候該開口、怎麼讓它在群聊裡像個真的成員。
- **開發者工具**：MCP 伺服器、終端介面、各種讓自己少打幾行指令的小東西。
- **學習筆記**：數學（最近在讀公理集合論）與電腦科學課程的心得。

## 這個網站是怎麼做的

- 用 Astro 產生靜態頁面，文章就是 `src/content/blog/` 底下的 Markdown 檔。
- 推到 GitHub 之後，GitHub Actions 會自動建置並部署到 GitHub Pages。
- 支援深色模式、RSS 與 sitemap。

想寫新文章，只要新增一個 `.md` 檔：

```md
---
title: 文章標題
description: 一句話摘要
pubDate: 2026-10-01
tags: [標籤]
---

正文從這裡開始。
```

然後 `git push`，一兩分鐘後就上線了。
