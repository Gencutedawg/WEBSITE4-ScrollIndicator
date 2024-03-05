const scrollIndicator = document.getElementById('scroll-indicator');
const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
const videoSource = document.getElementById('video-source');
const videoBackground = document.getElementById('video-background');
const audioPlayer = new Audio();

function updateScrollIndicator() {
    const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
    scrollIndicator.style.width = `${scrollPercent}%`;
}

function changeVideo(videoSourceUrl, audioSourceUrl) {
    videoSource.src = videoSourceUrl;
    videoBackground.load();
    videoBackground.play();

    audioPlayer.src = audioSourceUrl;
    audioPlayer.play();
}

function resetVideo() {
    videoSource.src = 'bg.mp4';
    videoBackground.load();
    videoBackground.play();

    audioPlayer.pause();
}

window.addEventListener('scroll', updateScrollIndicator);

const photocards = document.querySelectorAll('.photocard');

photocards.forEach(photocard => {
    const videoUrl = photocard.dataset.video;
    const audioUrl = photocard.dataset.audio;

    photocard.addEventListener('click', function() {
        changeVideo(videoUrl, audioUrl);
    });

    photocard.addEventListener('mouseout', resetVideo);
});
