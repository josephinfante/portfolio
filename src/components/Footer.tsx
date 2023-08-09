import { Icons } from "../helpers/icons";
import { handleEmailClick } from "../helpers/send-email";

type FooterProps = {
}

const Footer: React.FC<FooterProps>  = ({}) => {
	const getYear = () => {
		return new Date().getFullYear();
	};
	return (
		<footer>
			<div className="relative flex flex-col items-center justify-center py-8">
				<p className="text-sm">© {getYear()} <span className="font-semibold">Joseph Infante</span>. All rights reserved.</p>
				<p className="text-sm">Made with <span className="text-red-500">❤</span> using React and TailwindCSS</p>
				<button className="absolute right-0 bg-primary dark:bg-primaryLight w-[25px] h-[25px] p-4 rounded-full flex items-center justify-center shadow-lg animate-jump" aria-label="Take you to the top" onClick={() => location.href="#home"}><span className="text-white">{Icons('chev-up')}</span></button>
				<div className='flex items-center mt-3 justify-center'>
					<button onClick={handleEmailClick} className='text-primary mx-3 hover:text-hoverPrimary dark:text-primaryLight dark:hover:text-hoverPrimaryLight' aria-label='contact me button'>{Icons('mail')}</button>
                    <a href='https://www.linkedin.com/in/joseph-infante-279a1723b/' target='_blank' className='text-primary mx-3 hover:text-hoverPrimary dark:text-primaryLight dark:hover:text-hoverPrimaryLight' aria-label='Link to take you to my linkedin profile'>{Icons('linkedin')}</a>
                    <a href='https://github.com/josephinfante' target='_blank' className='text-primary mx-3 hover:text-hoverPrimary dark:text-primaryLight dark:hover:text-hoverPrimaryLight' aria-label='Link to take you to my github profile'>{Icons('github')}</a>
                </div>
			</div>
		</footer>
	);
};

export default Footer;
