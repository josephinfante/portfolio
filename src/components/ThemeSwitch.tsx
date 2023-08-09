import { useThemeSwitch } from "./hooks/useThemeSwitch";

type ThemeSwitchProps = {
	handleSwitchTheme: (newMode: string) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps>  = ({ handleSwitchTheme }) => {
	const { openModal, handleModal, selectedValue, handleSelectChange, getIcon} = useThemeSwitch({ handleSwitchTheme });
	return (
		<>
			<button className="mr-3 hidden md:block" onClick={handleModal}>{getIcon()}</button>
			<select value={selectedValue} onChange={handleSelectChange} className="md:hidden px-4 py-2 pr-8 rounded-md border border-gray-300 focus:outline-none">
				<option value={'light'}>Light</option>
				<option value={'dark'}>Dark</option>
				<option value={'os-default'}>System</option>
			</select>
			{
				openModal && (
					<ul className="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm font-semibold dark:bg-black dark:ring-0 dark:highlight-white/5 mt-4" onClick={handleModal}>
						<li className="hover:bg-slate-100 dark:hover:bg-zinc-900"><button className="w-full px-4 py-2 text-left" onClick={() => handleSwitchTheme('light')}>Light</button></li>
						<li className="hover:bg-slate-100 dark:hover:bg-zinc-900"><button className="w-full px-4 py-2 text-left" onClick={() => handleSwitchTheme('dark')}>Dark</button></li>
						<li className="hover:bg-slate-100 dark:hover:bg-zinc-900"><button className="w-full px-4 py-2 text-left" onClick={() => handleSwitchTheme('os-default')}>System</button></li>
					</ul>
				)
			}
		</>
	);
};

export default ThemeSwitch;
