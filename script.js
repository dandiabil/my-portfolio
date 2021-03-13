//onLoad logo anim
const logo = document.querySelector('.logo');
window.onload = function(){
    logo.classList.remove('fade');
};




//tombol up
const parent = document.querySelector('.parent');
const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', function(){
    parent.scrollTop = 0;
});


parent.addEventListener('scroll', function(){
    if(parent.scrollTop > 800){
        btnUp.classList.remove('fade');
    }else{
        btnUp.classList.add('fade');
    }
});


