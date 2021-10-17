import './Portfolio.css';
import React from "react";
// import React, {useState} from "react";
// import {getPhotographerName} from "../utils/utils";
import "../utils/ListAllFiles";
import {SideBody} from "./SideBody";
import {PhotoGallery} from "./PhotoGallery";
import {SocialBar} from "./SocialBar";

function Portfolio() {

  // const [photographerName] = useState(getPhotographerName());

  return (
    <div className="App flex flex-col bg-gray-700 p-12 h-screen	w-screen overflow-hidden">
      {/*<Header logo={logo} photographerName={photographerName}/>*/}
      <div className="flex flex-row gap-4 overflow-hidden">
        <SideBody/>
        <PhotoGallery/>
      </div>
      <SocialBar/>
    </div>
  );
}

export default Portfolio;
