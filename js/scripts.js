const splashPage = document.getElementById("splash-screen")

const startFadeOut = () => {
    splashPage.classList.add('fade-out')
}

setTimeout(5000)

splashPage.addEventListener('transitionend', () => {
    if(splashPage.classList.contains("fade-out")) splashPage.style.display = 'none'
})