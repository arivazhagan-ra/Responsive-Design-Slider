let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let backBtn = document.getElementById('back');
let seeBtn = document.querySelectorAll('.see');
let carousel = document.querySelector('.container');
let swiper = document.querySelector('.container .swiper');




nextBtn.onclick = function(){
    showSlider('next');
}
prevBtn.onclick = function(){
    showSlider('prev');
}

const showSlider =(type) => {
    let items =document.querySelectorAll('.item');
    if(type == 'next'){
        swiper.appendChild(items[0]);
    } else{
        let last= items[items.length -1];
        swiper.prepend(last);
    }
}

seeBtn.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('show');
        document.querySelector("header").classList.add("hide-menu");
        console.log('See button clicked:', button);
    }
});

backBtn.onclick = function(){
    carousel.classList.remove('show');
    document.querySelector("header").classList.remove("hide-menu");
    console.log('Back button clicked');
}

