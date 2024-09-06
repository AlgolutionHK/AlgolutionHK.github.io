// "use client";

import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
import '../css/w3.css';
import "../css/home.css";
import Image from 'next/image';


export default function InfoColumn({
    iconSrc, title, description
}: Readonly<{
      iconSrc: React.ReactNode;
      title: React.ReactNode;
      description: React.ReactNode;
    }>) {
    return (
        <div className="infoColumn">
          <div className="infoContent">
            <Image
              src={iconSrc as string} 
              alt="" 
              className="infoIcon" 
              loading="lazy"
            />
            <h2 className="infoTitle">{title}</h2>
            <p className="infoDescription">{description}</p>
          </div>
      </div> 
    );
}