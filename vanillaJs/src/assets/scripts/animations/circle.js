const animateCircles = (() => {
    const circleGraphs = document.querySelectorAll('.progress-ring__circle');
    function initCircle(chartCircles) {
        const newColor = chartCircles.dataset.color;
        const radius = chartCircles.r.baseVal.value;
        const two = 2;
        const oneHundred = 100;
        const per = chartCircles.dataset.percent;
        const circumference = radius * two * Math.PI;
        chartCircles.style.strokeDasharray = `${circumference} ${circumference}`;
        chartCircles.style.strokeDashoffset = circumference;
        chartCircles.style.strokeWidth = '32px';
        chartCircles.style.stroke = newColor;
        chartCircles.style.transition = '2s stroke-dashoffset';
        function setProgress(percent) {
            const offset = circumference - percent / oneHundred * circumference;
            chartCircles.style.strokeDashoffset = offset;
        }
        setProgress(per);
    }
    circleGraphs.forEach( (graph) => {
        initCircle(graph);
    })
    // const ln = document.querySelector('#prognosis');
    // const among = document.querySelector('#graphic-chart');
    // const diag = document.querySelector('#importance');

    // const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.5
    // };
    // const observer = new IntersectionObserver(findCharts, options);
    // let duration = 1000;
    // function findCharts(entries) {
    //     entries.forEach((entry) => {
    //         if (entry.target === among && entry.isIntersecting === true) {
    //             circleGraphs.forEach( (amongChart) => {
    //                 setTimeout(function() {
    //                     initCircle(amongChart);
    //                 },duration);
    //             });
    //         }
    //         if (entry.target === diag && entry.isIntersecting === true) {
    //             initCircle(diagCharts);
    //         } else {
    //             return;
    //         }
    //     });
    // }
    // const pies = [ln, among, diag];
    // pies.forEach( (pie) => {
    //     if ( document.body.contains(pie) ) {
    //         observer.observe(pie);
    //     }
    // });
})();
export default animateCircles;