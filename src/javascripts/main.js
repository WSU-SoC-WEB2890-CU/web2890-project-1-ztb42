//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

document.addEventListener("DOMContentLoaded", function () {
    var listItems = document.querySelectorAll("li")

    function checkVisibility() {
        listItems.forEach(function (item) {
            var itemTop = item.getBoundingClientRect().top
            var windowHeight = window.innerHeight

            if (itemTop < windowHeight - 20) {
                item.classList.add("visible")
            } else {
                item.classList.remove("visible")
            }
        })
    }

    window.addEventListener("scroll", checkVisibility)

    // Initial check on page load
    checkVisibility()
})
