import fm from 'front-matter'

const sessionFiles = import.meta.glob('../data/courses/*/sessions/*.md', {
  query: '?raw',
  import: 'default',
})

export async function loadSessions(courseId) {
  const results = []
  for (const [path, loader] of Object.entries(sessionFiles)) {
    if (!path.includes(`/${courseId}/`)) continue
    const raw = await loader()
    const { attributes: frontmatter, body: content } = fm(raw)
    const filename = path.split('/').pop().replace('.md', '')
    results.push({ ...frontmatter, content, path, id: filename })
  }
  return results.sort((a, b) => a.path.localeCompare(b.path))
}
