import React from "react";
import { useOutletContext } from "react-router-dom";
import Herosection from "../components/hero/hero.jsx";
import "./homepage.css";
import Section from "../components/section/section.jsx";
import { fetchFilters } from "../components/api/api.jsx";

export default function Homepage(props){
    const {data}=useOutletContext();
    const{topAlbums,newAlbums,songs}=data;
    return (<>
       <Herosection/>
       <div className="pages-wrapper">
        <Section title="Top Albums" data={topAlbums} type="album"/>
        <Section title="New Albums" data={newAlbums} type="album"/>
        <Section title="Songs" data={songs} type="songs" filterSource={fetchFilters}/>
{/* console.log(data); */}
       </div>
    </>);
}