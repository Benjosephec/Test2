function changeContent(page) {
    let content = {
        page1: '<section id="media-player"><div class="music-player-body"><h2>MUSIC PLAYER</h2><img src="#" alt="trackimages" class="track-image" id="trackImage"><h3 id="trackName"></h3><audio id="audioPlayer" controls><source src="media/War2/Nitro.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><div class="controls"><button class="prev-button" id="prevButton">&#9665;</button><button class="play-pause-button" id="playPauseButton">&#9658;</button> <button class="next-button" id="nextButton">&#9655;</button><button class="download-button" id="downloadButton">⬇</button></div></div></section>',
        page2: "<p>Voici le contenu de la Page 2</p>",
        page3: "<p>Et maintenant, le contenu de la Page 3</p>"
    };
    document.getElementById("media-player").innerHTML = content[page];
}

