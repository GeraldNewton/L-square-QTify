import React,{useEffect,useState} from "react";
import {useSwiper} from "swiper/react";
import {ReactComponent as Rightarrow} from "../../assests/RightArrow.svg"
import "./carouselright.css";

export default function CarouselRight(){
    const swiper=useSwiper();
    const [isEnd,setIsEnd]=useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd);
        })
    },[])

    return(
        <div className="rightnav">
            {!isEnd && <Rightarrow onClick={()=>swiper.slideNext()}/>}
        </div>
    )
}