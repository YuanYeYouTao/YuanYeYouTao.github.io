<script setup>
import { ref, computed } from 'vue'

const posts = ref([
  {
    id: 1,
    title: '我的第一篇博客',
    description: '这是我的第一篇博客文章，介绍一下这个博客的搭建过程...',
    date: '2024-03-20',
    tags: ['Vue', '博客']
  },
  // 更多文章...
])

const searchQuery = ref('')
const selectedTag = ref('')

const tags = ref(['Vue', 'JavaScript', 'CSS', '博客', '项目'])

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesTag = !selectedTag.value || post.tags.includes(selectedTag.value)
    return matchesSearch && matchesTag
  })
})
</script>

<template>
  <div class="blog">
    <div class="blog-header">
      <h1>博客文章</h1>
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索文章..."
          class="search-input"
        >
      </div>
      <div class="tags-filter">
        <span
          v-for="tag in tags"
          :key="tag"
          :class="['tag', { active: selectedTag === tag }]"
          @click="selectedTag = selectedTag === tag ? '' : tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="posts-list">
      <article
        v-for="post in filteredPosts"
        :key="post.id"
        class="post-item"
      >
        <router-link :to="`/blog/${post.id}`" class="post-link">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
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
        </router-link>
      </article>
    </div>
  </div>
</template>

<style scoped>
.blog-header {
  margin-bottom: 2rem;
}

.search-bar {
  margin: 1rem 0;
}

.search-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: var(--card-bg);
  color: var(--text-color);
}

.tags-filter {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.tag {
  padding: 0.4rem 0.8rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.tag.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.post-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--card-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-link {
  text-decoration: none;
  color: inherit;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}
</style>
