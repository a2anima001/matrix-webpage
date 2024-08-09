// Provjera da li je stranica već otvarana
if (localStorage.getItem('pageUsed')) {
    document.getElementById('blockedMessage').classList.remove('hidden');
    document.body.style.pointerEvents = 'none';
} else {
    localStorage.setItem('pageUsed', true);
}

function answerQuestion1(answer) {
    document.getElementById('question1').classList.add('hidden');
    document.getElementById('question2').classList.remove('hidden');
}

function answerQuestion2(answer) {
    document.getElementById('question2').classList.add('hidden');
    if (answer === 'Da') {
        document.getElementById('question3').classList.remove('hidden');
    } else {
        document.getElementById('pauseMessage').classList.remove('hidden');
        startTimer(5);
    }
}

function answerQuestion3(answer) {
    document.getElementById('question3').classList.add('hidden');
    if (answer === 'Da') {
        document.getElementById('finalMessage').classList.remove('hidden');
    } else {
        document.getElementById('pauseMessage').classList.remove('hidden');
        startTimer(5);
    }
    document.body.style.pointerEvents = 'none';
}

function startTimer(minutes) {
    let time = minutes * 60;
    const timerElement = document.getElementById('timer');

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        timerElement.innerHTML = `Preostalo vrijeme: ${minutes}m ${seconds}s`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            document.body.style.pointerEvents = 'auto';
            timerElement.innerHTML = "Pauza je završena.";
        }
    }, 1000);
}
