const navColumn = document.querySelector('.nav-column');
const navLinks = document.querySelector('.nav-links');

navColumn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const menuText = document.getElementsByClassName("material-symbols-outlined")[0];
    if (menuText.innerText === "menu") {
        menuText.innerText = "close";
    } else {
        menuText.innerText = "menu";
    }
});