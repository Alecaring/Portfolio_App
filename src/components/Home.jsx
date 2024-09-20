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


            <Studio closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} closedMenu={closedMenu} />


            <BoxContainRight ToggleLocation={ToggleLocation} />
            <BoxContainLeft closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} />


        </div>
    );
}

export default Home;