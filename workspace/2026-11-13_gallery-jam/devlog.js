// Filters operate on authored milestones; this is not automatic activity tracking.
const form = document.querySelector('.filters');
const entries = [...document.querySelectorAll('.milestone')];
const lanes = [...document.querySelectorAll('.lane')];
function updateLog() {
  const search = document.getElementById('search').value.trim().toLocaleLowerCase();
  const area = document.getElementById('area').value;
  const kind = document.getElementById('kind').value;
  const newest = document.getElementById('order').value === 'newest';
  let visible = 0;
  for (const entry of entries) {
    entry.hidden = !(entry.textContent.toLocaleLowerCase().includes(search)
      && (area === 'all' || entry.dataset.area === area)
      && (kind === 'all' || entry.dataset.kind === kind));
    if (!entry.hidden) visible++;
  }
  for (const lane of lanes) {
    const track = lane.querySelector('.track');
    const items = entries.filter(entry => entry.dataset.area === lane.dataset.lane);
    items.sort((a,b) => (a.dataset.date.localeCompare(b.dataset.date) || entries.indexOf(a) - entries.indexOf(b)) * (newest ? -1 : 1));
    for (const item of items) track.append(item);
    lane.hidden = items.every(item => item.hidden);
  }
  document.getElementById('result').textContent = `${visible} of ${entries.length} milestones · Open a milestone to read its evidence.`;
  document.getElementById('empty').hidden = visible !== 0;
}
form.addEventListener('input', updateLog);
form.addEventListener('change', updateLog);
form.addEventListener('reset', () => queueMicrotask(updateLog));
updateLog();
