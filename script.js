// script.js
const buttonLeft = document.getElementById('buttonLeft');
const buttonRight = document.getElementById('buttonRight');

buttonRight.addEventListener('click', () => {
    smoothScrollTo(document.documentElement, document.documentElement.scrollLeft + 500, 700); // Scroll right smoothly
});

buttonLeft.addEventListener('click', () => {
    smoothScrollTo(document.documentElement, document.documentElement.scrollLeft - 500, 700); // Scroll left smoothly
});

function smoothScrollTo(element, to, duration) {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    function animateScroll(time) {
        const elapsed = time - startTime;
        element.scrollLeft = easeInOut(elapsed, start, change, duration);

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animateScroll);
}
