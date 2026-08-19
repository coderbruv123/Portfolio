import { useEffect, useRef } from 'react';

const SECTION_IDS = ["hero", "about", "experience", "skills", "projects", "contact"];

const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const getSectionTops = () =>
    SECTION_IDS
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .map((el) => el.offsetTop);

export const useSectionScroll = () => {
    const animating = useRef(false);
    const rafRef = useRef(0);
    const activeDirection = useRef<"up" | "down" | null>(null);
    const touchStart = useRef<number | null>(null);

    useEffect(() => {
        const cancelAnimation = () => {
            cancelAnimationFrame(rafRef.current);
            animating.current = false;
            activeDirection.current = null;
        };

        const scrollToY = (targetY: number, duration = 1200) => {
            const startY = window.scrollY;
            const distance = targetY - startY;
            if (Math.abs(distance) < 4) {
                animating.current = false;
                return;
            }
            const startTime = performance.now();

            const step = (now: number) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo({ top: startY + distance * easeInOutCubic(progress) });
                if (progress < 1) {
                    rafRef.current = requestAnimationFrame(step);
                } else {
                    animating.current = false;
                    activeDirection.current = null;
                }
            };
            rafRef.current = requestAnimationFrame(step);
        };

        const goToNext = () => {
            const tops = getSectionTops();
            if (tops.length === 0) return false;
            const currentY = window.scrollY;
            const nextTop = tops.find((t) => t > currentY + 4);
            if (nextTop !== undefined) {
                animating.current = true;
                activeDirection.current = "down";
                scrollToY(nextTop);
                return true;
            }
            return false;
        };

        const goToPrev = () => {
            const tops = getSectionTops();
            if (tops.length === 0) return false;
            const currentY = window.scrollY;
            const prevTop = [...tops].reverse().find((t) => t < currentY - 4);
            if (prevTop !== undefined) {
                animating.current = true;
                activeDirection.current = "up";
                scrollToY(prevTop);
                return true;
            }
            return false;
        };

        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) < 10) return;

            // Always consume the wheel event so nothing scrolls natively underneath.
            e.preventDefault();

            const direction = e.deltaY > 0 ? "down" : "up";

            // If we're mid-animation, ignore repeats of the same direction (allows rapid reversal).
            if (animating.current && activeDirection.current === direction) return;

            // Cancelling an in-flight animation before starting a new one keeps it snappy.
            cancelAnimation();

            const moved = direction === "down" ? goToNext() : goToPrev();
            if (moved) {
                activeDirection.current = direction;
            }
        };

        const onTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0]?.clientY ?? null;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (touchStart.current === null) return;
            const deltaY = touchStart.current - (e.touches[0]?.clientY ?? touchStart.current);
            if (Math.abs(deltaY) < 50) return;

            e.preventDefault();

            const direction = deltaY > 0 ? "down" : "up";

            if (animating.current && activeDirection.current === direction) return;

            cancelAnimation();

            const moved = direction === "down" ? goToNext() : goToPrev();
            if (moved) {
                activeDirection.current = direction;
            }
            touchStart.current = null;
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return null;
};