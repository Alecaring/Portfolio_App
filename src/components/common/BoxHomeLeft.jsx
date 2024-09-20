import { Link } from "react-router-dom";



function BoxContainLeft({ closedMenuBtnElemRef, handleMenuToggle }) {
    return (
        <div className="h-100 w-45">
            <div className="w-100 h-70">
                <header className="w-100 p-2rem">
                    <ul className="d-flex justify-content-between list-style-none">
                        <Link to="/work">
                            <li className="d-flex align-items-center gap1-5rem">
                                <span className="h-15px w-15px display-i-b radius-circle border-4px-white"></span>
                                <p className="c-white fs1-6rem">Work</p>
                            </li>
                        </Link>
                        <li ref={closedMenuBtnElemRef} onClick={handleMenuToggle} className="d-flex align-items-center gap1-5rem">
                            <span className="h-15px w-15px display-i-b radius-circle border-4px-white"></span>
                            <p className="c-white fs1-6rem">Studio</p>
                        </li>
                    </ul>
                </header>

                <section className="w-100 p-2rem c-white h-70vh d-flex flex-column justify-content-center gap2rem">
                    <div>
                        <h1 className="fs3-5rem fw-400 pt-5rem c-lightGrey">A Developement Studio</h1>
                        <h2 className="fs2-5rem fw-400">Devoted To Making The Most.</h2>
                    </div>
                    <h3 className="fs2-5rem fw-300 pb-15rem c-lightViolet"><span>Directed by :</span> <br /> <strong>Alessio </strong>Caringella - Developer</h3>
                </section>

            </div>
            <div className="w-100 h-30 c-white d-flex align-items-end">
                <section className="w-50">
                    <ul className="w-100 h-100 p-2rem list-style-none d-flex flex-column justify-content-end align-items-start fw-100 letter-spacing-1px gap0-5rem">
                        <li>SPRINTS</li>
                        <li>BRANDING</li>
                        <li>DIGITAL EXPERIENCES</li>
                        <li>PRODUCT DESIGN</li>
                    </ul>
                </section>
                <section className="w-50">
                    <ul className="w-100 h-100 p-2rem list-style-none d-flex justify-content-end align-items-center letter-spacing-1px fw-100 gap0-7rem">
                        <li>CONTACT</li>
                        <li>
                            <span className="d-b py0-3rem px0-3rem h-100 w-100 bg-orange radius-2rem">
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