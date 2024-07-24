let clickCount = 0;
let usedQuotes = [];

const quotes = [
    "If there's an earthquake on Mars, is it still called an earthquake?",
    "The youngest photo of you, is also the oldest photo of you.",
    "Do people with one eye, Blink or Wink?",
    "Tobacco companies kill their best customers, and condom companies kill their future customers.",
    "If abortion is murder, are condom kidnappers?",
    "If you poop in an elevator, you take your shit to another level.",
    "If everyone is Unique, dosen't that make us all the same?",
    "If satan punishes bad people, dosent that make him good?"
];

function rick() {
    const deepImage = document.getElementById('deepImage');
    const deepThought = document.getElementById('deepThought');
    const quoteButton = document.querySelector('.quote-button');
    clickCount++;

    if (clickCount <= 5) {
        if (clickCount >= 3 && Math.random() < (clickCount - 2) / 3) {
            // Random chance to play video between 3 and 5 clicks
            playVideo();
        } else {
            let availableQuotes = quotes.filter(quote => !usedQuotes.includes(quote));

            if (availableQuotes.length === 0) {
                deepThought.innerText = "No more unique quotes available!";
                return;
            }

            const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
            usedQuotes.push(randomQuote);
            deepThought.innerText = randomQuote;
        }
    } else {
        playVideo();
    }
}

function playVideo() {
    const deepImage = document.getElementById('deepImage');
    const deepThought = document.getElementById('deepThought');
    const quoteButton = document.querySelector('.quote-button');

    const video = document.createElement('video');
    video.src = './assets/rickroll1.mp4';
    video.autoplay = true;
    video.loop = true;
    video.className = 'deep-image';
    video.style.width = 'auto';
    video.style.height = '400px';

    video.onplay = function() {
        deepThought.innerText = "Think you are too smart for a rickroll? Think again!";
    };

    deepImage.parentNode.replaceChild(video, deepImage);
    quoteButton.disabled = true;
}