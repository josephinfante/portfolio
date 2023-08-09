import ProfilePicture from '../assets/profile-picture.webp';
import ProfilePictureSmall from '../assets/profile-picture-small.webp';
import { Icons } from '../helpers/icons';
import { handleEmailClick } from '../helpers/send-email';

function Home() {
    return (
        <div id="home" className='flex flex-col-reverse justify-center items-center lg:flex-row h-screen lg:justify-between'>
            <div>
                <h1 className='text-2xl text-center lg:text-5xl lg:text-left mt-3 lg:mt-0'>HI 👋! <span className='font-bold'>I’m Joseph</span>. A<br />
                    <span className='font-semibold'>FULL-STACK DEVELOPER</span><br />
                    BASED IN <span className='font-semibold'>LIMA, PERÚ 🇵🇪</span></h1>
                <p className='my-12 text-center lg:text-left'>I have been developing apps for the past 3 years.</p>
                <div className='flex items-center my-12 justify-center lg:justify-start'>
                    <button onClick={handleEmailClick} className='w-[150px] h-10 bg-primary rounded-[10px] text-white text-sm font-semibold cursor-pointer transition duration-300 ease-in-out select-none border-none active:transform active:translate-y-[2px] active:animate-pulse active:duration-300 mr-3 hover:bg-hoverPrimary dark:bg-primaryLight dark:hover:bg-hoverPrimaryLight' aria-label='contact me button'>CONTACT ME</button>
                    <a href='https://www.linkedin.com/in/joseph-infante-279a1723b/' target='_blank' className='text-primary mx-3 hover:text-hoverPrimary dark:text-primaryLight dark:hover:text-hoverPrimaryLight' aria-label='Link to take you to my linkedin profile'>{Icons('linkedin')}</a>
                    <a href='https://github.com/josephinfante' target='_blank' className='text-primary mx-3 hover:text-hoverPrimary dark:text-primaryLight dark:hover:text-hoverPrimaryLight' aria-label='Link to take you to my github profile'>{Icons('github')}</a>
                </div>
                <div className='flex items-center justify-center lg:justify-start'>
                    <div className='mr-3'>{Icons('mongodb')}</div>
                    <div className='mx-3'>{Icons('nodejs')}</div>
                    <div className='mx-3'>{Icons('typescript')}</div>
                    <div className='mx-3'>{Icons('react')}</div>
                    <div className='mx-3'>{Icons('ionic')}</div>
                    <div className='mx-3'>{Icons('angular')}</div>
                    <div className='ml-3'>{Icons('tailwind')}</div>
                </div>
            </div>
            <div className='lg:w-[300px] lg:h-[300px]'>
                <img src={ProfilePicture} srcSet={`${ProfilePictureSmall} 640w, ${ProfilePicture} 1024w`} sizes='100vw' alt="profile-picture" width={'100%'} height={'100%'} className='profile-picture'/>
            </div>
        </div>
    );
}

export default Home;