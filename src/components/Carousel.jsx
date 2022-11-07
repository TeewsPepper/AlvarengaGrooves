import React from 'react'
import { useState } from 'react';

const Carousel = () => {

    const imgs=[
        {id:0,value:"../img/0.jpeg"},
        /* {id:2,value:"../img/2.jpeg"}, */
        {id:3,value:"../img/3.jpeg"},
        /* {id:4,value:"../img/5.jpeg"}, */
        {id:5,value:"../img/6.jpeg"},
        /* {id:6,value:"../img/7.jpeg"}, */
        {id:7,value:"../img/8.jpeg"},
       /*  {id:8,value:"../img/9.jpeg"},
        {id:9,value:"../img/10.jpeg"}, */
        {id:10,value:"../img/11.jpeg"},
        /* {id:11,value:"../img/12.jpg"},
        {id:12,value:"../img/13.jpg"}, */
        {id:13,value:"../img/14.jpg"},
        {id:14,value:"../img/15.jpg"},
        /* {id:15,value:"../img/16.jpg"}, */
        {id:16,value:"../img/17.jpg"},
        /* {id:17,value:"../img/18.jpg"},
        {id:18,value:"../img/19.jpg"},
        {id:19,value:"../img/20.jpg"},
        {id:20,value:"../img/21.jpg"},
        {id:21,value:"../img/22.jpg"}, */
        {id:22,value:"../img/23.jpg"},
        /* {id:23,value:"../img/24.jpg"}, */
        {id:24,value:"../img/25.jpg"},
        {id:25,value:"../img/26.jpg"},
    ];

    const [sliderData, setSliderData] = useState(imgs[0])
    const handleClick = (index) => {
        console.log(index);
        const slider = imgs[index];
        setSliderData(slider);
    }

  return (
    <div className='w-2/3 m-auto flex flex-col justify-center mt-10'>
        <img className='m-auto' src={sliderData.value} height="150" width="250" />
        <div className='flex flex-row flex-wrap mt-3'>


      {
        imgs.map((data,i) => 
        <div className='pl-4'  key={i}>

            <img src={data.value} onClick={() => handleClick(i)} height="70" width="100" alt="" />
        </div>
        )
      }
        </div>
    </div>
  );
}

export default Carousel
