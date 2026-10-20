import { useCallback, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

const readTheme = (): Theme => {
    try {
        const fromUrl = new URLSearchParams(window.location.search).get("theme");
        if (fromUrl === "light" || fromUrl === "dark") return fromUrl;

        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        /* storage / search params unavailable */
    }
    return "light";
};

let current: Theme = readTheme();
const listeners = new Set<() => void>();

const apply = () => {
    document.documentElement.classList.toggle("light", current === "light");
    try {
        window.localStorage.setItem(STORAGE_KEY, current);
    } catch {
        /* storage unavailable */
    }
};

// Keep the DOM in sync with the resolved theme on first load.
apply();

export const getTheme = (): Theme => current;

const commit = (next: Theme) => {
    current = next;
    apply();
    listeners.forEach((listener) => listener());
};

export const setTheme = (next: Theme) => {
    if (next === current) return;
    // Morph the whole page with the View Transitions API when available —
    // an expanding ring of light reveals the new palette from the center
    // (see index.css). Otherwise fall back to a plain swap.
    if (typeof document.startViewTransition === "function") {
        document.startViewTransition(() => {
            // flushSync guarantees the DOM is updated before the new snapshot
            // is captured (documented React + View Transitions pattern).
            flushSync(() => commit(next));
        });
    } else {
        commit(next);
    }
};

export const toggleTheme = () => setTheme(current === "light" ? "dark" : "light");

/** Shared theme state — every subscriber stays in sync across the app. */
export function useTheme(): [Theme, () => void] {
    const subscribe = useCallback((listener: () => void) => {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    }, []);

    const theme = useSyncExternalStore(subscribe, getTheme, getTheme);
    return [theme, toggleTheme];
}
