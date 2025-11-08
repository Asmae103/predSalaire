import React, { useState } from "react";
import { NavbarMenu } from "../../data/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import Darkmode from "./Darkmode";
// import Espace from "./Espace/Espace.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      {/* Navbar fixed en haut pour que le design soit en dessous */}
      <nav style={{ backgroundColor: 'var(--color-bg)' }}   className="fixed top-0 left-0 w-full h-17 shadow-md bg-white dark:bg-gray-900 duration-200 z-50">
        {/* Container du contenu de la navbar */}
        <div className="container mx-auto px-8 flex justify-between items-center py-8 h-full">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <FaDumbbell />
            <p>predSalaire</p>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:block"> {/* Changement: hidden sur mobile et flex sur desktop */}
            <ul className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  


          {/* Icons section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="flex items-center border-2 border-gray-300 rounded-full px-2">
              {showInput && (
                <input
                  type="text"
                  placeholder="Search"
                  className="p-2 outline-none" // Correction: retire la classe inconnue search-bar
                />
              )}
              <button
                onClick={() => setShowInput(!showInput)}
                className="text-2xl p-2 hover:bg-primary hover:text-white duration-200"
              >
                <CiSearch />
              </button>
            </div>

            {/* Login button */}
            <button style={{ padding: '6px 20px' }} className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-3 duration-200">
              Login
            </button>

            {/* Dark mode */}
            <Darkmode />
          </div>

          {/* Hamburger menu mobile */}
          {/* <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div> */}

          <div className="block md:hidden z-50" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-gray-800 dark:text-white cursor-pointer" />
          </div>
        </div>
      </nav>
      {/* Contenu principal décalé pour que le menu fixe ne le recouvre pas */}
    {/*  <div className="pt-24">  Changement: padding-top pour décaler le contenu sous le menu */}
        {/* Ici tu peux mettre ton design / section principale 
      </div>*/}

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open}/>
     


    </>
  );
}
