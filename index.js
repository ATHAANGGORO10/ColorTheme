const circles = document.querySelectorAll(".circle");
circles.forEach(circle => {
    circle.addEventListener("click", (style) => {
        const computedStyle = window.getComputedStyle(style.target)
        document.body.style.backgroundColor = computedStyle.backgroundColor
    })
})