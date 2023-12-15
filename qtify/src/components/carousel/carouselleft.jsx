import React,{useEffect,useState} from "react";
import {useSwiper} from "swiper/react";
import {ReactComponent as Leftarrow} from "../../assests/LeftArrow.svg"
import "./carouselleft.css";

export default function CarouselLeft(){
    const swiper=useSwiper();
    const [isBeginning,setIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[])

    return(
        <div className="leftnav">
            {!isBeginning && <Leftarrow onClick={()=>swiper.slidePrev()}/>}
        </div>
    )
}