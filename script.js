//get reference for HTML elements
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const trackNameElement = document.getElementById('trackName');// Track name display
const trackImageElement = document.getElementById('trackImage'); // Track image
const downloadButton = document.getElementById('downloadButton');

const audioFiles = [
    {name: 'Nitro', src: 'media/War2/Nitro.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png'},
    {name: 'Business', src: 'media/War2/Business.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png'},
    {name: 'Cross Me', src: 'media/War2/Cross Me.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png'},
    {name: 'Outta Here', src: 'media/War2/Outta Here.mp3', image: 'media/concept-covers-for-yalls-local-files-i-didnt-know-which-one-v0-duvvft5enkmc1.png'},
];

// Initialize variables
let currentTrack = 0;
let isPlaying = false;

// Function to update the track name
function updateTrackName() {
    trackNameElement.textContent = audioFiles[currentTrack].name;
    trackImageElement.src = audioFiles[currentTrack].image;
}

// Function to toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseButton.textContent = '\u25BA'; // Play icon
    } 
    else {
        audioPlayer.play();
        isPlaying = true;
        playPauseButton.textContent = '\u275A\u275A'; // Pause icon
    }
}

// Event listener for play/pause button
playPauseButton.addEventListener('click', () => {
    togglePlayPause();
});

// Event listener for next button
nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % audioFiles.length;
    audioPlayer.src = audioFiles[currentTrack].src;
    updateTrackName();
    if (isPlaying) {
        audioPlayer.play(); // If it was playing before, continue playing the new track.
    }
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
    audioPlayer.src = audioFiles[currentTrack].src;
    updateTrackName();
    if (isPlaying) {
        audioPlayer.play(); // If it was playing before, continue playing the new track.
    }
});

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = audioFiles[currentTrack].src; // Récupère le fichier de la piste actuelle
    link.download = audioFiles[currentTrack].name + '.mp3'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


// Initial track name update
updateTrackName();    

