import { createRouter, createWebHashHistory } from 'vue-router'
import { updateMetaTags } from '../utils/seo'

const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: '首页 - 我的博客',
        description: '分享技术经验和生活感悟的个人博客'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: '博客文章 - 我的博客',
        description: '全部博客文章列表'
      }
    },
    {
      path: '/blog/:id',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: '项目展示 - 我的博客',
        description: '我的开源项目展示'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: '关于我 - 我的博客',
        description: '个人介绍和联系方式'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  updateMetaTags({
    title: to.meta.title || '我的博客',
    description: to.meta.description || '分享技术经验和生活感悟的个人博客',
    url: `https://yuanyeyoutao.github.io${to.path}`
  })
  next()
})

export default router
