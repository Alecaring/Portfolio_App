import { useRef, useState } from "react";
import videoSrc from '../assets/banner_portfolio.mp4';
import { Link } from 'react-router-dom';
import Location from "./Location";



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

            {/* lock */}
            <div className={`${openLocation ? 'showLocation' : 'noneLocation'}`}>
                <Location ToggleLocation={ToggleLocation} openLocation={openLocation}></Location>
            </div>
            {/* /lock */}

            <video autoPlay muted loop id="video">
                <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Layer nero al 100% */}
            <div id="menuToHide" className={`${showBannerBlack ? ' showBannerBlack' : ' noneBannerBlack'}`}></div>
            {/* Menu al 45% */}
            <div id="menu" className={`${closedMenu ? ' show' : ' none'}`}>
                <div className="boxContainLeft_menu_topSec">
                    <span ref={closedMenuBtnElemRef} onClick={handleMenuToggle} className="boxContainLeft_menu_topSec_btn">
                        X
                    </span>
                </div>
            </div>
            <div className="boxContainRight">
                <div className="boxContainRight_cont_header">
                    <p className="boxContainRight_cont_header_p_common">5</p>
                    <p className="boxContainRight_cont_header_p_common">0</p>
                    <p className="boxContainRight_cont_header_p_common boxContainRight_cont_header_p_common_rotate">K</p>
                </div>
                <div className="boxContainRight_cont_bottom">
                    <div className="boxContainRight_cont_bottom_left">
                        <ul className="boxContainRight_cont_bottom_left_ul">
                            <li onClick={ToggleLocation} className="boxContainRight_cont_bottom_left_ul_gray">LOCATIONS</li>
                            <li>TO & CPH</li>
                        </ul>
                    </div>
                    <div className="boxContainRight_cont_bottom_right">
                        <ul className="boxContainRight_cont_bottom_right_ul">
                            <li className="boxContainRight_cont_bottom_left_ul_gray">SERVICES</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="boxContainLeft">
                <div className="BoxLeftTop">
                    <header className="BoxLeftTopHeader">
                        <ul className="BoxLeftTopHeader_ul">
                            <Link to="/work">
                                <li className="BoxLeftTopHeader_ul_li">
                                    <span className="circle"></span>
                                    <p className="BoxLeftTopHeader_ul_li_p">Work</p>
                                </li>
                            </Link>
                            <li ref={closedMenuBtnElemRef} onClick={handleMenuToggle} className="BoxLeftTopHeader_ul_li">
                                <span className="circle"></span>
                                <p className="BoxLeftTopHeader_ul_li_p">Studio</p>
                            </li>
                        </ul>
                    </header>
                    <section className="BoxLeftTopSection">
                        <h1 className="BoxLeftTopSection_h1">A Developement Studio</h1>
                        <h2 className="BoxLeftTopSection_h2">Devoted To Making The Most.</h2>
                        <h3 className="BoxLeftTopSection_h3">Memorable Experiences <br /> Alessio Antonio Caringella</h3>
                    </section>
                </div>
                <div className="BoxLeftBottom">
                    <section className="BoxLeftBottom_left">
                        <ul className="BoxLeftBottom_left_ul">
                            <li>SPRINTS</li>
                            <li>BRANDING</li>
                            <li>DIGITAL EXPERIENCES</li>
                            <li>PRODUCT DESIGN</li>
                        </ul>
                    </section>
                    <section className="BoxLeftBottom_right">
                        <ul className="BoxLeftBottom_right_ul">
                            <li>CONTACT</li>
                            <li><span className="BoxLeftBottom_right_ul_span">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </span></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;