<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'Frontend', items: ['Vue.js', 'React', 'JavaScript', 'HTML/CSS'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'Java'] },
  { name: 'Tools', items: ['Git', 'VS Code', 'Docker'] }
])

const contacts = ref([
  { platform: 'GitHub', url: 'https://github.com/YuanYeYouTao' },
  { platform: 'Email', url: 'mailto:your.email@example.com' }
])
</script>

<template>
  <div class="about">
    <section class="about-me">
      <h1>关于我</h1>
      <div class="avatar-container">
        <img src="../assets/avatar.jpg" alt="头像" class="avatar">
      </div>
      <p class="bio">
        你好！我是一名热爱技术的开发者。这个博客是我用来分享技术经验和生活感悟的地方。
      </p>
    </section>

    <section class="skills">
      <h2>技能栈</h2>
      <div class="skills-grid">
        <div
          v-for="category in skills"
          :key="category.name"
          class="skill-category"
        >
          <h3>{{ category.name }}</h3>
          <ul>
            <li v-for="item in category.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="contact">
      <h2>联系方式</h2>
      <div class="contact-links">
        <a
          v-for="contact in contacts"
          :key="contact.platform"
          :href="contact.url"
          target="_blank"
          rel="noopener"
          class="contact-link"
        >
          {{ contact.platform }}
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.about-me {
  text-align: center;
  margin-bottom: 3rem;
}

.avatar-container {
  margin: 2rem 0;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bio {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  margin: 0.5rem 0;
  color: var(--text-color);
}

.contact {
  margin-top: 3rem;
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.contact-link {
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: opacity 0.2s;
}

.contact-link:hover {
  opacity: 0.9;
}
</style>
