"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [active, setActive] = useState(false)

  return (
    <header className="bg-transparent min-h-14 px-6 border-b border-b-line-color flex justify-between items-center relative">
      {/* name block */}
      <div className="header_text flex-[0_1_15%] min-w-[263px]">
        Kyrylo-Haivoronskyi
      </div>
      {/* nav */}
      <nav className="flex-1 h-full">
        <ul className="h-full nav_style hidden md:flex">
          <li className={`${path === "/" ? "nav_selected" : ""}`}>
            <Link className="header_text " href={"/"}>
              _hello
            </Link>
          </li>
          <li className={`${path === "/about" ? "nav_selected" : ""}`}>
            <Link className="header_text" href={"/about"}>
              _about-me
            </Link>
          </li>
          <li className={`${path === "/projects" ? "nav_selected" : ""}`}>
            <Link className="header_text" href={"/projects"}>
              _projects
            </Link>
          </li>
        </ul>
      </nav>
      {/* contact me  */}
      <div
        className={`h-full md:flex hidden items-center pl-5 border-l border-l-line-color ${
          path === "/contact" ? "nav_selected" : ""
        }`}
      >
        <Link className="header_text " href={"/contact"}>
          _contact-me
        </Link>
      </div>
      <div onClick={() => setActive(prev => !prev)} className="md:hidden h-full justify-center flex flex-col gap-1 items-center">
        <div className={`h-[2px] transition-all ease-linear duration-200 block bg-white w-4 ${active ? '-rotate-45' : ''}`}></div>
        <div className={`h-[2px] transition-all ease-linear duration-200 ${active ? 'hidden' : 'block'} bg-white w-4`}></div>
        <div className={`h-[2px]  transition-all ease-linear duration-200 block ${active ? 'rotate-45 relative -top-[6px]' : ''}  bg-white w-4`}></div>
      </div>
      <ul className={`h-calc-screen w-full bg-primary-2 z-10 nav_style flex flex-col transition-all ease-in-out duration-500 md:hidden absolute ${active ? 'left-0' : '-left-full'}  bottom-0 top-full`}>
          <li className="py-2">
            <Link className="header_text !text-white " href={'/'} onClick={() => setActive(false)}>_hello</Link>
          </li>
          <li className="py-2">
            <Link className="header_text !text-white" href={'/about'} onClick={() => setActive(false)}>_about-me</Link>
          </li>
          <li className="py-2">
            <Link className="header_text !text-white" href={'/projects'} onClick={() => setActive(false)}>_projects</Link>
          </li>
          <li className="py-2">
            <Link className="header_text !text-white" href={'/contact'} onClick={() => setActive(false)}>_contact</Link>
          </li>
        </ul>
    </header>
  );
};

export default Header;
