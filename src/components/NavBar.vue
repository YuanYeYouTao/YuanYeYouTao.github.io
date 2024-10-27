<script setup>
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()

const navItems = ref([
  { name: '首页', path: '/' },
  { name: '博客', path: '/blog' },
  { name: '项目', path: '/projects' },
  { name: '关于', path: '/about' }
])
</script>

<template>
  <nav class="navbar">
    <div class="nav-content">
      <router-link to="/" class="nav-brand">
        <h1>我的博客</h1>
      </router-link>
      <div class="nav-links">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
        >
          {{ item.name }}
        </router-link>
        <button @click="toggleDark" class="theme-toggle">
          {{ isDark ? '🌞' : '🌙' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--card-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--accent-color);
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.theme-toggle:hover {
  background-color: var(--border-color);
}
</style>
