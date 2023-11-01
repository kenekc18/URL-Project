let btn = document.querySelector(".btn-form");
let box = document.getElementById("inputbox");
let api = document.querySelector('.api-link');
let link = document.querySelector('.new-short-link');

btn.addEventListener('click', ()=>{
    link.classList.add('short-link');
    api.textContent = box.value;

})