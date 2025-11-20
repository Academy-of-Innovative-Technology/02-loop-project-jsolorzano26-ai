let songStarted = false;
const songContainer = document.getElementById('song-lyrics');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', function() {
    songStarted = !songStarted;
    toggleButton.innerHTML = songStarted ? '⏹️ Stop Song' : '▶️ Start Song';

    if (songStarted) {
        startSong();
    } else {
        songContainer.innerHTML = ''; // Clear lyrics when song is stopped
    }
});

function startSong() {
    songContainer.innerHTML = ''; // Clear existing content
    let songHtml = '';

    for (let i = 99; i >= 0; i--) {
        const line = `${i} Cupcake${i !== 1 ? 's' : ''} of Bakery on the Shelf 🧁`;
        const colorClass = getColorClass(i);

        if (i === 0) {
            songHtml += getFinalLine();
        } else {
            songHtml += `
                <p class="lyrics ${colorClass}">
                    ${line}, ${line}!
                    <br>Take one down, pass it around...
                    <br>${getRemainingCupcakes(i - 1)}
                </p>
            `;
        }
    }

    songContainer.innerHTML = songHtml;
}

function getColorClass(count) {
    if (count <= 9) return 'red';
    if (count <= 24) return 'yellow';
    return 'green';
}

function getRemainingCupcakes(count) {
    return `${count} Cupcake${count !== 1 ? 's' : ''} of Bakery on the Shelf 🧁`;
}

function getFinalLine() {
    return `
        <p class="lyrics fade-out">
            ‼️ There's no more cupcakes of bakery on the shelf, there's no more cupcakes of bakery.
            <br><em>Help me now, running to the bakery to get 99 cupcakes of bakery.</em>
        </p>
    `;
}

