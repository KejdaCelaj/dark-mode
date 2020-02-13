import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const DarkMode = (mode) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkModeIsOn", mode)
    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").className = "dark-mode";
        } else { 
            document.querySelector("body").className = "" 
        };
    }, [darkMode]);
    return [darkMode, setDarkMode];
}

export default DarkMode;
