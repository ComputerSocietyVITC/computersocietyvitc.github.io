import React from "react";

import robotAnimation from "../images/chatbot.svg";
import ieeeLogo from "../images/comsocLogowhite.png";
import down from "../images/down.png"

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="ml-40 mt-28">
          <img src={ieeeLogo} className="w-96 h-34" alt="" />
          <div className="mt-8 font text-2xl text-left text-opacity-50 ">
            At IEEE Computer Society VIT Chennai, our aim is to learn and teach.
            Developers, designers and managers come together under one roof to
            create a community which inspires thousands. Join Us!
          </div>
        </div>
        <div>
          <img src={robotAnimation} className="" alt="" />
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={down}
          alt="down arrow"
          className="w-14 h-14 items-center m-4"
        />
      </div>

      <div className="my-10">
        <h1 className="text-5xl">
          <span className="text-comsocgreen">Our</span> Vision
        </h1>
        <div className="mt-6 text-2xl flex justify-center">
          <p className="w-2/4 whitespace-pre-wrap">
            Our Vision We think slightly out of the box, we believe that a
            club’s resources must not only be channeled into conducting events
            but also to propagate learning and teaching, symbiotically.

            That said, we conduct two flagship events, namely, HackHub and
            Paradox, and tons of insightful workshops!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
