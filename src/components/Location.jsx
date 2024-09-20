import MapChart from "./common/MapChart";

function Location({ SvgExit, ToggleLocation, openLocation, references, listLanguages }) {



    return (
        <div
            className={`${openLocation ? 'position-absolute bottom-0 left-0 w-55 h-100vh bg-darkBlue z-index-2000 transition-1s-in-out' : 'position-absolute bottom-0 left--100 w-55 h-100vh bg-darkBlue z-index-1000 transition-1s-in-out'}`}>

            <div
                className="position-relative w-100 h-100 d-flex c-white">

                <div
                    className={openLocation ? 'position-absolute left-0 top-0 w-55 h-70 p-2rem opacity-1 bg-darkBlue transition-1s-in-out' : 'position-absolute left-0 top-0 w-55 h-70 p-2rem opacity-0 bg-darkBlue transition-1s-in-out'}>
                    <div
                        className="w-100 h-20 d-flex align-items-center p-1rem">

                        <span
                            onClick={ToggleLocation}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={SvgExit.size}
                                height={SvgExit.size}
                                fill={SvgExit.fill}
                                className={SvgExit.className}
                                viewBox="0 0 16 16">
                                <path
                                    d={SvgExit.d} />
                            </svg>
                        </span>
                    </div>
                    <div
                        className="p-1rem">
                        <p
                            className="fs-3rem">
                            <strong>
                                Alessio
                            </strong>
                            Caringella
                        </p>
                        <ul
                            className="list-style-none pb-3rem">
                            <span
                                className="pb-3rem d-b">Luxembourg, Luxembourg</span>
                            {references.map((item) => (
                                <li
                                    key={item.key}
                                    className="pb-1-5rem d-flex align-items-center gap1rem">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="white"
                                            className={item.className}
                                            viewBox="0 0 16 16">
                                            <path
                                                d={item.d} />
                                            <path
                                                d={item.d2} />
                                        </svg>
                                    </span>
                                    <span>
                                        {item.contentTxt}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <ul
                            className="list-style-none">
                            <li
                                className="pb-1-5rem d-flex align-items-center gap1rem">

                                {listLanguages.map((item) => (
                                    <span
                                        key={item.key}
                                        className="w-60px h-60px radius-circle overflow-hidden">
                                        <img
                                            className="w-100 h-100 obj-fit-cover obj-position-center"
                                            src={item.src}
                                            alt={item.alt} />
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
                <MapChart></MapChart>
            </div>
        </div>


    )
}




export default Location;