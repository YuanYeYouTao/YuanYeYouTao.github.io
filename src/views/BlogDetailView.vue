<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownRenderer from '../components/MarkdownRenderer.vue'
import Comments from '../components/Comments.vue'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

const fetchPost = async (id) => {
  // 实际项目中，这里应该是从后端 API 获取数据
  post.value = {
    id: parseInt(id),
    title: '我的第一篇博客',
    content: `# 我的第一篇博客

这是我的第一篇博客文章，介绍一下这个博客的搭建过程...

## 技术栈

- Vue 3
- Vite
- Vue Router
- Markdown-it

## 代码示例

\`\`\`javascript
const app = createApp(App)
app.use(router)
app.mount('#app')
\`\`\`

## 未来计划

1. 添加评论功能
2. 支持暗色主题
3. 优化性能
`,
    date: '2024-03-20',
    tags: ['Vue', '博客']
  }
  loading.value = false
}

onMounted(() => {
  fetchPost(route.params.id)
})
</script>

<template>
  <div class="blog-detail">
    <div v-if="loading" class="loading">
      加载中...
    </div>
    <template v-else>
      <div class="post-header">
        <h1>{{ post.title }}</h1>
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <div class="post-tags">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
      <MarkdownRenderer :content="post.content" />
      <Comments :title="post.title" />
    </template>
  </div>
</template>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.post-header {
  margin-bottom: 2rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
  color: #666;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.4rem 0.8rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  font-size: 0.9rem;
}
</style>
