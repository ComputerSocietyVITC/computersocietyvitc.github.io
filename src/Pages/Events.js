import React from 'react'

import storefront from "../images/storefront.svg";
import down from "../images/down.png"

const Events = () => {
    return (
        <div>
           <div className="grid grid-cols-2">
        <div className="ml-40 mt-28">
        <h1 className="text-5xl text-left">
          <span className="text-comsocgreen">Our</span> Events
        </h1>
          <div className="mt-8 font text-2xl text-left text-opacity-50 ">
          We are working on a few funded high-level projects in collaboration with various organisations to help the students gain industrial exposure and also get interesting internship opportunities.
          </div>
        </div>
        <div className="flex justify-center">
          <img src={storefront} className="w-9/12 h-9/12" alt="" />
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={down}
          alt="down arrow"
          className="w-14 h-14 items-center m-4"
        />
      </div>
        </div>
    )
}

export default Events
