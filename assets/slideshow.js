const video = document.querySelector('.slideshow__media video');

video.addEventListener('ended', () => {
  video.pause(); // Pause the video after it finishes playing.
});