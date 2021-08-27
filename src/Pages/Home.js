import React from "react";
import { Link } from "react-router-dom";
import robotAnimation from "../images/chatbot.svg";
import ieeeLogo from "../images/comsocLogowhite.png";
import down from "../images/down.png"
import team from "../images/meettheteam.svg"
import idea from "../images/submitidea.png"
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import linkedin from '../images/linked-in.png'
import discord from '../images/discord.png'
import homepageend from '../images/homepageend.svg'

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="ml-40 mt-48">
          <img src={ieeeLogo} className="w-96 h-34" alt="" />
          <div className="mt-8 font text-2xl text-left text-opacity-50 ">
            At IEEE Computer Society VIT Chennai, our aim is to learn and teach.
            Developers, designers and managers come together under one roof to
            create a community which inspires thousands. Join Us!
          </div>
        </div>
        <div className="mt-20">
         <img src={robotAnimation} className="" alt="" />
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={down}
          alt="down arrow"
          className="w-12 h-12 items-center m-4"
        />
      </div>

      <div className="grid grid-cols-3 grid-rows-2" >
        <div className="col-span-1 row-span-2">
          <img src={team} className="" alt="meet the team" />
        </div>
        <div className="my-10 col-span-2 row-span-1">
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
              <div className="bg-white text-black p-1 ml-auto mr-auto mt-4 text-lg w-1/5">
                <Link to="/Team">The Team</Link>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 " data-aos="fade-left">
        <div className="md-10 col-span-2"  > 
          <div className="flex justify-end">
            <h1 className="text-5xl w-2/4">
              <span className="text-comsocgreen">Submit</span> An Idea
            </h1>
          </div>
          
          <div className="mt-6 text-2xl flex justify-end">
            <p className="w-2/4 whitespace-pre-wrap">
              Didn't find the right team to implement yout project idea? Join us
              to make it come alive.
              <div className="bg-white text-black p-1 ml-auto mr-auto mt-4 text-lg w-1/4">
                <Link to="/">Submit Idea</Link>
              </div>
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
            <div className="bg-white text-black p-1 ml-auto mr-auto mt-4 text-lg w-1/5">
              <Link to="/">Subscribe</Link>
            </div>
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
              <img
                src={instagram}
                alt="Instagram"
                className="h-10 col-span-1  ml-auto mr-auto"
              ></img>
            </a>
            <a href="https://github.com/ComputerSocietyVITC" target="_blank">
              <img
                src={github}
                alt="Github"
                className="h-10 col-span-1  ml-auto mr-auto"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-11 col-span-1  ml-auto mr-auto"
              ></img>
            </a>
            <a href="https://discord.gg/6vkY3kcZnE" target="_blank">
              <img
                src={discord}
                alt="Discord"
                className="h-10 col-span-1  ml-auto mr-auto"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 mr-auto ml-auto">
        <img className="mr-auto ml-auto" src={homepageend} alt="" />
      </div>
    </div>
  );
};

export default Home;
