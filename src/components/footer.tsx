import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaDiscord,
  FaLinkedin,
  FaGithub,
  FaMedium,
} from "react-icons/fa";

let Footer = (): JSX.Element => {
  return (
    <section className="grid grid-cols-4 px-10 py-12 gap-10">
      <div className="gridItem1">
        <div className="logoContainer flex flex-col justify-center items-center gap-3">
          <div className="flex justify-between items-center">
            <img src="./logo.png" alt="logo" className="w-12 mr-2" />
            <div className="logoText flex flex-col justify-center ">
              <p className="font-ptsansb text-2xl">IEEE COMPUTER SOCIETY</p>
              <p className="font-raleway text-xs">VIT CHENNAI STUDENT BRANCH</p>
            </div>
          </div>
          <p className="font-monsterrat text-xs">
            ©️ Copyright 2021 - IEEE CS VITC. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="gridItem2 pl-12">
        <p className="font-monsterrat mb-3">Menu</p>
        <div className="flex flex-col gap-2">
          <p className="font-monsterrat text-xs">Home</p>
          <p className="font-monsterrat text-xs">The Team</p>
          <p className="font-monsterrat text-xs">Events</p>
          <p className="font-monsterrat text-xs">Projects</p>
          <p className="font-monsterrat text-xs">Blogs</p>
          <p className="font-monsterrat text-xs">Contact</p>
        </div>
      </div>
      <div className="gridItem3">
        <p className="font-monsterrat mb-3 text-sm">Address</p>
        <div className="flex flex-col justify-center gap-1 font-monsterrat text-xs">
          <p>Kelambakkam - Vandalur Rd, Rajan Nagar,</p>
          <p>Chennai, Tamil Nadu 600127</p>
        </div>

        <p className="font-monsterrat mb-3 text-sm mt-4">Email</p>
        <p className="font-monsterrat mb-3 text-xs">
          ieeecomputersociety@vit.ac.in
        </p>
      </div>
      <div className="gridItem4 flex-col justify-center items-center">
        <p className="font-monsterrat mb-3 text-sm">Social Media</p>
        <div className="flex gap-12 mb-10 mt-3">
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaYoutube size={30} />
          <FaTelegram size={30} />
        </div>
        <div className="flex gap-12">
          <FaDiscord size={30} />
          <FaLinkedin size={30} />
          <FaGithub size={30} />
          <FaMedium size={30} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
