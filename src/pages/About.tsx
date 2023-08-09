import MemojiLaptop from '../assets/memoji-laptop.webp';

function About() {
	const downloadResume = () => {
		const pdfPath = '/resume-english.pdf';
    	const link = document.createElement('a');
		link.href = pdfPath;
		link.download = 'josephinfante.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
    return (
        <div id="about" className="flex items-center justify-center h-screen flex-col relative">
            <div className="max-w-2xl">
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className="text-primary dark:text-primaryLight font-bold text-2xl">ABOUT ME</h2>
                    <button onClick={downloadResume} className="text-sm text-primary dark:hover:text-primaryLight hover:text-hoverPrimary dark:text-hoverPrimaryLight cursor-pointer font-semibold underline" aria-label='link to download resume'>Download my resume</button>
                </div>
                <p className="my-5">I'm a Full-stack developer based in Perú 🇵🇪 with experience in mobile and web development. I'm a self- taught person who likes to challenge himself, so I can improve my skills.</p>
                <p className="my-5">I'm a caffeine lover ☕, and I enjoy learning new technologies to implement them in my personal projects or at work. I also like to ride my bike 🏍 in my free times.</p>
            </div>
            <img src={MemojiLaptop} alt="memoji-profile" className="bottom-0 absolute" loading='lazy' width={300} height={250}/>
        </div>
    );
}

export default About;