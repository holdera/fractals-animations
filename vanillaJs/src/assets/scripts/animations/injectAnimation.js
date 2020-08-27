const injectAnimation = (elements) => {
    const animationTargets = elements;

    const repeating = function(element){
        const check = element.getAttribute('repeat');
        if ( check == 'true' ){
        console.log(check);
        element.style.animationIterationCount = 'infinite';
        }
    }

    animationTargets.forEach( (ani)=>{
        console.log(ani);
        const animationType = ani.dataset.animation;
        const animationSequence = ani.dataset.sequence;
        ani.style.animation = `${animationType} .3s ease`;
        console.log(animationTargets,animationType, animationSequence );
        repeating(ani);
    });

   
};
const square = document.querySelectorAll('.square');
const circle = document.querySelectorAll('.circle');
injectAnimation(square);
injectAnimation(circle);
export default injectAnimation;