"use client"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide><img src="https://avante.biz/wp-content/uploads/Tulasi-Wallpapers/Tulasi-Wallpapers-043.jpg" alt="img 1 " /></SwiperSlide>
        <SwiperSlide><img src="https://cdn.banyanbotanicals.com/info/uploads/ashwagandha-harvest-plant.jpg" alt="img 2" /></SwiperSlide>
        <SwiperSlide><img src="https://3.bp.blogspot.com/-3LSELCw_Smo/UO_UnKTem_I/AAAAAAAABKA/dByLpXmSUTg/s1600/Neem-1024x768.jpg" alt="img 3" /></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercave.com/wp/wp2330288.jpg" alt="img 4 " /></SwiperSlide>
        <SwiperSlide><img src="https://images.luxuryescapes.com/lux-group/image/upload/f_auto,fl_progressive,q_auto:best/dt94rv9ektyufiszsnch" alt="img 5" /></SwiperSlide>
        <SwiperSlide><img src="" alt="img 6 " /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
