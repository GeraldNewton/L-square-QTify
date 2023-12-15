import React from "react";
import { Tooltip, Chip } from "@mui/material";
import "./card.css";
import {Link} from "react-router-dom"

export default function Card({ data, type }) {
  if (type === "album") {
    const { follows, image, songs, title, slug } = data;
    return (
      <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <Link to={`/album/${slug}`}>
          <div className="card-wrapper">
            <div className="card-card">
              <img src={image} alt="" loading="lazy" />
              <div className="card-banner">
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  className="card-chip"
                  // REMEMBER TO WRITE ABOUT THE SX PROPERTY THAT IT IS USED TO CHANGE THE CSS PROPERTIES OF MUI COMPONENT
                />
                {/* REMEMBER TO WRITE ABOUT BOX SIZING BORDER BOX */}
              </div>
            </div>
            <div className="card-tittlewrapper">
              <p>{title}</p>
            </div>
          </div>
        </Link>
      </Tooltip>
    );
  } else if (type === "songs") {
    const { likes, image, title } = data;

    return (
      <div className="card-wrapper">
        <div className="card-card">
          <img src={image} alt="" loading="lazy" />
          <div className="card-banner">
            <div classname="card-pill">
              <p>{likes} Likes</p>
            </div>
            {/* REMEMBER TO WRITE ABOUT BOX SIZING BORDER BOX */}
          </div>
        </div>
        <div className="card-tittlewrapper">
          <p>{title}</p>
        </div>
      </div>
    );
  } else return <></>;
}