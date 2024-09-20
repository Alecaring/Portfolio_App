function Studio ({ closedMenuBtnElemRef, handleMenuToggle, closedMenu }) {
    return (
<div className={`${closedMenu ? ' showStudio' : ' noneStudio'}`}>
                <div className="StudiotopContWhereX">
                    <span ref={closedMenuBtnElemRef} onClick={handleMenuToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="White" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                        </svg>
                    </span>
                </div>
                <div className="cerificate">
                    <h2>Certificated <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgba(60, 130, 246, 1)" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg></span></h2>
                    <ul>
                        <li>
                            <img src="/php_logo.png" alt="" />
                        </li>
                        <li>
                            <img src="/JavaScript.png" alt="" />
                        </li>
                        <li>
                            <img src="/TypeScript.png" alt="" />
                        </li>
                        <li>
                            <img src="/react_logo.png" alt="" />
                        </li>
                        <li>
                            <img src="/vue_logo.png" alt="" />
                        </li>
                        <li>
                            <img src="/Bootstrap.png" alt="" />
                        </li>
                        <li>
                            <img src="/HTML5.png" alt="" />
                        </li>
                        <li>
                            <img src="/react_native_logo.png" alt="" />
                        </li>
                        <li>
                            <img src="/Git.png" alt="" />
                        </li>
                        <li>
                            <img src="/laravel_logo.png" alt="" />
                        </li>
                        <li>
                            <img src="/Vite_logo.png" alt="" />
                        </li>
                        <li>
                            <img src="/GitHub.svg" alt="" />
                        </li>
                        <li>
                            <img src="/NPM.png" alt="" />
                        </li>
                        <li>
                            <img src="/Composer.png" alt="" />
                        </li>
                        <li>
                            <img src="/Postman.png" alt="" />
                        </li>
                        <li>
                            <img src="/CSS3.png" alt="" />
                        </li>
                        <li>
                            <img src="/Sass.png" alt="" />
                        </li>
                        <li>
                            <img src="/MySQL.png" alt="" />
                        </li>
                        <li>
                            <img src="/VisualStudioCode.png" alt="" />
                        </li>
                        <li>
                            <img src="/Canva.png" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Studio;