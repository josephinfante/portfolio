import { useEffect, useState } from "react";

export const useHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('home');
	const navigationLinks = [
		{label: 'Home', section: 'home'},
		{label: 'About', section: 'about'},
		{label: 'Projects', section: 'projects'},
	]
	const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
	const closeMenuIfWideScreen = () => {
        if (window.innerWidth > 768) {
            setIsMenuOpen(false);
        }
    };
	const handleScroll = () => {
		const sections = document.querySelectorAll('#root div[id]'); // Select divs with IDs
		for (const section of sections) {
			const rect = section.getBoundingClientRect();
			if (rect.top <= 0 && rect.bottom > 0) {
				setActiveLink(section.id);
				break;
			}
		}
	};
	useEffect(() => {
        window.addEventListener("resize", closeMenuIfWideScreen);
        return () => {
            window.removeEventListener("resize", closeMenuIfWideScreen);
        };
    }, []);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
    return { isMenuOpen, activeLink, navigationLinks, toggleMenu };
}