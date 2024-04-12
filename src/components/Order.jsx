import React, { useEffect, useState } from "react";

import emailjs from 'emailjs-com';

const Order = () => {
  const designstyles = [
    "Modern",
    "Luxury Modern",
    "Neoklassik",
    "Klassika",
    "Loft",
  ];
  const roomstyles = [
    "Qonaq otağı",
    "Mətbəx",
    "Mətbəx studio",
    "Yataq otağı",
    "Uşaq otağı(oğlan)",
    "Uşaq otağı(qız)",
    "Qonaq üçün yataq otağı",
    "Camaşırxana",
    "Sanuzel",
    "Depo",
    "Qarderob",
  ];
  const infoFrequency = ["Hər gün", "Həftədə 2 dəfə", "Həftədə 1 dəfə"];

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
        Xəyalındaki evi bizimlə qur
      </h2>

      <div className="container mx-auto py-5">
        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[30px] px-3 md:px-96">
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
              Ad
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="name"
              type="text"
              placeholder="Ad"
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
              Soyad
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="surname"
              type="text"
              placeholder="Soyad"
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
              Əlaqə Nömrəsi
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="phoneNumber"
              type="text"
              placeholder="+994xxxxxxxxx"
              value={number}
              onChange={(e)=>{
                setNumber(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-xl mb-2" htmlFor="name">
              Email
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col col-span-2  ">
            <label className="text-xl mb-2" htmlFor="name">
              Mənzil Adresi
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="address"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex flex-col   ">
            <label className="text-xl mb-2" htmlFor="name">
              Mənzil Ölçüsü
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="size"
              type="number"
              min={1}
              placeholder="kv/m"
            />
          </div>
          <div className="flex flex-col   ">
            <label className="text-xl mb-2" htmlFor="name">
              Otaq sayı
            </label>
            <input
              className=" duration-300 border border-solid border-yellow-500 p-2  focus:outline-none focus:border-yellow-400"
              id="roomCount"
              type="number"
              min={1}
              placeholder=""
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
              Dizayn stili
            </label>
            <input
              list="designs"
              className=" duration-300 border border-solid border-yellow-500 p-2 focus:outline-none focus:border-yellow-400"
              id="design"
              type="text"
              placeholder="Seçin..."
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
              Otaq Tipləri
            </label>

            <select
              className=" duration-300 border border-solid border-yellow-500 p-2 focus:outline-none focus:border-yellow-400 pr-5"
              onChange={handleOptionSelect}
              id="rooms"
            >
              <option selected disabled value={null}>
                Seçin...
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
          <ColorPicker label={"Bəyənilən rənglər"} updateSelectedColors={updateSelectedColors} />
          <ColorPicker label={"Bəyənilməyən rənglər"} updateSelectedColors={updateUnselectedColors} />
          <div className="flex flex-col   ">
            <label className="text-xl mb-2" htmlFor="name">
              Əlaqə forması
            </label>
            <div className="flex">
              <div className="text-lg flex items-center">
                <label className="mr-2" htmlFor="mail">
                  Mail
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
                  Telefon
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
              Məlumatlandırılma aralığı
            </label>

            <select
              className=" duration-300 border border-solid border-yellow-500 p-2 focus:outline-none focus:border-yellow-400 pr-5"
              id="infoFrequency"
            >
              <option  disabled value={null}>
                Seçin...
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
              Deadline
            </label>

            <input
              className="bg-white/50 duration-300 border border-solid border-yellow-500 p-2 focus:outline-none focus:border-yellow-400 "
              type="date"
              name=""
              id="deadline"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-xl mb-2" htmlFor="name">
              Əlavə qeydlər
            </label>

            <textarea id="additionalNotes" rows="10" placeholder="Qeyd edin..." className=" duration-300 border border-solid border-yellow-500 p-2 focus:outline-none focus:border-yellow-400 ">

            </textarea>
          </div>

          <button onClick={sendEmail} className="bg-yellow-500 p-3 w-48 border border-solid border-yellow-500 text-black font-medium duration-300 hover:text-yellow-500 hover:bg-white">Göndər</button>
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
            <button className='bg-white/40 px-1 mx-1' onClick={handleAddCustomColor}>Rəng əlavə et</button>
            </div>
        </div>
    );
}

