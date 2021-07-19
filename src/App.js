import './App.css';
import Gallery from "react-photo-gallery";
import {useEffect, useState} from "react";
import {Header} from "./features/Header";
import logo from "./logo.svg";
import {getPhotographerName, RandomInteger} from "./utils/utils";

function App() {
  const [photos, setPhotos] = useState([]);
  const [photographerName] = useState(getPhotographerName());

  const getRandomPhotos = photoCount => [...Array(photoCount).keys()].map(_ => {
    const [width, height] = [RandomInteger(400, 300), RandomInteger(400, 100)];
    const src = `https://source.unsplash.com/${width}x${height}/?portrait`
    return {width, height, src};
  });

  useEffect(() => {
    const photoCount = 20;
    const newPhotos = getRandomPhotos(photoCount)
    setPhotos(newPhotos);
  }, []);

  return (
    <div className="App">
      <Header logo={logo} photographerName={photographerName}/>
      <Gallery photos={photos}/>;
    </div>
  );
}

export default App;
