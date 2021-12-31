import React from 'react'
import blogging from "../images/blogging.png";
//import down from "../images/down.png"

const Blogs = () => {
  return (
    <div className="h-full pt-32 mb-28">
      <div className="grid grid-cols-2 gap-2">
        <div className="sm:ml-40 mt-44">
          <h1 className="text-6xl text-left"><span className="text-comsocgreen">Our</span> Blogs</h1>
          <p className="text-2xl text-left mt-6">Coming Soon...</p>
        </div>
        <div>
          <img src={blogging} className="ml-32 w-4/6 pt-20" alt="Events Image"></img>
        </div>
      </div>
      {/* <div className="flex justify-center mt-16">
        <img
          onClick={() => prRef.current.scrollIntoView({ behavior: "smooth" })}
          src={down}
          alt="down arrow"
          className="w-12 h-12 items-center m-4"
        />
      </div> */}
    </div>
  )
}

export default Blogs
