import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/card.jsx";
import Carousal from "../carousel/carousel.jsx";
import "./section.css";
import Filters from "../filter/filter.jsx";

export default function Section({ title, data,filterSource, type }) {
  const [filters,setFilters]=useState([{key:"all",label:"All"}]);
  const [selectedFilterIndex,setSelectedFilterIndex]=useState(0);
  const [caraousalToggle, setCaraousalToggle] = useState(true);

  useEffect(()=>{
    if(filterSource){
      filterSource().then((response)=>{
        const {data}=response;
        setFilters([...filters,...data]);
      });
    }
  },[])

  const showFilters=filters.length>1
  const cardsToRender=data.filter((card)=>{
    return (showFilters && selectedFilterIndex!==0)?(card.genre.key===filters[selectedFilterIndex].key):(card)
  })

  console.log("type", cardsToRender.length)


  const handleToggle = () => {
    setCaraousalToggle((prevState)=>!prevState)
  };
  return (
    <div>
      <div className="section-header">
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className="section-toggleText">
          {!caraousalToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {showFilters && (
        <div className="section-filterwrapper">
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="section-cardsWrapper">
          {!caraousalToggle ? (
            <div className="section-wrapper">
              {cardsToRender.map((ele) => {
                return <Card data={ele} type={type} />;
              })}
            </div>
          ) : (
            <Carousal
              data={cardsToRender}
              renderComponent={(data) => {
                return <Card data={data} type={type} />;
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
