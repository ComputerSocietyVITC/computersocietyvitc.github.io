import React, { useEffect, useState } from "react";

import banner from "../images/banner.png";

/* Profile Images */
import prathiba from "../images/heads/prathiba.jpg";
import ag from "../images/heads/ag.png";
import dikshita from "../images/heads/dikshita.png";
import harsh from "../images/heads/harsh.png";
import anjali from "../images/heads/anjali-kedia.jpg";
import santhanam from "../images/heads/santhanam.png";
import neha from "../images/heads/neha.png";
import sparsh from "../images/heads/sparsh.png";
import saimirra from "../images/heads/saimirra.png";
import aditya from "../images/heads/aditya.png";

import MembersList from "../components/bookdata/MembersList";
import OBList from "../components/bookdata/OBList";
import Loader from "../components/loader/Loader";
import Mountains from "../components/Mountains";

const TeamMember = ({ name, designation, profileLink }) => {
  return (
    <section>
      <section className="rounded-full overflow-hidden " id="metallic">
        <img src={profileLink} className="h-48" alt={name}></img>
      </section>
      <section className="rounded-md p-2 my-4 " id="designation-bg">
        <h1 className="font-medium text-xl text-black">{name}</h1>
        <h2 className="font-normal text-black">{designation}</h2>
      </section>
    </section>
  );
};

const Team = () => {
  const [modalDisplay, setModalDisplay] = React.useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    document.getElementById("starrybg").style.background =
      "linear-gradient(180deg, rgba(23, 23, 23, 0) 6.68%, rgba(52, 80, 154, 0.29) 64.84%, rgba(151, 169, 204, 0.439818) 81.37%, rgba(255, 255, 255, 0.45) 98.87%)";
  }, []);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <section className="relative z-10">
          <section
            className="font-catamaran text-center my-10 text-black"
            id="outlinetext"
          >
            <h1>MEET THE TEAM</h1>
          </section>
          <section className="pt-1">
            <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-52">
              <section className="grid justify-items-center lg:justify-items-end">
                <section>
                  <section
                    className="rounded-full overflow-hidden "
                    id="metallic"
                  >
                    <img src={neha} className="h-48 lg:h-60" alt="Person" />
                  </section>
                  <section className="rounded-md p-2 my-4 " id="designation-bg">
                    <h1 className="font-medium text-xl text-black">
                      Neha Ragesh Nambiar
                    </h1>
                    <h2 className="font-normal text-black">President</h2>
                  </section>
                </section>
              </section>
              <section className="grid justify-items-center lg:justify-items-start">
                <section>
                  <section
                    className="rounded-full overflow-hidden "
                    id="metallic"
                  >
                    <img src={harsh} className="h-48 lg:h-60" alt="Person" />
                  </section>
                  <section className="rounded-md p-2 my-4 " id="designation-bg">
                    <h1 className="font-medium text-xl text-black">
                      Harsh Aryan
                    </h1>
                    <h2 className="font-normal text-black">Vice President</h2>
                  </section>
                </section>
              </section>
            </section>
            <section className="grid lg:grid-cols-3 lg:gap-20 lg:my-24 grid-cols-1">
              <section className="grid  justify-items-center lg:justify-items-end">
                <TeamMember
                  name="Dikshita Mehta"
                  designation="General Secretary"
                  profileLink={dikshita}
                />
              </section>
              <section className="grid justify-items-center">
                <TeamMember
                  name="Abhijith Ganesh"
                  designation="Technical Head"
                  profileLink={ag}
                />
              </section>
              <section className="grid justify-items-center lg:justify-items-start">
                <TeamMember
                  name="Anjali Kedia"
                  designation="Joint General Secretary"
                  profileLink={anjali}
                />
              </section>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:mb-24">
              <section className="grid justify-items-center lg:justify-items-end ">
                <TeamMember
                  name="Aditya Naryan Mahapatra"
                  designation="Design Head"
                  profileLink={aditya}
                />
              </section>
              <section className="grid justify-items-center">
                <TeamMember
                  name="Gunja Pandey"
                  designation="Public Relations head"
                  profileLink={saimirra}
                />
              </section>
              <section className="grid justify-items-center lg:justify-items-start ">
                <TeamMember
                  name="Prathiba Narayan"
                  designation="Design Head"
                  profileLink={prathiba}
                />
              </section>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 lg:mb-24">
              <section className="grid justify-items-center lg:justify-items-end ">
                <TeamMember
                  name="B Santhanakrishanan"
                  designation="Projects Head"
                  profileLink={santhanam}
                />
              </section>
              <section className="grid justify-items-center lg:justify-items-start lg:col-start-3 ">
                <TeamMember
                  name="Sparsh Kandpal"
                  designation="Treasurer"
                  profileLink={sparsh}
                />
              </section>
            </section>
          </section>
          <section className="text-center mt-12 lg:mt-0">
            <button
              onClick={() => setModalDisplay(true)}
              className="bg-gradient-to-r from-color1 to-color2 inline-flex justify-center py-2 px-10 border lg:border-2 border-transparent shadow-xl hover:shadow-sm text-xl font-medium mr-auto ml-auto rounded-full text-white hover:from-comsocgreen"
            >
              Members List
            </button>
          </section>
          <section
            className={
              "h-screen w-screen bg-transparent z-30 absolute" +
              (modalDisplay ? " block" : " hidden")
            }
            id="memberslist"
          >
            <section className="relative z-40">
              <button
                onClick={() => setModalDisplay(false)}
                className="fixed top-9 right-2 lg:right-52"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:h-10 lg:w-10 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </section>
            <section
              className="h-full w-full bg-black bg-opacity-80 fixed top-0 overflow-y-scroll"
              id="memberCarousel"
            >
              <section className="mx-10 lg:mx-72 my-10 relative z-30">
                <section className="bg-gray-900 my-2 lg:my-4">
                  <img src={banner} alt="Banner" />
                </section>
                {OBList.map((ob) => (
                  <section className="bg-gray-900 border lg:border-2 border-comsocgreen rounded-xl my-2 lg:my-4 py-4">
                    <h1 className="text-base lg:text-2xl font-semibold text-comsocgreen mb-4">
                      OB {ob.Year}
                    </h1>
                    <section className="grid grid-cols-2">
                      {ob.Members.map((mem) => (
                        <p className="text-xs lg:text-lg p-1">
                          {mem.Name} - {mem.Designation}
                        </p>
                      ))}
                    </section>
                  </section>
                ))}
                {MembersList.map((member) => (
                  <section className="bg-gray-900 border lg:border-2 border-comsocgreen rounded-xl my-2 lg:my-4 py-4">
                    <h1 className="text-base lg:text-2xl font-semibold text-comsocgreen mb-4">
                      Members 2021 - 2022
                    </h1>
                    <section className="grid grid-cols-3">
                      {member.Members.map((mem) => (
                        <p className="text-xs lg:text-lg p-1">{mem.Name}</p>
                      ))}
                    </section>
                  </section>
                ))}
                <section className="bg-gray-900 my-2 lg:my-4" />
                <section className="bg-gray-900 my-2 lg:my-4" />
              </section>
            </section>
          </section>
          <Mountains />
        </section>
      )}
    </section>
  );
};

export default Team;
