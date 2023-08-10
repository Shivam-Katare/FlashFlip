// import React from 'react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// // Import your images or content here
// import image1 from '';
// import image2 from '';
// import image3 from '';

// // Install Swiper components
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// function MySwiper() {
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
//     >
//       <SwiperSlide>
//         <img src={image1} alt="Image 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image2} alt="Image 2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image3} alt="Image 3" />
//       </SwiperSlide>
//     </Swiper>
//   );
// }

// export default MySwiper;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Pagination } from 'swiper/modules';
// import image1 from '../../components/FlashFlip/css.png';
// import image2 from '../../components/FlashFlip/d.png';
// import image3 from '../../components/FlashFlip/b.png';

// function MySwiper() {
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
//     >
//       <SwiperSlide>
//         <img src={image1} alt="Image 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image2} alt="Image 2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image3} alt="Image 3" />
//       </SwiperSlide>
//     </Swiper>
//   );
// }

// export default MySwiper;
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Swiper.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Card = ({ children }) => {

  return (
    <div className={`card`}>
      <div className="front">
        <div>{children}</div>
      </div>
      <div className="back">
        <div>Back Content</div>
      </div>
    </div>
  );
};

export default function MySwiper() {
  return (
    <>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        <SwiperSlide>
          <Card>Slide 1</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 2</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 3</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 4</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 5</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 6</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 7</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 8</Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>Slide 9</Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
