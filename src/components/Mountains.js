import React from "react";
import mountains from "../images/mountains.png";
import dark from "../images/dark.png";

const Mountains = () => {
    return (
        <div className="grid grid-cols-2 relative pt-12">
            <div className="w-full absolute bottom-0 opacity-0 hover:opacity-100 delay-500 duration-1000 z-10" style={{ left: "48.5%" }}>
                <img src={dark} alt="dark" className="w-10" />
            </div>
            <div>
                <img src={mountains} alt="Mountains" />
            </div>
            <div>
                <img src={mountains} alt="Mountains" id="flip" />
            </div>
        </div>
    )
}

export default Mountains;
