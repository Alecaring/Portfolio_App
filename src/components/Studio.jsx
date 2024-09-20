function Studio({ closedMenuBtnElemRef, handleMenuToggle, closedMenu, logos }) {

    

    return (
        <div className={`${closedMenu ? 'position-absolute right-0 w-45 h-100 transition-1s-in-out bg-darkBlue z-index-1000 overflow-auto' : 'overflow-auto position-absolute right--100 w-45 h-100 transition-1s-in-out z-index-1000'}`}>
            <div className="w-100 h-20 d-flex align-items-center justify-content-end p-3rem">
                <span ref={closedMenuBtnElemRef} onClick={handleMenuToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="White" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                </span>
            </div>
            <div className="w-100 c-white py-2rem">
                <h2 className="fs-3rem px-1rem pb-3rem">Certificated <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgba(60, 130, 246, 1)" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg></span></h2>
                <ul className="w-100 list-style-none d-flex flex-wrap gap1rem">
                    {logos.map((item) => (
                        <li className="w-calc-max-5 h-15vh d-flex align-items-center justify-content-center bg-black radius-2rem">
                            <img className="w-80 h-80 obj-fit-contain" src={item.path} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Studio;