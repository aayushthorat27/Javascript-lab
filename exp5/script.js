let timer = null;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const timerEl = document.getElementById('timer');
const errorEl = document.getElementById('error');

startBtn.addEventListener('click', () => {
  const input = document.getElementById('targetDate').value;
  if (!input) {
    showError("Please enter a valid target date and time.");
    return;
  }

  const targetDate = new Date(input);
  if (isNaN(targetDate)) {
    showError("Invalid date format.");
    return;
  }

  const now = new Date();
  if (targetDate <= now) {
    showError("Target date must be in the future.");
    return;
  }

  hideError();
  startBtn.disabled = true;
  stopBtn.disabled = false;

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    const now = new Date();

    if (targetDate <= now) {
      clearInterval(timer);
      timerEl.innerHTML = "Time’s up!";
      startBtn.disabled = false;
      stopBtn.disabled = true;
      return;
    }

    const diff = calculateTimeDifference(now, targetDate);
    timerEl.innerHTML = `
      ${diff.years}y ${diff.months}m ${diff.days}d 
      ${diff.hours}h ${diff.minutes}m ${diff.seconds}s
    `;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  if (timer) clearInterval(timer);
  timerEl.innerHTML = "stopped";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// ✅ Function to calculate time difference
function calculateTimeDifference(start, end) {
  let diff = Math.floor((end - start) / 1000); 

  const seconds = diff % 60;
  diff = Math.floor(diff / 60);
  const minutes = diff % 60;
  diff = Math.floor(diff / 60);
  const hours = diff % 24;
  diff = Math.floor(diff / 24);

  const days = diff % 30;      
  diff = Math.floor(diff / 30);
  const months = diff % 12;
  const years = Math.floor(diff / 12);

  return { years, months, days, hours, minutes, seconds };
}

// ✅ Error functions
function showError(msg) {
  errorEl.innerText = msg;
  errorEl.style.display = "block";
}

function hideError() {
  errorEl.innerText = "";
  errorEl.style.display = "none";
}
