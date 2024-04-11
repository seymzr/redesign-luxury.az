import React from 'react'
import ContactInfo from '../components/contact-box.tsx'
import ContactForm from '../components/contact-form.tsx'
const Contact = () => {
  return (
    <div>

<section class="w-full bg-contact h-[50vh] flex justify-center items-end">
    <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white rounded-tl-[37px] rounded-tr-[37px] gap-2.5">
      <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200 ">Contact Us</h1>
      <p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"> <a href="/">Home</a> / Contact</p>
    </div>
  </section>



	<section class="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px]">
		<h2 class="text-[30px] text-center capitalize font-dm tracking-wide lg:max-w-[60%] leading-8 md:leading-[62.50px] md:text-[50px] mx-auto text-text-blue ">We love meeting new people and helping them.</h2>


    <div class="grid grid-cols-1 gap-[55px] pt-20 lg:grid-cols-3 place-content-center">
      <ContactInfo />
      <ContactForm />
    </div>
	</section>

    </div>
  )
}

export default Contact

/* 

---
import MainLayout from '../layouts/main-layout.astro'
import ContactInfo from '../components/contact-box.tsx'
import ContactForm from '../components/contact-form.tsx'
---


<MainLayout title = 'Interior Design Contact Us'>

  <!-- Banner Section -->

  <section class="w-full bg-contact h-[50vh] flex justify-center items-end">
    <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white rounded-tl-[37px] rounded-tr-[37px] gap-2.5">
      <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200 ">Contact Us</h1>
      <p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"> <a href="/">Home</a> / Contact</p>
    </div>
  </section>

  <!-- Intro Section -->

	<section class="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px]">
		<h2 class="text-[30px] text-center capitalize font-dm tracking-wide lg:max-w-[60%] leading-8 md:leading-[62.50px] md:text-[50px] mx-auto text-text-blue ">We love meeting new people and helping them.</h2>

    <!-- main section -->
    <div class="grid grid-cols-1 gap-[55px] pt-20 lg:grid-cols-3 place-content-center">
      <ContactInfo />
      <ContactForm />
    </div>
	</section>

 

</MainLayout>

*/