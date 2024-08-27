let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function showMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

// Assuming you want to toggle the menu when clicking a button
let toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", showMenu);
