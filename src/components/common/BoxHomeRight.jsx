function BoxContainRight({ ToggleLocation }) {
    return (
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
    )
}

export default BoxContainRight;