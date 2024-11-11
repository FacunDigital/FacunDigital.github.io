// Countdown timer
let timeLeft = 300; // 5 minutes in seconds
const countdown = document.getElementById('countdown');
const spotsLeft = document.getElementById('spots-left');

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        timeLeft = 300; // reset timer
    }
}

setInterval(updateCountdown, 1000);

// Set initial spots left
let spots = 7;
spotsLeft.textContent = spots;
