const form = document.getElementById('form');
const response = document.getElementById('response');
const video = document.getElementById('video');

function logSubmit(event) {
    event.preventDefault();
    response.hidden = false;
    video.hidden = false;
    video.play();
}

form.addEventListener("submit", logSubmit);