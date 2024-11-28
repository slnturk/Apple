document.getElementById('startframe').classList.add('d-none')
const videoElement = document.getElementById('videoframe')

videoElement.classList.remove('d-none')

videoElement.addEventListener('ended', () => {
    videoElement.classList.add('d-none')
    document.getElementById('endframe').classList.remove('d-none')
})