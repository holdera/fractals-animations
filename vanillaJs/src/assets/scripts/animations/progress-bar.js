const progressBar = ((el) => {
    const progress = document.querySelector('.progress');
    const percentage = document.querySelector('.progress .progress-status').dataset.percentage;
    const transition = document.querySelector('.progress .progress-status').dataset.transition;

    const bars = document.querySelectorAll('.graphs-bar .bars .bar');
    console.log(progress);

    function animateBar(bar, percent, ease){
        bar.style.width = `${percent}%`;
        bar.style.transition = `width ${ease}s ease-in`;
    }

    function growVertical(graphBar, percent, ease){
        graphBar.style.height = `${percent}px`;
        graphBar.style.transition = `height ${ease}s ease-in`;
    }

    animateBar( progress, percentage, transition);
    bars.forEach( (bar)=> {
        growVertical(bar, bar.dataset.percentage, bar.dataset.transition);
    });

    function stopAnimation(){
        const stop = el.getAttribute('data-stop');
        if ( stop && stop == 'true') {
            return false;
        }
    }
});
progressBar();
export default progressBar;