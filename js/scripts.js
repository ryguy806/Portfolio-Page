const splashPage = document.getElementById("splash-screen")

const startFadeOut = () => {
    splashPage.classList.add('fade-out')
}

setTimeout(5000)

splashPage.addEventListener('transitionend', () => {
    if(splashPage.classList.contains("fade-out")) splashPage.style.display = 'none'
    splashPage.remove()
})

const devYears = document.getElementById("years")
const yearsSince = new Date().getFullYear - 2020;
devYears.textContent = "Senior Software Dev with over " + yearsSince + " years of experience of full-stack, cross-platform, web application development."
