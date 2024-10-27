<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { useDarkMode } from './composables/useDarkMode'
import { onMounted } from 'vue'

const { initTheme } = useDarkMode()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
:root {
  --primary-color: #2c3e50;
  --text-color: #333;
  --bg-color: #ffffff;
  --accent-color: #42b883;
  --card-bg: #ffffff;
  --border-color: #eaeaea;
}

:root.dark {
  --primary-color: #42b883;
  --text-color: #e0e0e0;
  --bg-color: #1a1a1a;
  --accent-color: #42b883;
  --card-bg: #2a2a2a;
  --border-color: #333;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  transition: background-color 0.3s, color 0.3s;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
