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
  script.setAttribute('data-repo', 'YuanYeYouTao/blog-comments')
  script.setAttribute('data-repo-id', '你的仓库ID')
  script.setAttribute('data-category', 'Comments')
  script.setAttribute('data-category-id', '你的分类ID')
  script.setAttribute('data-mapping', 'title')
  script.setAttribute('data-term', props.title)
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
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
  <div id="comments" class="comments-container"></div>
</template>

<style scoped>
.comments-container {
  margin-top: 2rem;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
