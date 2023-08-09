import { Icons } from "../helpers/icons";
import { handleEmailClick } from "../helpers/send-email";
import ThemeSwitch from "./ThemeSwitch";
import { useHeader } from "./hooks/useHeader";

type HeaderProps = {
	handleSwitchTheme: (newMode: string) => void;
}

const Header: React.FC<HeaderProps>  = ({ handleSwitchTheme }) => {
	const { isMenuOpen, activeLink, navigationLinks, toggleMenu } = useHeader();
	return (
		<>
			<nav className="navbar">
				<div className="flex items-center justify-between">
					<a href="/" aria-label="Logo">{Icons('logo')}</a>
					<ul className="hidden md:flex items-center justify-between gap-8 text-sm">
						<Links links={navigationLinks} activeLink={activeLink}/>
					</ul>
					<div className="hidden md:flex justify-center items-center">
						<ThemeSwitch handleSwitchTheme={handleSwitchTheme}/>
						<HireButton handleEmailClick={handleEmailClick}/>
					</div>
					<button className="cursor-pointer w-[25px] h-[25px] flex items-center justify-center md:hidden rounded-md" aria-label="open mobile navigation" onClick={toggleMenu}><span className="text-black dark:text-white">{Icons('nav')}</span></button>
				</div>
			</nav>
			{
				isMenuOpen && (
					<div className="fixed w-full h-screen z-[99]" onClick={toggleMenu}>
						<div className="fixed top-2 right-2 w-full max-w-xs bg-backgroundColor rounded-lg shadow-lg p-6 text-base dark:bg-darkBackgroundColor dark:text-darkColor text-color dark:highlight-white/5 z-[100]" style={{background: 'var(--background-color)'}} onClick={(e) => e.stopPropagation()}>
							<button onClick={toggleMenu} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center dark:text-darkColor text-color hover:text-slate-600 dark:hover:text-slate-300" aria-label="close mobile navigation">{Icons('close')}</button>
							<ul className="space-y-6">
								<Links links={navigationLinks} activeLink={activeLink}/>
							</ul>
							<div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10 flex justify-between items-center">
								<HireButton handleEmailClick={handleEmailClick}/>
								<ThemeSwitch handleSwitchTheme={handleSwitchTheme}/>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
};

const Links = ({ links, activeLink } : { links: {label: string, section: string }[], activeLink: string}) => {
	return (
		<>
			{
				links.map((link: {label: string, section: string}, index: number) => (
						<li key={index} className={`hover:text-slate-600 dark:hover:text-slate-300 ${activeLink === link.section ? 'font-bold':''}`}><a href={`#${link.section}`} aria-label={`${link.label} link`}>{link.label}</a></li>
					))
			}
		</>
	)
}
const HireButton = ({handleEmailClick} : { handleEmailClick: () => void }) => {
	return <button onClick={handleEmailClick} className='w-[100px] h-10 rounded-[10px] bg-gray text-sm font-semibold text-white cursor-pointer transition duration-300 ease-in-out select-none border-none active:transform active:translate-y-[2px] active:animate-pulse active:duration-300' aria-label="hire me button">Hire Me!</button>
}

export default Header;
