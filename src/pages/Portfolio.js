import './Portfolio.css';
import Gallery from "react-photo-gallery";
import React, {useEffect, useMemo, useState} from "react";
import { Header } from "../features/Header";
import logo from "../logo.svg";
import {getPhotographerName} from "../utils/utils";
import "../utils/ListAllFiles";
import getPhotoList from "../utils/ListAllFiles";

function Portfolio() {
  const [photos, setPhotos] = useState([]);
  const [photographerName] = useState(getPhotographerName());

  const getPhotos = useMemo(() => async () => {
    const sourceList = await getPhotoList();
    const galleryItems = sourceList.map(async src => {
      return await getImageSize(src);
    })
    return Promise.all([...galleryItems]);
  }, [])

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = await getPhotos()
      setPhotos(newPhotos);
    }
    fetchPhotos();
  }, [getPhotos]);

  function getImageSize(src){
    return new Promise(resolve => {
      const img = new Image();
      img.onload = function(){
        resolve({ width: this.width, height: this.height, src})
      };
      img.src = src;
    })
  }

  return (
    <div className="App">
      <Header logo={logo} photographerName={photographerName}/>
      <Gallery photos={photos}/>;
    </div>
  );
}

export default Portfolio;
