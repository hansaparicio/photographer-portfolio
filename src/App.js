import './App.css';
import Gallery from "react-photo-gallery";
import {useEffect, useState} from "react";
import {Header} from "./features/Header";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const photoCount = 20;
    const newPhotos = [...Array(photoCount).keys()].map(_ => {
      const width = Math.floor(Math.random() * (400 - 300) + 300);
      const height = Math.floor(Math.random() * (400 - 100) + 100);
      const src = `https://source.unsplash.com/${width}x${height}/?portrait`
      return { width, height, src };
    })
    setPhotos(newPhotos);
  }, []);
  return (
    <div className="App">
      <Header/>
      <Gallery photos={photos}/>;
    </div>
  );
}

export default App;
