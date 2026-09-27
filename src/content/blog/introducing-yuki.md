---
title: Yuki：一個會記得你的 QQ 群聊 AI
description: 介紹我的開源專案 Yuki——有持久身份、長期記憶與人際關係的社交 AI Agent。
pubDate: 2026-09-26
tags: [Yuki, AI Agent]
---

大部分聊天機器人都是「一問一答」：你 @ 它，它回你，然後忘記一切。[Yuki](https://github.com/YuanYeYouTao/Yuki) 想做的是另一件事——一個**長期待在群裡**、記得大家、會自己把事情做完的成員。

## Yuki 能做什麼

- **長期聊天與記憶**：在群聊和私聊裡持續對話，能回想起以前發生過的事。
- **看得懂多媒體**：圖片、語音、影片和附件都能理解。
- **QQ 社交操作**：查詢群成員、@ 人、發訊息、撤回訊息。
- **聯網與擴充**：內建搜尋工具，可以接 MCP 服務和外掛。
- **持久工作環境**：可以在隔離容器裡跑 Python、Node.js、Shell，並安裝依賴。
- **背景任務**：定時任務、中斷後續跑，跨訊息、跨對話完成工作。
- **語音與表情包**：說話不只有文字。

## 技術上

Yuki 用 Python 3.12 開發，透過 Docker Compose 部署；工作環境跑在 Linux 容器裡，可以選用 gVisor 沙箱。模型端支援多種協定（Chat Completions、Claude Messages、Gemini 等），不綁定特定供應商。專案採用 MIT 授權。

## 什麼時候該開口？

群聊 AI 最難的其實不是「怎麼回」，而是「要不要回」。一直插話很吵，完全不說話又不像個成員。為此我另外做了 [Yuki Semantic Participation](https://github.com/YuanYeYouTao/Yuki-Semantic-Participation)——一個以稀疏語義觀察驅動的參與控制器，之後會專門寫一篇來聊它的設計。

---

有興趣的話歡迎到 [GitHub](https://github.com/YuanYeYouTao/Yuki) 看看、開 issue 或給顆星。
