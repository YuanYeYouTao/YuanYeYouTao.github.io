<script setup>
import { onMounted, watch } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const { isDark } = useDarkMode()

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const loadComments = () => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'YuanYeYouTao/YuanYeYouTao.github.io')
  script.setAttribute('data-repo-id', '你的仓库ID')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', '你的分类ID')
  script.setAttribute('data-mapping', 'title')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', isDark.value ? 'transparent_dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  const comments = document.getElementById('comments')
  comments.innerHTML = ''
  comments.appendChild(script)
}

onMounted(() => {
  loadComments()
})

watch(isDark, () => {
  loadComments()
})
</script>

<template>
  <div class="comments-section">
    <h2 class="comments-title">评论</h2>
    <div id="comments" class="comments-container">
      <div class="comments-loading">
        <span>加载评论中...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.comments-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
}

.comments-container {
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.comments-container:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.comments-loading {
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
  opacity: 0.7;
}

/* 自定义 giscus 样式 */
:deep(.giscus) {
  padding: 1rem 0;
}

:deep(.giscus-frame) {
  border: none !important;
  background-color: transparent !important;
}

/* 暗色模式适配 */
:root.dark .comments-container {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3),
              0 0 2px rgba(255, 255, 255, 0.05);
}

:root.dark .comments-container:hover {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35),
              0 0 2px rgba(255, 255, 255, 0.08);
}

:root.dark .comments-title {
  color: var(--text-color);
  border-bottom-color: var(--accent-color);
  opacity: 0.9;
}

:root.dark .comments-loading {
  color: var(--text-color);
  opacity: 0.6;
}

/* 自定义 giscus 暗色模式样式 */
:deep(.giscus-frame) {
  background-color: transparent !important;
  border: none !important;
}

:root.dark :deep(.giscus-frame) {
  filter: brightness(0.9) contrast(1.1);
}

@media (max-width: 768px) {
  .comments-container {
    padding: 1rem;
    border-radius: 0.75rem;
  }
  
  .comments-title {
    font-size: 1.25rem;
  }
}
</style>
