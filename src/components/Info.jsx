import React, { useState } from 'react'
import img from "../img.png"

const Info = () => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ['About Me', 'Experiences', 'Recommended'];
  const paragraphs = [
    'Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. <br/> I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci natus? Ipsa temporibus voluptate labore, fuga modi, excepturi distinctio maiores aperiam assumenda eius incidunt omnis aliquid, explicabo porro ea deleniti? ',
    'With over 8 years of experience in sales, including 3 rewarding years at Salesforce, <br/> Ive developed a deep passion for helping clients achieve their business goals. My journey from Albany, NY, to Santa Carla, CA, has been enriched by my family—my wife Tiffany and our energetic 4-year-old twin daughters, Emma and Ella. As they embark on their school adventures, I balance my commitment to clients with being a present and engaged father, especially during my mornings from 9-10 AM. As they start school, I cherish my role as a hands-on dad, especially during the busy mornings from 9-10 AM, while maintaining a strong commitment to my clients needs.',
    'Dave has been a standout sales representative at Salesforce for 3 years, <br/> leveraging over 8 years of experience in the field. His expertise in client relations and dedication to achieving results make him an invaluable asset. Based in Santa Carla, CA, Dave balances his professional life with being a dedicated family man, raising twin daughters, Emma and Ella, with his wife Tiffany. His proactive approach and deep understanding of client needs ensure that every interaction is both impactful and personalized. Highly recommended for anyone seeking top-notch sales support and genuine commitment.',
  ];
  return (
    <div className='w-full flex m-auto shadowstyle rounded-2xl p-4 bg-[#363C43] gap-4'>
      <div>
        <img src={img} alt="" className='w-6 h-6 mb-28' />
        <div className='flex gap-1 m-auto'>
          <div className='flex flex-col gap-1 m-auto'>
            <div className='w-2 h-2 bg-[#4A4E54]'></div>
            <div className='w-2 h-2 bg-[#4A4E54]'></div>
            <div className='w-2 h-2 bg-[#4A4E54]'></div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='w-2 h-2 bg-[#4A4E54]'></div>
            <div className='w-2 h-2 bg-[#4A4E54]'></div>
            <div className='w-2 h-2 bg-[#4A4E54]'></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full gap-4'>
        <div className='flex justify-around p-2 bg-black gap-3 rounded-xl'>
          {buttons.map((name, index) => (
            <button
              key={index}
              onClick={() => setActiveButton(index)}
              className={`w-full rounded-md text-xl p-2 ${activeButton === index ? 'bg-[#28292F] shadowstyle2' : ''}`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className='text-[#969696] text-lg h-44 overflow-scroll overflow-x-hidden scrollbarstyle' dangerouslySetInnerHTML={{ __html: paragraphs[activeButton] }}></div>
      </div>
    </div>
  )
}

export default Info
