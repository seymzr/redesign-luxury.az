import React, { useState } from "react";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const {t,i18n} = useTranslation()

  const linkStyle = "text-xl leading-6 font-jost text-primary-200 hover:text-primary-100 font-medium duration-300";
  function handleClick(lang) {
    i18n.changeLanguage(lang)
  }
  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-3 flex justify-between items-center z-50">
      <Link to="/">
        {" "}
        <Logo />
      </Link>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row items-center gap-6">
          <Link to="/" className={linkStyle}>
            {t('navbar.home')}
          </Link>
          <Link to="/services" className={linkStyle}>
          {t('navbar.services')}
          </Link>
          <Link to="/gallery" className={linkStyle}>
          {t('navbar.gallery')}
          </Link>
          <Link to="/contact" className={linkStyle}>
          {t('navbar.contact')}
          </Link>
          <select onChange={(e)=>{handleClick(e.target.value)}} name="" id="" className="text-lg focus:outline-none font-medium leading-6 font-jost text-primary-200">
            <option value="az">AZE</option>
            <option value="en">ENG</option>
            <option value="ru">RU</option>
          </select>
        </nav>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
        >
          <Link to="/" className={linkStyle}>
            {t('navbar.home')}
          </Link>
          <Link to="/services" className={linkStyle}>
          {t('navbar.services')}
          </Link>
          <Link to="/gallery" className={linkStyle}>
          {t('navbar.gallery')}
          </Link>
          <Link to="/contact" className={linkStyle}>
          {t('navbar.contact')}
          </Link>
          <select  onChange={(e)=>{handleClick(e.target.value)}} name="" id="" className="text-lg focus:outline-none leading-6 font-jost text-primary-200">
            <option value="az">AZE</option>
            <option value="en">ENG</option>
            <option value="ru">RU</option>
          </select>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
