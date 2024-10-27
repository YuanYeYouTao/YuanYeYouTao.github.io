<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ new Date().getFullYear() }} 我的博客. All rights reserved.</p>
      <div class="social-links">
        <a href="https://github.com/YuanYeYouTao" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
