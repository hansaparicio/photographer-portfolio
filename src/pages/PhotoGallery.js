import React, {useEffect, useMemo, useState} from "react";
import getPhotoList from "../utils/ListAllFiles";
import Gallery from "react-photo-gallery";

export function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

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

  function getImageSize(src) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = function () {
        resolve({width: this.width, height: this.height, src})
      };
      img.src = src;
    })
  }

  return <div className="overflow-y-auto">
    <Gallery photos={photos}/>;
  </div>;
}
