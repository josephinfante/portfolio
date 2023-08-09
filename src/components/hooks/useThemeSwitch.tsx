import { useState } from "react";
import { checkThemeLocalStorage } from "../../helpers/theme-mode";
import { Icons } from "../../helpers/icons";

export const useThemeSwitch = ({ handleSwitchTheme } : { handleSwitchTheme: (newMode: string) => void}) => {
    const [openModal, setOpenModal] = useState(false);
	const [systemChange, setSystemChange] = useState(false);
	const [selectedValue, setSelectedValue] = useState(checkThemeLocalStorage());
	const handleModal = () => {
		setOpenModal(!openModal);
	};
	const handleChangingIconForSystem = () => {
		const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => setSystemChange(systemDarkMode.matches);
		systemDarkMode.addEventListener('change', handleChange);
		return () => systemDarkMode.removeEventListener('change', handleChange);
	};
	const getIcon = () => {
		if (checkThemeLocalStorage() === 'dark') return <span className="text-white">{Icons('moon')}</span>;
		else if (checkThemeLocalStorage() === 'light') return <span className="text-yellow-600">{Icons('sun')}</span>;
		else {
			if (!systemChange) handleChangingIconForSystem();
			return systemChange ? (<span className="text-white">{Icons('moon')}</span>) 
            : (<span className="text-yellow-600">{Icons('sun')}</span>);
		}
	};
	const handleSelectChange: React.ReactEventHandler<HTMLSelectElement> = (event) => {
		const selectedValue = event.currentTarget.value;
		handleSwitchTheme(selectedValue);
		setSelectedValue(selectedValue);
	};
    return { openModal, handleModal, selectedValue, handleSelectChange, getIcon}
}