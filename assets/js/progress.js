/* BrainWave — Session progress tracking via localStorage */

var BW_PROGRESS_PREFIX = 'bw_progress_';

function bwGetProgress(courseId) {
  try {
    return JSON.parse(localStorage.getItem(BW_PROGRESS_PREFIX + courseId) || '{}');
  } catch (e) { return {}; }
}

function bwSaveProgress(courseId, data) {
  localStorage.setItem(BW_PROGRESS_PREFIX + courseId, JSON.stringify(data));
}

function bwInitProgress(courseId) {
  var progress = bwGetProgress(courseId);
  var checkboxes = document.querySelectorAll('.session-check');

  checkboxes.forEach(function (cb) {
    var sid = cb.dataset.session;
    cb.checked = !!progress[sid];
    _applyCompleted(cb);

    // Stop header click when clicking checkbox
    cb.addEventListener('click', function (e) { e.stopPropagation(); });

    cb.addEventListener('change', function () {
      var p = bwGetProgress(courseId);
      p[sid] = cb.checked;
      bwSaveProgress(courseId, p);
      _applyCompleted(cb);
      _updateProgressBar(courseId);
    });
  });

  _updateProgressBar(courseId);
}

function _applyCompleted(cb) {
  var card = cb.closest('.session-card');
  if (card) card.classList.toggle('completed', cb.checked);
}

function _updateProgressBar(courseId) {
  var progress = bwGetProgress(courseId);
  var checkboxes = document.querySelectorAll('.session-check');
  var total = checkboxes.length;
  var done = 0;
  checkboxes.forEach(function (cb) {
    if (progress[cb.dataset.session]) done++;
  });

  var pct = total ? Math.round((done / total) * 100) : 0;

  var fill = document.getElementById('bw-progress-fill');
  var label = document.getElementById('bw-progress-label');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = done + '/' + total + ' sessions complete';
}

/* Called from landing page to read course progress percentage */
function bwCoursePercent(courseId, totalSessions) {
  var progress = bwGetProgress(courseId);
  var done = Object.values(progress).filter(Boolean).length;
  return totalSessions ? Math.round((done / totalSessions) * 100) : 0;
}
