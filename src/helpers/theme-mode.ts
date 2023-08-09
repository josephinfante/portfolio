export const setThemeLocalStorage = (mode: string) => {
    switch (mode) {
        case 'dark':
            localStorage.setItem('theme', 'dark');
            return;
        case 'light':
            localStorage.setItem('theme', 'light');
            return;
        default:
            localStorage.setItem('theme', 'os-default');
            return;
    }
}

export const checkThemeLocalStorage = (): string => {
    const theme = localStorage.getItem('theme');
    setThemeLocalStorage(theme??'os-default');
    return theme??'os-default';
}