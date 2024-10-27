export function updateMetaTags(options) {
  const { title, description, image, url } = options

  document.title = title
  
  const metaTags = {
    description: description,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image
  }

  Object.entries(metaTags).forEach(([name, content]) => {
    if (content) {
      const tag = document.querySelector(`meta[property="${name}"]`) || 
                 document.querySelector(`meta[name="${name}"]`)
      
      if (tag) {
        tag.setAttribute('content', content)
      } else {
        const meta = document.createElement('meta')
        meta.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }
  })
}
