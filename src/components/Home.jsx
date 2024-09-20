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
        <div className="containerWindow">


            <Location ToggleLocation={ToggleLocation} openLocation={openLocation}></Location>


            <div id="menuToHide" className={`${showBannerBlack ? ' showBannerBlack' : ' noneBannerBlack'}`}></div>


            <Studio closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} closedMenu={closedMenu} />


            <BoxContainRight ToggleLocation={ToggleLocation} />
            <BoxContainLeft closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} />


        </div>
    );
}

export default Home;