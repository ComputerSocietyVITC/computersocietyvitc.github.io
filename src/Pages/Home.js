import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import Mountains from "../components/Mountains";
import { supabase } from '../supabaseClient'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.getElementById("starrybg").style.background = "linear-gradient(180deg, rgba(23, 23, 23, 0) 6.68%, rgba(52, 80, 154, 0.29) 64.84%, rgba(151, 169, 204, 0.439818) 81.37%, rgba(255, 255, 255, 0.45) 98.87%)";
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')

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

  const submitEmail = async (e) => {
    e.preventDefault();
    document.getElementById("newsletterform").reset();
    const { data, error } = await supabase
      .from('Newsletter')
      .insert([
        { email: email }
      ])
    if (data) {
      toast.success("Email ID Submitted!", {
        theme: "dark"
      })
    }
  }

  return (
    <div>
      {loading ? <Loader /> :
        (<div>
          <ToastContainer
            position="top-right"
            autoClose={2500}
          />
          <div>
            <div onClick={handleScrollUp} className={"bottom-10 right-12 hidden fixed z-20" + (visible === "goTop" ? " md:block" : " hidden")}>
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
            <div className="font-sans text-right mx-4 lg:mx-40 mt-52 text-5xl lg:text-7xl font-black text-white">
              <div className="inline-block">
                About Us
                <div class="h-2 md:h-3 rounded-md bg-gradient-to-r from-color1 to-color2"></div>
              </div>
              <h1 className="font-montserrat font-normal md:font-bold text-2xl lg:text-3xl text-white my-16 lg:my-24 lg:ml-36 lg:leading-custom">
                IEEE Computer Society VIT Chennai is a zealous community of diverse minds striving to Learn, Create (sometimes Break!), Develop, and Explore.
                Here we combine an infectious desire to grow together, and a stubborn persistence to keep going, with a healthy ambition for the next audacious challenge.
                Come join us on this journey!
              </h1>
            </div>
          </div>
          <div className="h-4/6">
            <div className="font-sans text-left mx-4 lg:mx-40 pt-8 text-5xl lg:text-7xl font-black text-white">
              <div className="inline-block">
                Our Vision
                <div class="h-2 md:h-3 rounded-md bg-gradient-to-r from-color1 to-color2"></div>
              </div>
              <h1 className="font-montserrat font-normal md:font-bold text-2xl lg:text-3xl text-white my-16 lg:my-24 lg:mr-36 lg:leading-custom">
                At IEEE Computer Society VITC, our belief is grounded in the principles of mutual learning and growth.
                <br />
                We believe in empowering the community to innovate, develop, create, and to empower itself, which for us is, the greatest Return on Investment for a Technical Society.
                <br />
                With a transcendent passion for Tech, and a solemn cognizance of people's struggles, we aspire to solve the great problems of today, and prepare together for a brighter tomorrow.
              </h1>
            </div>
          </div>
          <div className="h-5/6">
            <div className="font-sans text-center mx-4 lg:mx-40 pt-6 lg:pt-10 text-5xl lg:text-7xl font-black text-white">
              <div className="inline-block">
                Newsletter
                <div class="h-2 md:h-3 rounded-md bg-gradient-to-r from-color1 to-color2"></div>
              </div>
              <div className="text-xl flex justify-center">
                <p className="font-montserrat font-normal md:font-bold text-2xl lg:text-3xl text-white ml-auto mr-auto mt-12 px-2 lg:px-72 text-center lg:leading-custom">
                  Want to stay updated with the latest news about IEEE CS VITC? Enter you email address and allow notifications.
                </p>
              </div>
              <form onSubmit={submitEmail} id="newsletterform">
                <div>
                  <input
                    className="mt-12 pl-8 bg-gray-900 backdrop-opacity-20 lg:w-1/2 h-16 lg:h-20 rounded-3xl border-0 text-2xl lg:text-3xl"
                    placeholder="Enter your email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="bg-gradient-to-r from-color1 to-color2 px-12 py-4 ml-auto mr-auto mt-12 md:mt-16 text-2xl lg:text-4xl text-white w-3/5 lg:w-1/4 shadow-xl hover:shadow-md hover:from-comsocgreen" style={{ borderRadius: "50px" }}>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <Mountains />
        </div >)
      }
    </div>
  );
};

export default Home;
