import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../App.css'
import 'swiper/css/effect-coverflow';


const UnsplashPhotoFunction = (props) => {
const {dataP} = props;

if (!dataP) return null;


  return (
    <div className="unsplash__index">
 
     <Swiper
      modules={[Navigation, Pagination, EffectCoverflow ]}
      autoHeight={true}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {dataP.results.map( (data,index) =>{
      return (
      <SwiperSlide key={index}>
        <img src={data.urls.regular} alt={data.alt_description} key={data.id}/>
      </SwiperSlide>
        )
     })}
      
      
    </Swiper>
    </div>
  );
}

export default UnsplashPhotoFunction;