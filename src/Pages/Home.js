import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Mountains from "../components/Mountains";


const Home = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      handleVisibleButton();
    }
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleVisibleButton = () => {
    const position = window.pageYOffset;

    if (position > 400) {
      return setVisible("goTop");
    } else {
      return setVisible("goTopHidden");
    }
  };

  return (
    <div>
      <div>
        <div onClick={handleScrollUp} className={"bottom-12 right-14 fixed z-20" + (visible === "goTop" ? " block" : " hidden")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="#29DB9B">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
        </div>
      </div>
      <div className="h-5/6">
        <div className="font-catamaran text-left mx-4 lg:mx-28 mt-20 text-black relative" id="outlinetext">
          <h1 className="mb-6">We are</h1>
          <h1 className="mb-6">IEEE Computer Society</h1>
          <h1>VIT Chennai</h1>
        </div>
        <div className="font-sans text-left mx-6 lg:mx-32 mt-20 text-6xl lg:text-8xl font-black text-white">
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
        <div className="font-sans text-right mx-4 lg:mx-40 mt-52 text-6xl lg:text-8xl font-black text-white">
          About Us
          <div class="h-3 w-28 rounded-md ml-auto bg-gradient-to-r from-color1 to-color2"></div>
          <h1 className="font-montserrat text-2xl lg:text-4xl text-white my-16 lg:my-24 lg:ml-36 lg:leading-custom">
            IEEE Computer Society VIT Chennai is a zealous community of diverse minds striving to Learn, Create, (sometimes Break!), Develop, and Explore.
Here we combine an infectious desire to grow together, and a stubborn persistence to keep going, with a healthy ambition for the next audacious challenge.
Come join us on this journey!
          </h1>
        </div>
      </div>
      <div className="h-screen">
        <div className="font-sans text-left mx-4 lg:mx-40 pt-28 text-6xl lg:text-8xl font-black text-white">
          Our Vision
          <div class="h-3 w-40 rounded-md mr-auto ml-32 lg:ml-72 bg-gradient-to-r from-color1 to-color2"></div>
          <h1 className="font-montserrat text-2xl lg:text-4xl text-white my-16 lg:my-24 lg:mr-36 lg:leading-custom">
            We think slightly out of the box, we believe that a club’s resources must not only be channeled into conducting events but also to propagate learning and teaching, symbiotically.
            <br /><br />That said, we conduct two flagship events, namely, HackHub and Paradox, and tons of insightful workshops!
          </h1>
        </div>
      </div>
      <div className="h-5/6">
        <div className="font-sans text-center mx-4 lg:mx-40 lg:pt-12 text-5xl lg:text-7xl font-black text-white">
          Newsletter
          <div class="h-3 w-40 rounded-md ml-auto bg-gradient-to-r from-color1 to-color2" id="newsletterline"></div>
          <div className="text-xl flex justify-center">
            <p className="font-montserrat text-2xl lg:text-3xl text-white ml-auto mr-auto mt-12 px-2 lg:px-72 text-center lg:leading-custom">
              Want to stay updated with the latest news about IEEE CS VITC? Enter you email address and allow notifications.
            </p>
          </div>
          <div>
            <input
              className="mt-12 pl-8 bg-gray-800 backdrop-opacity-20 lg:w-1/2 h-16 lg:h-20 rounded-3xl border-0 text-2xl lg:text-3xl"
              placeholder="Enter your email"
              type="text"
            />
          </div>
          <div className="bg-gradient-to-r from-color1 to-color2 px-12 py-4 ml-auto mr-auto mt-16 text-2xl lg:text-4xl text-white w-4/5 lg:w-1/4 shadow-xl hover:shadow-md hover:from-comsocgreen" style={{ borderRadius: "50px" }}>
            <Link to="/">Subscribe</Link>
          </div>
        </div>
      </div>
      <Mountains />
    </div >
  );
};

export default Home;
