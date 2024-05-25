import React, { useEffect, useState } from "react";

import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

const Order = () => {
  const {t,i18n} = useTranslation()
  const designstyles = [
    "Modern",
    "Luxury Modern",
    "Neoklassik",
    "Klassika",
    "Loft",
  ];
  const roomstyles = [
    t('contact.roomstyles.livingroom'),
    t('contact.roomstyles.kitchen'),
    t('contact.roomstyles.kitchenstudio'),
    t('contact.roomstyles.bedroom'),
    t('contact.roomstyles.kidsroomboy'),
    t('contact.roomstyles.kidsroomgirl'),
    t('contact.roomstyles.guestbedroom'),
    t('contact.roomstyles.laundry'),
    t('contact.roomstyles.bathroom'),
    t('contact.roomstyles.storage'),
    t('contact.roomstyles.wardrobe'),
  ];
  const infoFrequency = [t('contact.everyday'), t('contact.2week'), t('contact.1week')];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionSelect = (event) => {
    const selectedOption = event.target.value;
    if (!selectedOptions.includes(selectedOption)) {
      setSelectedOptions([...selectedOptions, selectedOption]);
    }
    setInputValue("");
  };

  const handleOptionRemove = (optionToRemove) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option !== optionToRemove)
    );
  };

  useEffect(() => {
    emailjs.init("oioP9xP3o1j2oszP_");
  }, []);

  const sendEmail = () => {
    // Gather form data
    const formData = {
      Ad: document.getElementById('name').value,
      Soyad: document.getElementById('surname').value,
      'Əlaqə Nömrəsi': document.getElementById('phoneNumber').value,
      Email: document.getElementById('email').value,
      'Mənzil Adresi': document.getElementById('address').value,
      'Mənzil Ölçüsü': document.getElementById('size').value,
      'Otaq sayı': document.getElementById('roomCount').value,
      'Dizayn stili': document.getElementById('design').value,
      'Otaq Tipləri': selectedOptions.join(', '),
      "Bəyənilən rənglər":'',
      'Əlaqə forması': (document.getElementById('mail').checked ? 'Mail' : '') + (document.getElementById('telephone').checked ? ' Telefon' : ''),
      'Məlumatlandırılma aralığı': document.getElementById('infoFrequency').value,
      Deadline: document.getElementById('deadline').value,
      'Əlavə qeydlər': document.getElementById('additionalNotes').value
    };
  
    // Format email body
    let emailBody = '';
    for (const property in formData) {
      if (formData[property]) {
        emailBody += `${property}: ${formData[property]}\n`;
      }
    }
  
    // Prepare email parameters
    const emailParams = {
      to_email: 'namazovtural92@gmail.com',
      subject: 'Yeni Sifariş',
      from_name: document.getElementById('name').value +" "+ document.getElementById('surname').value,
      from_email:document.getElementById('email').value,
      content: emailBody,
      html:selectedColors
      .filter(color => !Array.isArray(color))
      .map(color => `<div style="width: 50px; border: 2px solid gray; height: 50px; background-color: ${color}; margin: 5px;"></div>`)
      .join(''),
      html1:unselectedColors
      .filter(color => !Array.isArray(color))
      .map(color => `<div style="width: 50px; border: 2px solid gray; height: 50px; background-color: ${color}; margin: 5px;"></div>`)
      .join('')
    };



    console.log(emailBody)
    // Send email
    emailjs.send('service_801mnw6', 'template_kylse54', emailParams,"oioP9xP3o1j2oszP_")
      .then(response => {
        alert('Uğurla göndərildi');
      })
      .catch(error => {
        alert('Mesajı göndərərkən problem baş verdi. Zəhmət olmazsa səhifəni yeniləyib yenidən yoxlayın');
      });
  };
  const [selectedColors, setSelectedColors] = useState(['red', 'blue', 'green', 'yellow', 'orange']);
  const [unselectedColors, setUnselectedColors] = useState(['red', 'blue', 'green', 'yellow', 'orange']);

  // Function to update selected colors
  const updateSelectedColors = (color) => {
    if (color && !selectedColors.includes(color)) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((col) => col !== color));
    }
  };
  const updateUnselectedColors = (color) => {
    if (color && !selectedColors.includes(color)) {
      setUnselectedColors([...unselectedColors, color]);
    } else {
      setUnselectedColors(unselectedColors.filter((col) => col !== color));
    }
  };
  const [number,setNumber] = useState("+994")
  return (
    <div>
      <h2 className="text-[30px] my-12 text-center capitalize font-dm tracking-wide lg:max-w-[60%] leading-8 md:leading-[62.50px] md:text-[50px] mx-auto text-text-blue ">
        {t('contact.subtitle')}
      </h2>

      <div className="container mx-auto py-5">
        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[30px] px-3 md:px-96">
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
             {t('contact.name')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="name"
              type="text"
              placeholder={t('contact.name')}
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.surname')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="surname"
              type="text"
              placeholder={t('contact.surname')}
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.phone')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="phoneNumber"
              type="text"
              placeholder="+994xxxxxxxxx"
              value={number}
              // maxLength={13}
              onChange={(e)=>{
                setNumber(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.email')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col col-span-2  ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.address')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="address"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex flex-col   ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.size')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="size"
              type="number"
              min={1}
              placeholder="kv/m"
            />
          </div>
          <div className="flex flex-col   ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.rooms')}
            </label>
            <input
              className=" duration-300 border border-solid border-primary-100 p-2  focus:outline-none focus:border-primary-100/90"
              id="roomCount"
              type="number"
              min={1}
              placeholder=""
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.style')}
            </label>
            <input
              list="designs"
              className=" duration-300 border border-solid border-primary-100 p-2 focus:outline-none focus:border-primary-100/90"
              id="design"
              type="text"
              placeholder={t('contact.select')}
            />
            <datalist id="designs">
              {designstyles.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </datalist>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.roomtype')}
            </label>

            <select
              className=" duration-300 border border-solid border-primary-100 p-2 focus:outline-none focus:border-primary-100/90 pr-5"
              onChange={handleOptionSelect}
              id="rooms"
            >
              <option selected disabled value={null}>
                {t('contact.select')}
              </option>
              {roomstyles.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <div
              id="selectedRooms"
              className=" flex  items-center  flex-wrap  w-full"
            >
              {selectedOptions.map((option, index) => (
                <div
                  key={index}
                  className="border border-solid border-white p-2  flex items-center justify-between my-2 mr-2"
                >
                  <span className="">{option}</span>
                  <button
                    className="ml-5 bg-white text-red-500 px-2"
                    onClick={() => handleOptionRemove(option)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <ColorPicker label={t('contact.colors1')} updateSelectedColors={updateSelectedColors} />
          <ColorPicker label={t('contact.colors2')} updateSelectedColors={updateUnselectedColors} />
          <div className="flex flex-col   ">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.contacttype')}
            </label>
            <div className="flex">
              <div className="text-lg flex items-center">
                <label className="mr-2" htmlFor="mail">
                {t('contact.mail')}
                </label>
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  name="mail"
                  id="mail"
                />
              </div>
              <div className="text-lg mx-2 flex items-center">
                <label className="mr-2" htmlFor="tel">
                {t('contact.telephone')}
                </label>
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  name="telephone"
                  id="telephone"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
            {t('contact.frequency')}
            </label>

            <select
              className=" duration-300 border border-solid border-primary-100 p-2 focus:outline-none focus:border-primary-100/90 pr-5"
              id="infoFrequency"
            >
              <option  disabled value={null}>
                {t('contact.select')}
              </option>
              {infoFrequency.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
              {t('contact.deadline')}
            </label>

            <input
              className="bg-white/50 duration-300 border border-solid border-primary-100 p-2 focus:outline-none focus:border-primary-100/90 "
              type="date"
              name=""
              id="deadline"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
              {t('contact.additional')}
            </label>

            <textarea id="additionalNotes" rows="10" placeholder={t('contact.write')} className=" duration-300 border border-solid border-primary-100 p-2 focus:outline-none focus:border-primary-100/90 ">

            </textarea>
          </div>

          <button onClick={sendEmail} className="bg-primary-100 p-3 w-48 border border-solid border-primary-100 text-white font-medium duration-300 hover:text-primary-100 hover:bg-white">{t('contact.submit')}</button>
        </div>
      </div>
    </div>
  );
};

export default Order;






function ColorPicker({ label, updateSelectedColors }) {
    const [selectedColor, setSelectedColor] = useState('');
    const [customColor, setCustomColor] = useState('');
    const [colorOptions, setColorOptions] = useState(['red', 'blue', 'green', 'yellow', 'orange']);

    useEffect(()=>{
        ()=>updateSelectedColors(colorOptions)
    },[colorOptions])
    const handleColorSelect = (color) => {
        // If the clicked color is already selected, remove it
        if (selectedColor === color) {
            setSelectedColor('');
            updateSelectedColors('');
        } else {
            setSelectedColor(color);
            updateSelectedColors(colorOptions);
        }
    };

    const handleCustomColorChange = (event) => {
        setCustomColor(event.target.value);
    };

    const handleAddCustomColor = () => {
        if (customColor && !colorOptions.includes(customColor)) {
            setColorOptions([...colorOptions, customColor]);
            updateSelectedColors(customColor)
            setCustomColor('');
        }
    };

    const handleRemoveColor = (color) => {
        setColorOptions(colorOptions.filter((col) => col !== color));
        if (selectedColor === color) {
            setSelectedColor('');
            updateSelectedColors(color);
        }
    };

    return (
        <div className='col-span-2'>
            <label className="text-xl mb-2" htmlFor="name">
             {label}
            </label>
            <div className="color-options flex flex-wrap">
                {colorOptions.map((color, index) => (
                    <div
                        key={index}
                        className={`color-option w-16 h-16 mr-1 border border-solid border-white ${selectedColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                    >
                        {/* Add an 'X' button to remove the color */}
                        {selectedColor === color && (
                            <button className=" bg-white text-red-500 px-2" onClick={(e) => { e.stopPropagation(); handleRemoveColor(color); }}>X</button>
                        )}
                    </div>
                ))}
            </div>
            <div className='flex items-center my-2'>
            <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
            />
            <button className='bg-primary-100 px-2 py-1 text-white mx-1' onClick={handleAddCustomColor}>Rəng əlavə et</button>
            </div>
        </div>
    );
}

