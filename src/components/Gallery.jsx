import React, { useRef, useState } from 'react'
import img from "../img.png"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const scrollContainerRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };
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
      <div className='w-full'>
        <div className='flex w-full justify-between'>
          <div className='text-xl px-8 py-2 rounded-2xl bg-[#000000] h-fit'>Gallery</div>
          <div className='flex gap-5 items-center h-fit'>
            <div className='rounded-full shadowstyle3'>
              <button className='flex bg-[#555555] font-semibold text-xs h-fit rounded-full px-5 py-3 shadowstyle4' onClick={() => document.getElementById("fileInput").click()}>+ ADD IMAGE</button>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className='flex gap-5'>
                <button className='bg-[#161718] h-fit p-3 rounded-full' onClick={scrollLeft}><FaArrowLeft/></button>
                <button className='bg-[#161718] h-fit p-3 rounded-full' onClick={scrollRight}><FaArrowRight/></button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div ref={scrollContainerRef} className="flex gap-4 overflow-scroll scrollbarstyle">
            {images.length === 0 ? <h1 className='w-44 h-44 bg-[#555555] rounded text-center items-center flex justify-center'>no image</h1> : ""}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Uploaded ${index + 1}`}
                className="w-44 h-44 object-cover rounded m-4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
