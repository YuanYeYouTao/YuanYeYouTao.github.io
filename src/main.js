import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const app = createApp(App)
app.use(router) // 确保这行代码在 mount 之前
app.mount('#app')
