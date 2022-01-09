import React from 'react'
import './Loader.css'
import ClipLoader from "react-spinners/FadeLoader";
function Loader() {
    return (
        <div className="loader">
            <ClipLoader color={"#29DB9B"} loading={true} size={50} />
        </div>
    )
}

export default Loader
