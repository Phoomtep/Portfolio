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

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el))