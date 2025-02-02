document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const itemMenu = document.querySelector(".item-menu");
    const closeMenu = document.querySelector(".close");
    const body = document.querySelector("body");

    
    hamburgerMenu.addEventListener("click", function () {
        itemMenu.style.display = "flex";
        setTimeout(() => {
            itemMenu.style.transform = "translateX(0)";
            itemMenu.style.opacity = "1";
        }, 10);
    });


    closeMenu.addEventListener("click", function () {
        itemMenu.style.transform = "translateX(100%)";
        itemMenu.style.opacity = "0";
        setTimeout(() => {
            itemMenu.style.display = "none";
        }, 300);
    });
});