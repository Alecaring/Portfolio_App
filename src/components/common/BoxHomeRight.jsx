import { Link } from "react-router-dom";

function BoxContainRight({ ToggleLocation }) {
    return (
        <div className="c-white h-100 w-55">
            <div className="h-80 w-40">
                <p className="h-calc-max-3 d-flex align-items-center justify-content-center fs-17rem fw-500">5</p>
                <p className="h-calc-max-3 d-flex align-items-center justify-content-center fs-17rem fw-500">0</p>
                <p className="h-calc-max-3 d-flex align-items-center justify-content-center fs-17rem fw-500 c-orange rotate-90deg">K</p>
            </div>
            <div className="w-100 h-20 d-flex">
                <div className="h-100 w-40">
                    <ul className="list-style-none h-100 w-100 p-2rem letter-spacing-1px d-flex align-items-end justify-content-between">
                        <li onClick={ToggleLocation} className="c-grey">LOCATIONS</li>
                        <li>TO & CPH</li>
                    </ul>
                </div>
                <div className="position-relative w-60 h-100">
                    <ul className="list-style-none h-100 w-100 p-2rem letter-spacing-1px d-flex align-items-end justify-content-end">
                        <Link to={'/services'}>
                        <li className="c-grey">SERVICES</li>
                        </Link>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default BoxContainRight;