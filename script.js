// Countdown Timer
let timerBox = document.getElementById("timer");
let toggleBtn = document.getElementById("toggleBtn");

const eventDate = new Date("sep 15, 2025 00:00:00").getTime();
let countdownRunning = true;
let timerId;

function showCountdown() {
  let now = new Date().getTime();
  let diff = eventDate - now;

  if (diff <= 0) {
    clearInterval(timerId);
    timerBox.innerText = "Time’s up! The event has started 🎉";
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerBox.innerText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

function startCountdown() {
  timerId = setInterval(showCountdown, 1000);
}

startCountdown();

toggleBtn.onclick = () => {
  if (countdownRunning) {
    clearInterval(timerId);
    toggleBtn.innerText = "Start";
  } else {
    startCountdown();
    toggleBtn.innerText = "Pause";
  }
  countdownRunning = !countdownRunning;
};

// Quotes Slider
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Your time is limited, so don’t waste it living someone else’s life."
];

let quoteBox = document.getElementById("quote");
let quoteIndex = 0;
let quoteId;

function showQuote(index) {
  quoteBox.innerText = quotes[index];
}

function startQuotes() {
  showQuote(quoteIndex);
  quoteId = setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    showQuote(quoteIndex);
  }, 4000);
}

startQuotes();

document.getElementById("prevQuote").onclick = () => {
  quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(quoteIndex);
};

document.getElementById("nextQuote").onclick = () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote(quoteIndex);
};

let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeModal");

setTimeout(() => {
  modal.style.display = "block";
}, 5000);

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
