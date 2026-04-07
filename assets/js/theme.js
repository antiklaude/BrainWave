/* BrainWave — Theme toggle (dark / light) */

// Apply theme before first paint to prevent flash
(function () {
  var saved = localStorage.getItem('bw_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('bw_theme', next);
  _updateThemeBtn();
}

function _updateThemeBtn() {
  var theme = document.documentElement.getAttribute('data-theme');
  var btn = document.getElementById('bw-theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '☾';
}

document.addEventListener('DOMContentLoaded', _updateThemeBtn);
