const player = document.querySelector(".draggable")
const main = document.querySelector(".main")
const playerOutline = player.getBoundingClientRect()

window.mainOutline = main.getBoundingClientRect()

window.addEventListener("resize", function () {
    window.mainOutline = main.getBoundingClientRect()
})

const game = () => {
    const stopMovement = () => {
        document.onmousemove = null
    }

    const startMovement = (e) => {
        e.preventDefault()
        document.onmouseup = stopMovement
        document.onmousemove = movement
    }

    const movement = (e) => {
        e.preventDefault()
        // 100 is half of draggable div. centers cursor
        horizontal = e.clientX - 100
        vertical = e.clientY - 100
        if (
            // 20px to make up for border width.
            horizontal >= mainOutline.left + 20 &&
            horizontal + playerOutline.width <= mainOutline.right &&
            vertical >= mainOutline.top + 20 &&
            vertical + playerOutline.height <= mainOutline.bottom
        ) {
            player.style.left = `${horizontal - mainOutline.left - 20}px`
            player.style.top = `${vertical - mainOutline.top - 20}px`
        }
    }

    main.onmousedown = startMovement
}
game(player, main)
