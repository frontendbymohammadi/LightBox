'use strict'

const imageb = document.querySelectorAll(".img");
// const titel = document.querySelectorAll(".titel");
// const caption = document.querySelectorAll('p');
// image.addEventListener("click", function () {
//     image.classList.toggle('activ');
//     titel.classList.toggle('activ');
//     caption.classList.toggle('activ');

// })

imageb.forEach(popup => popup.addEventListener("click", function () {
    popup.classList.toggle('activ');
})
);