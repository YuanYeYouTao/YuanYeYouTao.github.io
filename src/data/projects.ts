export interface Project {
  name: string;
  repo: string;
  description: string;
  language?: string;
  tags: string[];
  featured?: boolean;
  role?: string;
}

const gh = (r: string) => `https://github.com/YuanYeYouTao/${r}`;

export const projects: Project[] = [
  {
    name: 'Yuki',
    repo: gh('Yuki'),
    description:
      '開源、自託管的 QQ 群聊社交 AI Agent。擁有持久的身份、長期記憶與人際關係，能看圖、聽語音、跑背景任務，還有可選的持久工作環境。',
    language: 'Python',
    tags: ['AI Agent', '長期記憶', 'QQ Bot', 'NoneBot2'],
    featured: true,
    role: '作者',
  },
  {
    name: 'SeekTTY',
    repo: gh('seektty'),
    description:
      '為 DeepSeek Harness 打造的可插拔終端工作區，支援 Agent、Session、工具與 MCP，跨 Windows / macOS / Linux。',
    language: 'TypeScript',
    tags: ['TUI', 'MCP', 'DeepSeek'],
    featured: true,
    role: '核心開發者',
  },
  {
    name: 'Yuki Semantic Participation',
    repo: gh('Yuki-Semantic-Participation'),
    description: '為 Yuki 設計的稀疏語義觀察驅動參與控制器（V6 實作）：決定 AI 什麼時候該開口。',
    language: 'Python',
    tags: ['AI Agent', '對話控制'],
    featured: true,
    role: '作者',
  },
  {
    name: 'netease-music-mcp',
    repo: gh('netease-music-mcp'),
    description: '網易雲音樂的 MCP 伺服器，讓 AI 助手可以搜尋與操作音樂。',
    language: 'Python',
    tags: ['MCP', '音樂'],
    role: '作者',
  },
  {
    name: 'hello-2004',
    repo: gh('hello-2004'),
    description: '用 2004 年的 commit 日期，在 GitHub 貢獻圖上畫出圖案的小實驗。',
    language: 'Python',
    tags: ['趣味', 'Git'],
    role: '作者',
  },
  {
    name: 'Axiomatic Set Theory',
    repo: gh('Axiomatic-Set-Theory'),
    description: '福州大學 2026 春季「公理集合論」課程筆記。',
    tags: ['數學', '筆記'],
    role: '作者',
  },
  {
    name: 'NetworkHomework2024Fall',
    repo: gh('NetworkHomework2024Fall'),
    description: '福州大學電腦網路課程 2024 秋季作業。',
    language: 'Vue',
    tags: ['課程作業', '網路'],
    role: '作者',
  },
  {
    name: 'koishi-plugin-chatluna-livingmemory',
    repo: gh('koishi-plugin-chatluna-livingmemory'),
    description: '讓 AI 以第一人稱的敘事記憶，記錄下與你共度的時光。',
    tags: ['Koishi', '記憶'],
    role: '參與貢獻',
  },
];
