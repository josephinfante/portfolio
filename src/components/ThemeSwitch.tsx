import { useThemeSwitch } from "./hooks/useThemeSwitch";

type ThemeSwitchProps = {
	handleSwitchTheme: (newMode: string) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps>  = ({ handleSwitchTheme }) => {
	const { openModal, handleModal, selectedValue, handleSelectChange, getIcon} = useThemeSwitch({ handleSwitchTheme });
	return (
		<>
			<button className="mr-3 hidden md:block" onClick={handleModal} aria-label="button to switch themes">{getIcon()}</button>
			<select value={selectedValue} onChange={handleSelectChange} className="md:hidden px-4 py-2 pr-8 rounded-md border border-gray-300 focus:outline-none" aria-label="button to switch themes">
				<option aria-label="light mode" value={'light'}>Light</option>
				<option aria-label="dark mode" value={'dark'}>Dark</option>
				<option aria-label="system mode" value={'os-default'}>System</option>
			</select>
			{
				openModal && (
					<ul className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm font-semibold dark:bg-black dark:ring-0 dark:highlight-white/5 mt-4" onClick={handleModal}>
						<li className="hover:bg-slate-100 dark:hover:bg-zinc-900"><button className="w-full px-4 py-2 text-left" onClick={() => handleSwitchTheme('light')} aria-label="light mode">Light</button></li>
						<li className="hover:bg-slate-100 dark:hover:bg-zinc-900"><button className="w-full px-4 py-2 text-left" onClick={() => handleSwitchTheme('dark')} aria-label="dark mode">Dark</button></li>
						<li className="hover:bg-slate-100 dark:hover:bg-zinc-900"><button className="w-full px-4 py-2 text-left" onClick={() => handleSwitchTheme('os-default')} aria-label="system mode">System</button></li>
					</ul>
				)
			}
		</>
	);
};

export default ThemeSwitch;
