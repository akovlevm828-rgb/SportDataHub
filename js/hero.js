export function initStopwatch() {
    const digits = document.getElementById('swDigits');
    const caption = document.getElementById('swCaption');
    const target = 9.58;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        digits.textContent = current.toFixed(2);

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            digits.textContent = target.toFixed(2);
            digits.classList.add('locked');
            caption.textContent = 'світовий рекорд · 100м · Усейн Болт, 2009';
        }
    }

    requestAnimationFrame(tick);
}
