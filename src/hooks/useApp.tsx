import { useEffect, useState } from "react";
import { checkThemeLocalStorage, setThemeLocalStorage } from "../helpers/theme-mode";

export const useApp = () => {
    const [manualMode, setManualMode] = useState<boolean>(false);
    const [localStorageTheme, setLocalStorageTheme] = useState<string>(checkThemeLocalStorage());
    const mediaTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const addDarkMode = () => {
        document.documentElement.classList.remove('light');
        document.body.classList.remove('light');
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    }
    const removeDarkMode = () => {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.body.classList.add('light');
    }
    const handleSwitchTheme = (newMode: string) => {
        setManualMode(newMode === 'dark' || newMode === 'light');
        setThemeLocalStorage(newMode);
        setLocalStorageTheme(newMode);
    };
    const updateTheme = () => {
        if (checkThemeLocalStorage() === 'os-default') {
            if (mediaTheme.matches) {
                addDarkMode();
            } else {
                removeDarkMode();
            }
            mediaTheme.addEventListener('change', handleMediaChange);
        } else {
            localStorageTheme === 'dark' ? addDarkMode() : removeDarkMode();
        }
    };
    const handleMediaChange = (e: any) => {
        if (checkThemeLocalStorage() === 'os-default') {
            e.matches ? addDarkMode() : removeDarkMode();
        }
    };
    useEffect(() => {
        updateTheme();
        return () => {
          mediaTheme.removeEventListener('change', handleMediaChange);
        };
    }, [localStorageTheme, manualMode]);
    useEffect(() => {
        if (checkThemeLocalStorage() !== 'os-default') {
          setManualMode(true);
        }
    }, []);
    return { handleSwitchTheme };
}