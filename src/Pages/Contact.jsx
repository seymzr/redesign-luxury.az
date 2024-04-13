import React from "react";
import ContactInfo from "../components/contact-box.tsx";
import ContactForm from "../components/contact-form.tsx";
import Order from "../components/Order.jsx";
const Contact = () => {
  return (
    <div>
      <section class="w-full bg-contact h-[50vh] flex justify-center items-end">
        <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white rounded-tl-[37px] rounded-tr-[37px] gap-2.5">
          <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200 ">
            Contact Us
          </h1>
          <p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray">
            {" "}
            <a href="/">Home</a> / Contact
          </p>
        </div>
      </section>

      <section class="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px]">
        <h2 class="text-[30px] text-center  font-dm tracking-wide lg:max-w-[60%] leading-8 md:leading-[62.50px] md:text-[50px] mx-auto text-text-blue ">
        Sizdə Redesign Luxury ilə arzuladığınız evə sahib olun
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-[55px] pt-20  place-content-center">
          <ContactInfo />
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5903406294717!2d49.88981140764016!3d40.38268796778821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9a450d4bc71a58f%3A0xb5d30cc4ea37af!2sRedesign%20luxury!5e0!3m2!1sen!2saz!4v1712861495966!5m2!1sen!2saz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <ContactForm /> */}
        </div>
      </section>
      <Order />
    </div>
  );
};

export default Contact;
