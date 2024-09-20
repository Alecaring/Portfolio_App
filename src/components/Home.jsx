import { useRef, useState } from "react";
import videoSrc from '../assets/banner_portfolio.mp4';
import { Link } from 'react-router-dom';
import Location from "./Location";
import BoxContainRight from "./common/BoxHomeRight";
import BoxContainLeft from "./common/BoxHomeLeft";
import Studio from "./Studio";



function Home() {
    const [closedMenu, setClosedMenu] = useState(false);
    const [showBannerBlack, setShowBannerBlack] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    const closedMenuBtnElemRef = useRef(null);

    const logos = [
        {
            path: '/php_logo.png',
            alt: 'php logo',
        },
        {
            path: '/JavaScript.png',
            alt: 'JavaScript logo',
        },
        {
            path: '/TypeScript.png',
            alt: 'TypeScript logo',
        },
        {
            path: '/react_logo.png',
            alt: 'React logo',
        },
        {
            path: '/vue_logo.png',
            alt: 'Vue logo',
        },
        {
            path: '/Bootstrap.png',
            alt: 'Bootstrap logo',
        },
        {
            path: '/HTML5.png',
            alt: 'HTML5 logo',
        },
        {
            path: '/react_native_logo.png',
            alt: 'React Native logo',
        },
        {
            path: '/Git.png',
            alt: 'Git logo',
        },
        {
            path: '/laravel_logo.png',
            alt: 'Laravel logo',
        },
        {
            path: '/Vite_logo.png',
            alt: 'Vite logo',
        },
        {
            path: '/GitHub.svg',
            alt: 'GitHub logo',
        },
        {
            path: '/NPM.png',
            alt: 'NPM logo',
        },
        {
            path: '/Composer.png',
            alt: 'Composer logo',
        },
        {
            path: '/Postman.png',
            alt: 'Postman logo',
        },
        {
            path: '/CSS3.png',
            alt: 'CSS3 logo',
        },
        {
            path: '/Sass.png',
            alt: 'Sass logo',
        },
        {
            path: '/MySQL.png',
            alt: 'MySQL logo',
        },
        {
            path: '/VisualStudioCode.png',
            alt: 'VisualStudioCode logo',
        },
        {
            path: '/Canva.png',
            alt: 'Canva logo',
        }
    ];

    const handleMenuToggle = () => {
        setClosedMenu(prevClosedMenu => !prevClosedMenu);
        setShowBannerBlack(prevShow => !prevShow);
    };

    const ToggleLocation = () => {
        setOpenLocation(prevOpenLocation => !prevOpenLocation);
        setShowBannerBlack(prevShow => !prevShow);
    };

    return (
        <div className="d-flex position-fixed right-0 top-0 left-0 bottom-0 z-index-100 w-100 h-100vh bg-darkBlue">


            <Location ToggleLocation={ToggleLocation} openLocation={openLocation}></Location>


            <div id="menuToHide" className={`${showBannerBlack ? 'position-fixed right-0 w-100 h-100 bg-lightBlack opacity-1 visibility-1 transition-1s-in-out pointer-event-all z-index-1000' : 'position-fixed right-0 w-100 h-100 bg-lightBlack opacity-0 visibility-0 transition-1s-in-out pointer-event-none z-index-1000'}`}></div>


            <Studio closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} closedMenu={closedMenu} logos={logos} />


            <BoxContainRight ToggleLocation={ToggleLocation} />
            <BoxContainLeft closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} />


        </div>
    );
}

export default Home;