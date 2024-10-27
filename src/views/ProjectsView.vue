<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: '个人博客',
    description: '使用 Vue 3 + Vite 构建的个人博客网站',
    imageUrl: '/project-1.jpg',
    githubUrl: 'https://github.com/YuanYeYouTao/blog',
    demoUrl: 'https://yuanyeyoutao.github.io',
    tags: ['Vue', 'JavaScript', 'CSS']
  },
  // 更多项目...
])
</script>

<template>
  <div class="projects">
    <h1>我的项目</h1>
    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <img :src="project.imageUrl" :alt="project.title" class="project-image">
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
          <div class="project-links">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener"
              class="project-link"
            >
              GitHub
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener"
              class="project-link"
            >
              在线演示
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tag {
  padding: 0.4rem 0.8rem;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.project-link {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

.project-link:hover {
  opacity: 0.9;
}
</style>
