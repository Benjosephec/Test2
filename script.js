function changeContent(page) {
    let content = {
        page1: `<section id="media-player">
                    <div class="music-player-body">
                        <h2>MUSIC PLAYER</h2>
                        <img src="#" alt="trackimages" class="track-image" id="trackImage">
                        <h3 id="trackName"></h3>
                        <audio id="audioPlayer" controls>
                            <source src="media/War2/Nitro.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <div class="controls">
                            <button class="prev-button" id="prevButton">&#9665;</button>
                            <button class="play-pause-button" id="playPauseButton">&#9658;</button> 
                            <button class="next-button" id="nextButton">&#9655;</button>
                            <button class="download-button" id="downloadButton">⬇</button>
                        </div>
                    </div>
                </section>`,
        page2: "<p>Voici le contenu de la Page 2</p>",
        page3: "<p>Et maintenant, le contenu de la Page 3</p>"
    };

    document.getElementById("media-player").innerHTML = content[page];

    if (page === "page1") {
        setupMediaPlayer(); // Réattacher les événements après le changement de contenu
    }
}

function setupMediaPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const trackNameElement = document.getElementById('trackName');
    const trackImageElement = document.getElementById('trackImage');
    const downloadButton = document.getElementById('downloadButton');

    const audioFiles = [
        { name: 'Nitro', src: 'media/War2/Nitro.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
        { name: 'Business', src: 'media/War2/Business.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
        { name: 'Cross Me', src: 'media/War2/Cross Me.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
        { name: 'Outta Here', src: 'media/War2/Outta Here.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' }
    ];

    let currentTrack = 0;
    let isPlaying = false;

    function updateTrack() {
        trackNameElement.textContent = audioFiles[currentTrack].name;
        trackImageElement.src = audioFiles[currentTrack].image;
        audioPlayer.src = audioFiles[currentTrack].src;
    }

    function togglePlayPause() {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            playPauseButton.innerHTML = "&#9658;"; // Play icon
        } else {
            audioPlayer.play();
            isPlaying = true;
            playPauseButton.innerHTML = "&#10074;&#10074;"; // Pause icon
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    nextButton.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % audioFiles.length;
        updateTrack();
        if (isPlaying) audioPlayer.play();
    });

    prevButton.addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
        updateTrack();
        if (isPlaying) audioPlayer.play();
    });

    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = audioFiles[currentTrack].src;
        link.download = audioFiles[currentTrack].name + '.mp3';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    updateTrack();
}



