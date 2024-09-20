import { Link } from "react-router-dom";

function TopNavGoHome() {
    return (
        <div className="topNavigateCont position-fixed w-100 h-15vh top-0 left-0 z-index-5000 d-flex align-items-center justify-content-between px-3rem">
            <Link className="d-flex align-items-center" to={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                <span className="ps-1rem c-white fs-2rem fw-100">Home</span>
            </Link>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="transparent" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
            </span>
        </div>
    )
}

export default TopNavGoHome;