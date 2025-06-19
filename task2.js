let startTime, interval, elapsed = 0;
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

function updateDisplay() {
  const time = Date.now() - startTime + elapsed;
  const hours = Math.floor(time / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener('click', () => {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
  }
});

pauseBtn.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    elapsed += Date.now() - startTime;
    interval = null;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  elapsed = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  if (interval || elapsed > 0) {
    const lapItem = document.createElement('li');
    lapItem.textContent = display.textContent;
    laps.appendChild(lapItem);
  }
});
