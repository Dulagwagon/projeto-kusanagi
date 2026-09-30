// Adicione o ID de um vídeo do YouTube em data-youtube-id no artigo desejado.
document.querySelectorAll('.journal-media[data-youtube-id]').forEach((container) => {
  const id = container.dataset.youtubeId.trim();
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) {
    container.remove();
    return;
  }
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${id}`;
  iframe.title = container.dataset.videoTitle || 'Vídeo do diário de produção';
  iframe.loading = 'lazy';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  container.append(iframe);
});
