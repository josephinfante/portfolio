import { Icons } from "../helpers/icons";
import EquiklyDestop from '../assets/equikly-desktop.webp'
import EquiklyMobile from '../assets/equikly-mobile.webp'
import EquiklyDesktopDark from '../assets/equikly-desktop-dark.webp'
import EquiklyMobileDark from '../assets/equikly-mobile-dark.webp'

function Equikly() {
    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <div className="max-w-2xl">
                <h2 className="text-primary dark:text-primaryLight font-bold text-2xl mb-5 text-center">EQUIKLY</h2>
                <div className="flex items-center justify-center dark:hidden">
                    <img src={EquiklyDestop} alt="equikly-desktop-light" loading="lazy" width={500} height={270}/>
                    <img src={EquiklyMobile} alt="equikly-mobile-light" className="hidden lg:block" loading="lazy" width={125} height={270}/>
                </div>
                <div className="items-center justify-center hidden dark:flex">
                    <img src={EquiklyDesktopDark} alt="equikly-desktop-dark" loading="lazy" width={500} height={270}/>
                    <img src={EquiklyMobileDark} alt="equikly-mobile-dark" className="hidden lg:block" loading="lazy" width={125} height={270}/>
                </div>
                <p className="my-5 text-center lg:text-left">EQUIKLY is an online scrapper tool, that helps people to get the reviews from AliExpress, and allowing them to download those reviews as a CSV file. Currently is free to use, but it will have a subscription plan.</p>
                <a href="https://www.equikly.com" target="_blank" className="flex items-center justify-center text-sm text-primary dark:hover:text-primaryLight hover:text-hoverPrimary dark:text-hoverPrimaryLight cursor-pointer my-5 underline" aria-label="Link to take you to the equikly app">View page <span className="ml-3">{Icons('share')}</span></a>
                <div className='flex items-center my-5 justify-center'>
                    <div className='mr-3'>{Icons('react')}</div>
                    <div className='mx-3'>{Icons('tailwind')}</div>
                    <div className='mx-3'>{Icons('nextjs')}</div>
                    <div className='mx-3'>{Icons('nodejs')}</div>
                    <div className='ml-3'>{Icons('mongodb')}</div>
                </div>
            </div>
        </div>
    );
}

export default Equikly