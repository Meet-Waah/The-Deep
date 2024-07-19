function rick() {
    const deepImage = document.getElementById('deepImage');
    const video = document.createElement('video');
    
    video.src = './assets/rickroll1.mp4';
    video.autoplay = true;
    video.loop = true;
    video.className = 'deep-image';
    
    deepImage.parentNode.replaceChild(video, deepImage);

    document.getElementById('deepThought').innerText = "Never gonna give you up, never gonna let you down!";
}