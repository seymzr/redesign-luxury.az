import { Link } from "react-router-dom";

import Instagram from "../icons/instagram.tsx";

import Logo from "../icons/logo.tsx";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t,i18n} = useTranslation()
  return (
    <footer className="mt-[135px] w-full bg-white">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="">
            <Logo />
          </Link>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
         {t('footerTitle')}
          </p>
          <div className="flex items-center gap-5 md:gap-[54px]">
           
            <a href="https://instagram.com/redesign_luxury" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <p className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            {t('pages')}
          </p>
          <div className="flex flex-col gap-6">
            
            <Link
              to="/services"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              {t('navbar.services')}
            </Link>
            <Link
              to="/gallery"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
             {t('navbar.gallery')}
            </Link>
            <Link
              to="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              {t('navbar.contact')}
            </Link>
          </div>
        </div>
        <div></div>
        <div className="col-span-1 flex flex-col gap-4">
          <p className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            {t('navbar.contact')}
          </p>
          <div className="flex flex-col gap-6">
           
            <a href="mailto:info@redesignluxury.az" className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              info@redesignluxury.az
            </a>
            <a href="tel:+994502555200" className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
            +994 50 255 52 00
            </a>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
