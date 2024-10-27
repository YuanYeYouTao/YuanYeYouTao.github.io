<script setup>
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const htmlContent = ref('')
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && Prism.languages[lang]) {
      try {
        return Prism.highlight(str, Prism.languages[lang], lang)
      } catch (__) {}
    }
    return ''
  }
})

onMounted(() => {
  htmlContent.value = md.render(props.content)
  Prism.highlightAll()
})
</script>

<template>
  <div class="markdown-body" v-html="htmlContent"></div>
</template>

<style>
.markdown-body {
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 1.5em;
  margin-bottom: 1em;
  color: var(--text-color);
}

.markdown-body p {
  margin-bottom: 1em;
  line-height: 1.7;
  color: var(--text-color);
}

.markdown-body code {
  background-color: var(--bg-color);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  color: var(--accent-color);
}

.markdown-body pre {
  background-color: var(--bg-color);
  padding: 1em;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.markdown-body img {
  max-width: 100%;
  border-radius: 0.5rem;
}

.markdown-body a {
  color: var(--accent-color);
  text-decoration: none;
}

.markdown-body a:hover {
  text-decoration: underline;
}
</style>
