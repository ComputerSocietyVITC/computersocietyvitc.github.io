import NavBar from "@ieeecs/components/navbar";
import Image from "next/image";
import "../app/globals.css";
import "../../fonts/fonts.css";

export default function Home() {
  return (
    <section className="bg-blacky text-brandColor">
      <NavBar />
      <main className="min-h-screen justify-ends">
        <section className="flex p-24">
          <section className="font-offbit text-7xl font-regular ">
            We are IEEE Computer Society VIT Chennai!
          </section>
          <section>
            <Image
              src="/group.png"
              alt="Group"
              width="600"
              height="600"
              className="lg:-translate-y-16 lg:translate-x-8"
            />
          </section>
        </section>
        <section className="w-[544px] h-[210px]">
          <p className="w-[391px] h-[118px] absolute left-[121px] top-[568px] text-[150px] text-left text-white">
            ▹▹▹
          </p>
          <p className="w-[227px] h-[74px] absolute left-[-32px] top-[476px] text-[150px] text-left text-[#c5da45]">
            ◃◃◃
          </p>
        </section>
      </main>
      <section className="w-[893px] h-[584px]">
        <section
          className="w-[893px] h-[584px] absolute left-[530.5px] top-[542.5px] bg-white shadow-black shadow-"
          style={{ boxShadow: "16px 12px 4px 0 #000" }}
        />
        <section className="w-[893px] h-[34.21px] absolute left-[530.5px] top-[542.5px] bg-black" />
        <section className="flex justify-start items-start h-[11.4px] absolute left-[572px] top-[557.66px] gap-2">
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0 7.66113C0 3.79514 3.13401 0.661133 7 0.661133C10.866 0.661133 14 3.79514 14 7.66113C14 11.5271 10.866 14.6611 7 14.6611C3.13401 14.6611 0 11.5271 0 7.66113Z"
              fill="#269B4E"
            />
          </svg>
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0 7.66113C0 3.79514 3.13401 0.661133 7 0.661133C10.866 0.661133 14 3.79514 14 7.66113C14 11.5271 10.866 14.6611 7 14.6611C3.13401 14.6611 0 11.5271 0 7.66113Z"
              fill="#E9493D"
            />
          </svg>
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0 7.66113C0 3.79514 3.13401 0.661133 7 0.661133C10.866 0.661133 14 3.79514 14 7.66113C14 11.5271 10.866 14.6611 7 14.6611C3.13401 14.6611 0 11.5271 0 7.66113Z"
              fill="#FFF052"
            />
          </svg>
        </section>
      
        <p className="w-fit absolute left-[594px] top-[618.61px] text-[75px] font-bold text-left text-black">
          About Us
        </p>
        <p className="w-[786px] absolute left-[594px] top-[724px] text-[28px] text-left text-black">
          IEEE Computer Society VIT Chennai is a zealous community of diverse
          minds striving to Learn, Create (sometimes Break!), Develop, and
          Explore. Here we combine an infectious desire to grow together, and a
          stubborn persistence to keep going, with a healthy ambition for the
          next audacious challenge. Come join us on this journey!
        </p>
      </section>
    </section>
  );
}
