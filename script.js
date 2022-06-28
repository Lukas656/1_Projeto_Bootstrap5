const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animaCard() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 3);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    });
}
animaCard();
window.addEventListener('scroll', function(){
    animaCard();
})