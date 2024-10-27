<script setup>
import { ref } from 'vue'

const latestPosts = ref([
  {
    id: 1,
    title: '我的第一篇博客',
    description: '这是我的第一篇博客文章，介绍一下这个博客的搭建过程...',
    date: '2024-03-20'
  },
  // 更多文章...
])
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>欢迎来到我的博客</h1>
      <p>这里记录我的技术学习、项目经验和生活感悟</p>
    </section>

    <section class="latest-posts">
      <h2>最新文章</h2>
      <div class="posts-grid">
        <router-link
          v-for="post in latestPosts"
          :key="post.id"
          :to="`/blog/${post.id}`"
          class="post-card"
        >
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <span class="post-date">{{ post.date }}</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color));
  color: white;
  border-radius: 1rem;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.latest-posts {
  margin-top: 2rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.post-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--card-bg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.2s;
}

.post-card:hover {
  transform: translateY(-4px);
}

.post-date {
  color: #666;
  font-size: 0.9rem;
}
</style>
