const left_container = document.querySelector('.left-container')
const right_container = document.querySelector('.right-container')
const moon = document.querySelector('.moon')
var left_x = -100
var right_x = 100
var top_y = 50
var opacity = 0
const middle_x = Math.floor(window.innerWidth / 2)

window.addEventListener("load", () => {
    var loader = document.querySelector(".loader")
    if (loader) {
        setTimeout(() => {
            loader.classList.add("unactive")
        }, 1000)

    }
})


window.addEventListener('wheel', (e) => {
    if (left_container && right_container) {
        // left_container.style.transition = 'all linear 0.5s'
        // right_container.style.transition = 'all linear 0.5s'

        if (e.deltaY > 0 && left_x >= -100) {
            console.log('Wheel scrolled down:')
            left_container.style.transform = `translateX(${left_x -= 100}%)`
            right_container.style.transform = `translateX(${right_x += 100}%)`
            moon.style.transform = `translateX(-50%) translateY(${top_y += 100}%)`
            moon.style.opacity = `${opacity -= 1}`
        } else if (e.deltaY < 0 && left_x < 0) {
            console.log('Wheel scrolled up')
            left_container.style.transform = `translateX(${left_x += 100}%)`
            right_container.style.transform = `translateX(${right_x -= 100}%)`
            moon.style.transform = `translateX(-50%) translateY(${top_y -= 100}%)`
            moon.style.opacity = `${opacity += 1}`
        }
    }
})

let startY = 0; // Store the starting Y position

// Touch start: Capture the initial Y position
window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY; // Get the initial Y position
});

// Touch move: Compare the current Y position to the starting Y position
window.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY; // Get the current Y position
    if (currentY > startY && left_x < 0) {
        left_container.style.transform = `translateX(${left_x += 10}%)`
        right_container.style.transform = `translateX(${right_x -= 10}%)`
        moon.style.transform = `translateX(-50%) translateY(${top_y -= 10}%)`
        moon.style.opacity = `${opacity += 0.2}`
    } else if (currentY < startY && left_x >= -100) {
        left_container.style.transform = `translateX(${left_x -= 10}%)`
        right_container.style.transform = `translateX(${right_x += 10}%)`
        moon.style.transform = `translateX(-50%) translateY(${top_y += 10}%)`
        moon.style.opacity = `${opacity -= 0.2}`
    }
    startY = currentY; // Update startY for continuous movement detection
});