"use client";

import { useEffect, useState } from "react";
let NavBarItem = (props: { name: string; flag: boolean }): JSX.Element => {
  return (
    <section
      className={`hidden text-xl font-space font-bold px-4 h-full lg:flex justify-between items-center dark:border-0 dark:border-r-4 dark:border-r-blacky ${
        props.flag ? "dark:bg-black dark:text-slate-50 text-blacky bg-slate-50 border" : ""
      }`}
    >
      {props?.name}
    </section>
  );
};

let NavBar = (): JSX.Element => {
  const [location, setLocation] = useState<string>();
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  let HomeFlag = false;
  let TeamFlag = false;
  let ProjectFlag = false;
  let AboutUsFlag = false;
  let BlogFlag = false;

  if (location === "/") {
    HomeFlag = true;
  }

  return (
    <>
      <section className="h-16 flex justify-between">
        <img src="./logo.png" alt="logo" className="h-16 my-4 pl-16" />
        <section className="dark:text-blacky dark:bg-slate-50 text-slate-50 bg-blacky sm:hidden lg:flex items-center h-12">
          <NavBarItem name="Home" flag={HomeFlag} />
          <NavBarItem name="Team" flag={TeamFlag} />
          <NavBarItem name="Project" flag={ProjectFlag} />
          <NavBarItem name="About Us" flag={AboutUsFlag} />
          <NavBarItem name="Blog" flag={BlogFlag} />
        </section>
      </section>
    </>
  );
};

export default NavBar;
