document.addEventListener("click", e => {
    let anchor
    if (e.target.matches("a")) {
        anchor = e.target
    } else {
        anchor = e.target.closest("a")
    }
    if (anchor != null) {
        document.querySelectorAll("a").forEach(elem => {
            elem.classList.remove("active")
        })
        anchor.classList.add("active")
    }
})