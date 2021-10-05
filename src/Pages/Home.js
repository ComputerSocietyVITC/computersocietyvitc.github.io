import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef } from 'react'
import robotAnimation from "../images/chatbot.svg";
import ieeeLogo from "../images/comsocLogowhite.png";
import down from "../images/down.png";
import team from "../images/meettheteam.svg";
import idea from "../images/submitidea.png";
import { SiInstagram, SiGithub, SiDiscord, SiLinkedin } from "react-icons/si";
import homepageend from "../images/homepageend.svg";
import robot from "../images/Chatbot.json";
import Button from "@mui/material/Button";
import LottieAnimation from "../Lottie";

const Home = () => {
  const IconStyles = {
    height: "50px",
    width: "50px",
  };
  const ButtonStyles = {
    fontStyles:"Open Sans"
  };
  const prRef = useRef(null);
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="ml-40 mt-48">
          <img src={ieeeLogo} className="w-96 h-34" alt="" />
          <div className="mt-8 font text-xl xl:text-2xl  text-left text-opacity-50 ">
            At IEEE Computer Society VIT Chennai, our aim is to learn and teach.
            Developers, designers and managers come together under one roof to
            create a community which inspires thousands. Join Us!
          </div>
        </div>
        <div className=" mt-20 hidden lg:flex" style={{ height: "35rem" }}>
          <LottieAnimation className="" lotti={robot} />
        </div>
      </div>

      <div ref = {prRef} className="flex justify-center">
        <img
          onClick={() => prRef.current.scrollIntoView({ behavior: "smooth" })}
          src={down}
          alt="down arrow"
          className="w-14 h-14 items-center m-4 cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-3 grid-rows-2">
        <div className="col-span-1 row-span-2" data-aos="fade-left">
          <img src={team} className="" alt="meet the team" />
        </div>
        <div className="my-10 col-span-2 row-span-1" data-aos="fade-left">
          <h1 className="text-5xl w-2/4">
            <span className="text-comsocgreen">Our</span> Vision
          </h1>
          <div className="mt-6 text-2xl flex ">
            <p className="w-2/4 whitespace-pre-wrap">
              We think slightly out of the box, we believe that a club’s
              resources must not only be channeled into conducting events but
              also to propagate learning and teaching, symbiotically. That said,
              we conduct two flagship events, namely, HackHub and Paradox, and
              tons of insightful workshops!
            </p>
          </div>
        </div>

        <div className="my-10 col-span-2 row-span-1" data-aos="fade-right">
          <h1 className="text-5xl w-2/4">
            <span className="text-comsocgreen">Meet</span> The Team
          </h1>
          <div className="mt-6 text-2xl flex">
            <p className="w-2/4 whitespace-pre-wrap">
              We have got a strong team filled with caffeine addicted
              developers, gradient loving designers and machine like working
              managers.
              <br/>
              <Button style = {ButtonStyles} style = {ButtonStyles} variant = "contained">
                  <Link to="/Team">The Team</Link>
              </Button>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 " data-aos="fade-left">
        <div className="md-10 col-span-2">
          <div className="flex justify-end">
            <h1 className="text-5xl w-2/4">
              <span className="text-comsocgreen">Submit</span> An Idea
            </h1>
          </div>

          <div className="mt-6 text-2xl flex justify-end">
            <p className="w-2/4 whitespace-pre-wrap">
              Didn't find the right team to implement yout project idea? Join us
              to make it come alive.
            <br/>
             <Button style = {ButtonStyles} variant = "contained">
                <Link to="/">Submit Idea</Link>
              </Button>
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-2">
          <img src={idea} className="ml-8 w-2/3" alt="" />
        </div>
      </div>

      <div className="my-5" data-aos="fade-right">
        <h1 className="text-5xl">
          <span className="text-comsocgreen">Newsletter</span>
        </h1>
        <div className="mt-6 text-2xl flex justify-center">
          <p className="w-2/4 whitespace-pre-wrap">
            Want to stay updated about with the latest events and workshops
            conducted by us? Enter your email address to never miss out on
            anything.
            <div>
              <input
                className="mt-4 bg-gray-200 w-2/5"
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <Button style = {ButtonStyles} variant = "contained">
                <Link to="/">Subscribe</Link>
              </Button>
          </p>
        </div>
      </div>
      <div className="my-10" data-aos="fade-left">
        <h1 className="text-5xl">
          <span className="text-comsocgreen">Connect</span> with Us
        </h1>
        <p className="mt-5 text-xl underline">We are active on</p>
        <div className="w-1/5 mt-5 ml-auto mr-auto">
          <div className="grid grid-cols-4 gap-2">
            <a href="https://www.instagram.com/comsoc.vitcc/" target="_blank">
              <SiInstagram
                style={IconStyles}
                className="h-10 col-span-1  ml-auto mr-auto"
              />
            </a>
            <a href="https://github.com/ComputerSocietyVITC" target="_blank">
              <SiGithub
                className="h-10 col-span-1  ml-auto mr-auto"
                style={IconStyles}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"
              target="_blank"
            >
              <SiLinkedin
                className="h-11 col-span-1  ml-auto mr-auto"
                style={IconStyles}
              />
            </a>
            <a href="https://discord.gg/6vkY3kcZnE" target="_blank">
              <SiDiscord
                style={IconStyles}
                className="h-10 col-span-1  ml-auto mr-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 mr-auto ml-auto" data-aos="fade-top">
        <img className="mr-auto ml-auto" src={homepageend} alt="" />
      </div>
    </div>
  );
};

export default Home;
