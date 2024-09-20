function Studio({ closedMenuBtnElemRef, handleMenuToggle, closedMenu, logos, ceckTitle, SvgExit }) {

    

    return (
        <div className={`${closedMenu ? 'position-absolute right-0 w-45 h-100 transition-1s-in-out bg-darkBlue z-index-1000 overflow-auto' : 'overflow-auto position-absolute right--100 w-45 h-100 transition-1s-in-out z-index-1000'}`}>
            <div className="w-100 h-20 d-flex align-items-center justify-content-end p-3rem">
                <span ref={closedMenuBtnElemRef} onClick={handleMenuToggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={SvgExit.size}
                        height={SvgExit.size}
                        fill={SvgExit.fill}
                        className={SvgExit.className}
                        viewBox="0 0 16 16">
                        <path d={SvgExit.d} />
                    </svg>
                </span>
            </div>
            <div className="w-100 c-white py-2rem">
                <h2 className="fs-3rem px-1rem pb-3rem">{ceckTitle.title}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="rgba(60, 130, 246, 1)"
                            className={ceckTitle.classNameSvg}
                            viewBox="0 0 16 16">
                            <path
                                d={ceckTitle.d} />
                        </svg>
                    </span>
                </h2>
                <ul className="w-100 list-style-none d-flex flex-wrap gap1rem">
                    {logos.map((item) => (
                        <li key={item.key} className="w-calc-max-5 h-15vh d-flex align-items-center justify-content-center bg-black radius-2rem">
                            <img className="w-80 h-80 obj-fit-contain" src={item.path} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Studio;