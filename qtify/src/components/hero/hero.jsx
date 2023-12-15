import React from "react";
import "./hero.css";
import { ReactComponent as Image } from "../../assests/VibratingHeadphone.svg";
export default function Herosection() {
  return (
    <>
      <div className="hero-background">
        <div className="hero-container">
          <div className="hero-text">
            <div>100 Thousand Songs, ad-free</div>
            <div>Over thousands podcast episodes</div>
          </div>
          <div className="hero-image">
            <Image />
          </div>
        </div>
      </div>
    </>
  );
}