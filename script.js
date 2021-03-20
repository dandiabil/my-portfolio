//onLoad logo anim
const logo = document.querySelector('.logo');
window.onload = function(){
    logo.classList.remove('fade');
};

// logo.addEventListener('mouseover', function(){
    
// });

//select navbar
const liNav = document.querySelectorAll('nav ul li');
liNav.forEach(function(e){
    e.addEventListener('click', function(){
        // console.log(e.className);
        const home = document.querySelector('.home');
        const profile = document.querySelector('.profile');
        const work = document.querySelector('.work');
        const social = document.querySelector('.social');

        switch(e.className){
            case 'profile-menu':
                if(!home.classList.contains('hidden') || !work.classList.contains('hidden') || !social.classList.contains('hidden')){
                    profile.classList.remove('hidden');
                    home.classList.add('hidden');
                    work.classList.add('hidden');
                    social.classList.add('hidden');
                }else{
                    home.classList.remove('hidden');
                    profile.classList.add('hidden');
                }
                break;
            case 'work-menu':
                if(!home.classList.contains('hidden') || !profile.classList.contains('hidden') || !social.classList.contains('hidden')){
                    work.classList.remove('hidden');
                    home.classList.add('hidden');
                    profile.classList.add('hidden');
                    social.classList.add('hidden');
                }else{
                    home.classList.remove('hidden');
                    work.classList.add('hidden');
                }
                break;
            case 'social-menu':
                if(!home.classList.contains('hidden') || !work.classList.contains('hidden') || !profile.classList.contains('hidden')){
                    social.classList.remove('hidden');
                    home.classList.add('hidden');
                    work.classList.add('hidden');
                    profile.classList.add('hidden');
                }else{
                    home.classList.remove('hidden');
                    social.classList.add('hidden');
                }
                break;
        }
    });
});