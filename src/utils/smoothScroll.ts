const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const getTargetY = (href: string, offset = 64) => {
    const el = document.querySelector(href);
    if (!el) return null;
    return el.getBoundingClientRect().top + window.scrollY - offset;
};

export const smoothScrollTo = (href: string, offset = 64, duration = 900) => {
    const targetY = getTargetY(href, offset);
    if (targetY === null) return;

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    if (Math.abs(distance) < 2) {
        window.scrollTo({ top: targetY });
        return;
    }

    const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo({ top: startY + distance * eased });

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};