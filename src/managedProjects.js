// Adaptador de contenidos de Pages CMS para KRASKIA.
// Vite incorpora los JSON del repositorio al construir el sitio: no requiere servidores ni claves.
const records = import.meta.glob('../content/projects/*.json', { eager: true, import: 'default' });

const categoryValues = new Set(['Imagen', 'Video', 'Identidad']);
const youtubeVideoId = (value) => {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    let id = null;
    if (host === 'youtu.be' || host === 'www.youtu.be') id = url.pathname.slice(1).split('/')[0];
    else if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(host)) {
      id = url.pathname === '/watch' ? url.searchParams.get('v') : url.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1];
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id || '') ? id : null;
  } catch {
    return null;
  }
};

const managedProjects = Object.entries(records)
  .filter(([,project]) => project && project.status === 'published' && project.authorized === true && categoryValues.has(project.category))
  .map(([path, project]) => {
    const videoId = youtubeVideoId(project.youtube_url);
    return {
      id: 'cms-' + path.split('/').pop().replace(/\.json$/, ''),
      category: project.category,
      title: String(project.title || '').trim(),
      type: (project.category === 'Video' ? 'Video publicitario' : 'Proyecto creativo') + ' · proyecto real',
      visual: project.category === 'Video' ? 'film' : project.category === 'Identidad' ? 'identity' : 'product',
      cover: typeof project.cover === 'string' && project.cover.startsWith('/images/projects/') ? project.cover : null,
      description: project.description || '',
      subtitle: project.subtitle || '',
      format: project.format === 'vertical' ? 'vertical' : 'horizontal',
      videoId,
      order: Number.isFinite(Number(project.order)) ? Number(project.order) : 999,
      managed: true,
    };
  })
  .filter(p => p.title && (p.category !== 'Video' || p.videoId))
  .sort((a,b) => a.order-b.order || a.title.localeCompare(b.title, 'es'));

export { managedProjects };
