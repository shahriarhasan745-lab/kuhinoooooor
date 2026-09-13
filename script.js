const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    slider.appendChild(items[0]);
});

prevBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);
});
