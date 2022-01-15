import React from 'react'
import './Loader.css'
import RingLoader from "react-spinners/RingLoader";
function Loader() {
    return (
        <div className="loader">
            <RingLoader color={"#29DB9B"} loading={true} size={100} />
        </div>
    )
}

export default Loader
