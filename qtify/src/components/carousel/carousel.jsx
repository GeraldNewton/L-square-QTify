import React, { useEffect } from "react";
import {Swiper,SwiperSlide,useSwiper} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import Carouselleft from "./carouselleft.jsx";
import Carouselright from "./carouselright.jsx";
import "./carousel.css"

const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,1);
    },[data]);
    return <></>;
}

export default function Carousal({data,renderComponent}){
    return(
        <div className="carousel-wrapper">
              <Swiper
               style={{padding: "0px 20px"}}
               initialSlide={0}
               modules={[Navigation]}
               slidesPerView={"auto"}
               spaceBetween={40}
               allowTouchMove
            >
                <Controls data={data}/>
                <Carouselleft/>
                <Carouselright/>
                {data.map((ele)=><SwiperSlide>{renderComponent(ele)}</SwiperSlide>)}    
            </Swiper>
        </div>
    )
}