import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import mountains from "../images/mountains.png";

const Home = () => {



  return (
    <div id="starrybg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="h-5/6">
        <div className="font-catamaran text-left mx-28 mt-52 text-black" id="outlinetext">
          <h1 className="mb-6">We are</h1>
          <h1 className="mb-6">IEEE Computer Society</h1>
          <h1>VIT Chennai</h1>
        </div>
        <div className="font-sans text-left mx-32 mt-24 text-8xl font-black text-white">
          <Typewriter
            options={{
              autoStart: true,
              loop: true
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Discover.')
                .pauseFor(1000)
                .deleteChars(8)
                .typeString('evelop.')
                .pauseFor(1000)
                .deleteChars(7)
                .typeString('eploy.')
                .pauseFor(1000)
                .deleteChars(6)
                .start();
            }} />
        </div>
      </div>
      <div className="h-5/6">
        <div className="font-sans text-right mx-40 mt-52 text-8xl font-black text-white">
          About Us
          <div class="h-3 w-28 rounded-md ml-auto bg-gradient-to-r from-color1 to-color2"></div>
          <h1 className="font-montserrat text-4xl text-white my-24 ml-52 pl-48" style={{ lineHeight: "50px" }}>
            At IEEE Computer Society VIT Chennai, our aim is to learn and teach. Developers, designers and managers come together under one roof to create a community which inspires thousands. Join Us!
          </h1>
        </div>
      </div>
      <div className="h-screen">
        <div className="font-sans text-left mx-40 pt-24 text-8xl font-black text-white">
          Our Vision
          <div class="h-3 w-40 rounded-md mr-auto ml-72 bg-gradient-to-r from-color1 to-color2"></div>
          <h1 className="font-montserrat text-4xl text-white my-24 mr-52 pr-48" style={{ lineHeight: "50px" }}>
            We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.
            <br /><br />That said, we conduct two flagship events, namely, HackHub and Paradox, and tons of insightful workshops!
          </h1>
        </div>
      </div>
      <div className="h-5/6">
        <div className="font-sans text-center mx-40 text-8xl font-black text-white">
          Newsletter
          <div class="h-3 w-40 rounded-md ml-auto bg-gradient-to-r from-color1 to-color2" style={{ marginRight: "29rem" }}></div>
          <div className="text-2xl flex justify-center">
            <p className="font-montserrat text-4xl text-white ml-auto mr-auto mt-20 px-80 text-center" style={{ lineHeight: "50px" }}>
              Want to stay updated with the latest news about IEEE CS VITC? Enter you email address and allow notifications.
            </p>
          </div>
          <div>
            <input
              className="mt-16 pl-8 bg-gray-800 backdrop-opacity-20 w-3/5 h-24 rounded-3xl border-0 text-4xl"
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <div className="bg-gradient-to-r from-color1 to-color2 px-12 py-4 ml-auto mr-auto mt-16 text-6xl text-white w-1/3 shadow-xl hover:shadow-md" style={{ borderRadius: "50px" }}>
            <Link to="/">Subscribe</Link>
          </div>
        </div>
      </div>
      <div className="h-2/3">
        <img src={mountains} alt="Mountains" className="w-full" />
      </div>
    </div >
  );
};

export default Home;
