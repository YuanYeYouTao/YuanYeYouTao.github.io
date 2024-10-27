import { ref } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  const toggleDark = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    updateTheme()
  }

  return {
    isDark,
    toggleDark,
    initTheme
  }
}
