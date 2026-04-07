/* BrainWave — In-page YouTube video modal player */

document.addEventListener('DOMContentLoaded', function () {
  // Inject modal HTML
  var modal = document.createElement('div');
  modal.id = 'bw-video-modal';
  modal.className = 'bw-video-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = [
    '<div class="bw-video-modal-box" id="bw-modal-box">',
    '  <button class="bw-video-modal-close" id="bw-modal-close" aria-label="Close video">✕</button>',
    '  <div class="bw-video-modal-player">',
    '    <iframe id="bw-modal-iframe" allowfullscreen',
    '      allow="autoplay; encrypted-media; picture-in-picture"></iframe>',
    '  </div>',
    '</div>'
  ].join('');
  document.body.appendChild(modal);

  // Close on overlay click (outside box)
  modal.addEventListener('click', function (e) {
    if (e.target === modal) bwCloseVideo();
  });

  document.getElementById('bw-modal-close').addEventListener('click', bwCloseVideo);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') bwCloseVideo();
  });

  // Intercept all video-item clicks
  document.querySelectorAll('a.video-item').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var videoId = _extractVideoId(link.href);
      if (videoId) {
        bwOpenVideo(videoId);
      } else {
        window.open(link.href, '_blank', 'noopener');
      }
    });
  });
});

function _extractVideoId(url) {
  var patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/
  ];
  for (var i = 0; i < patterns.length; i++) {
    var m = url.match(patterns[i]);
    if (m) return m[1];
  }
  return null;
}

function bwOpenVideo(videoId) {
  var iframe = document.getElementById('bw-modal-iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
  document.getElementById('bw-video-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function bwCloseVideo() {
  document.getElementById('bw-video-modal').classList.remove('open');
  document.getElementById('bw-modal-iframe').src = '';
  document.body.style.overflow = '';
}
