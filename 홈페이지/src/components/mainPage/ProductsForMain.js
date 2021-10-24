import React, { useState } from 'react';
// Import Swiper React components
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
export default function ProductsForMain() {
  const imgSrcs = useState([
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
    { productName: '메모장', productUse: '메모할때 써요' },
  ])[0];
  const imgSrcMap = imgSrcs.map((imgSrc, index) => (
    <SwiperSlide
      key={index}
      style={{
        height: '50vh',
        width: '20vw',
      }}
    >
      <div className="mainProductSlide">
        <div>{imgSrc.productName}</div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="mainSecProducts">
      <div className="mainProductTxt">
        <h1>OUR PRODUCTS</h1>
      </div>
      <div className="mainProductsSwiperSlideRapper">
        <Swiper
          // style={{ height: '50vh', width: '30vw' }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {imgSrcMap}
        </Swiper>
      </div>
    </div>
  );
}
