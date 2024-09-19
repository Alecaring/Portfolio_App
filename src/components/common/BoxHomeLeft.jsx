import { Link } from "react-router-dom";



function BoxContainLeft({ closedMenuBtnElemRef, handleMenuToggle }) {
    return (
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
                    <div>
                    <h1 className="BoxLeftTopSection_h1">A Developement Studio</h1>
                    <h2 className="BoxLeftTopSection_h2">Devoted To Making The Most.</h2>
                    </div>
                    <h3 className="BoxLeftTopSection_h3"><span>Directed by :</span> <br /> <strong>Alessio </strong>Caringella - Developer</h3>
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
                        <li>
                            <span className="BoxLeftBottom_right_ul_span">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default BoxContainLeft;