import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <a href="mailto:info@redesignluxury.az" className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> info@redesignluxury.az
      </a>
      <a href="tel:+994502555200" className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> +994 50 255 52 00
      </a>
      
    </div>
  );
};

export default ContactInfo;
