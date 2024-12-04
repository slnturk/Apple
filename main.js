document.getElementById('startframe').classList.add('d-none')
const videoElement = document.getElementById('videoframe')

videoElement.classList.remove('d-none')

videoElement.addEventListener('ended', () => {
    videoElement.classList.add('d-none')
    document.getElementById('endframe').classList.remove('d-none')
})

Array.from(document.querySelectorAll('.btn.border')).forEach(button => {
    if (button.classList.contains('border-light')) {
        button.addEventListener('mouseover',()=>{
            button.classList.toggle('border-light')
            button.classList.toggle('border')
            button.classList.toggle('btn-light')
        })
        button.addEventListener('mouseout',()=>{
            button.classList.toggle('border-light')
            button.classList.toggle('border')
            button.classList.toggle('btn-light')
        })
    } else if(button.classList.contains('border-primary')) {
        button.addEventListener('mouseover',()=>{
            button.classList.toggle('border-primary')
            button.classList.toggle('border')
            button.classList.toggle('btn-primary')
        })
        button.addEventListener('mouseout',()=>{
            button.classList.toggle('border-primary')
            button.classList.toggle('border')
            button.classList.toggle('btn-primary')
        })
    }
});