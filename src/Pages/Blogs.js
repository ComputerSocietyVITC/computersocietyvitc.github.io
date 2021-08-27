import React from 'react'
import blogging from "../images/blogging.png";
//import down from "../images/down.png"

const Blogs = () => {
    return (
        <div className="mb-40">
           <div className="grid grid-cols-2">
        <div className="ml-40 mt-56">
        <h1 className="text-5xl text-left">
          <span className="text-comsocgreen">Our</span> Blogs
        </h1>
          <div className="mt-8 font text-2xl text-left text-opacity-50 ">
          Coming Soon...
          </div>
        </div>
        <div className="flex justify-center mt-24">
          <img src={blogging} className="w-9/12 h-9/12" alt="" />
        </div>
      </div>

      {/* <div className="flex justify-center">
        <img
          src={down}
          alt="down arrow"
          className="w-14 h-14 items-center m-4"
        />
      </div> */}
        </div>
    )
}

export default Blogs
