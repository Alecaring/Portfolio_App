import { useRef, useState } from "react";
import videoSrc from '../assets/banner_portfolio.mp4';
import { Link } from 'react-router-dom';
import Location from "./Location";
import BoxContainRight from "./common/BoxHomeRight";
import BoxContainLeft from "./common/BoxHomeLeft";



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


            <div className={`${closedMenu ? ' showStudio' : ' noneStudio'}`}>
                <div className="StudiotopContWhereX">
                    <span ref={closedMenuBtnElemRef} onClick={handleMenuToggle} className="boxContainLeft_menu_topSec_btn">
                        X
                    </span>
                </div>
            </div>


            <BoxContainRight ToggleLocation={ToggleLocation} />
            <BoxContainLeft closedMenuBtnElemRef={closedMenuBtnElemRef} handleMenuToggle={handleMenuToggle} />


        </div>
    );
}

export default Home;