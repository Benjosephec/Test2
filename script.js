function changeContent(page) {
    // Associer les bons fichiers audio selon la page
    let audioFiles = [];
    if (page === "page1") {
        audioFiles = [
            { name: 'After Dark', src: 'media/Never Apologize/After_Dark.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Against the rope', src: 'media/Never Apologize/Against the rope.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'All Day', src: 'media/Never Apologize/All Day.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Blessings', src: 'media/Never Apologize/BLESSINGS.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Call Up The Troops', src: 'media/Never Apologize/Call Up The Troops.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Count My Guap', src: 'media/Never Apologize/Count My Guap.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Go Off', src: 'media/Never Apologize/Go Off.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'New York', src: 'media/Never Apologize/New York.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Nightlife', src: 'media/Never Apologize/Nightlife.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Pockets Loaded', src: 'media/Never Apologize/Pockets Loaded.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Right Now', src: 'media/Never Apologize/Right Now.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Rolling', src: 'media/Never Apologize/Rolling.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Say It', src: 'media/Never Apologize/Say It.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'See Me Shine', src: 'media/Never Apologize/See Me Shine.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Walking Thru Hell', src: 'media/Never Apologize/Walking Thru Hell.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' },
            { name: 'Woke Up', src: 'media/Never Apologize/Woke Up.mp3', image: 'media/never-apologize-album-v0-2jh94tenhimb1.jpg' }            
        ];
        document.getElementById("TitleMedia").innerText = "Never Apologize";
    } else if (page === "page2") {
        audioFiles = 
        [
            { name: 'Business', src: 'media/War2/Business.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Cross Me', src: 'media/War2/Cross Me.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Drifttn Off', src: 'media/War2/Drifttn Off.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Grande', src: 'media/War2/Grande.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Lights', src: 'media/War2/Lights.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Nitro', src: 'media/War2/Nitro.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'No Rush', src: 'media/War2/No Rush.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Outer Space', src: 'media/War2/Outer Space.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Outta Here', src: 'media/War2/Outta Here.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Popping Tags', src: 'media/War2/Popping Tags.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Redeye', src: 'media/War2/Redeye.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Road Rage', src: 'media/War2/Road Rage.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Safe', src: 'media/War2/SAFE.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Stay Dangerous', src: 'media/War2/Stay Dangerous.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Tonystark', src: 'media/War2/Tonystark.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' },
            { name: 'Wishes', src: 'media/War2/Wishes.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png' }
        ]
        document.getElementById("TitleMedia").innerText = "War2";
    } else if (page === "page3") {
        audioFiles = [
        ];
        document.getElementById("TitleMedia").innerText = "Never Apologize";
    }

    setupMediaPlayer(audioFiles);
}

function setupMediaPlayer(audioFiles) {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const trackNameElement = document.getElementById('trackName');
    const trackImageElement = document.getElementById('trackImage');
    const downloadButton = document.getElementById('downloadButton');

    if (!audioFiles || audioFiles.length === 0) {
        console.error("Aucun fichier audio trouvé !");
        return;
    }

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
