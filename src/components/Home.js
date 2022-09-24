import React, {useState, useEffect } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {

    const [allAnime, setAllAnime] = useState([]);

  useEffect(() => {
    fetch("https://hidden-mountain-30566.herokuapp.com/anime/get")
    .then((res) => res.json())
    .then((res) => setAllAnime(res))
    .catch((error) => console.log("there was an error retrieving your data.", error));
  }, []);


  const renderAllAnime = () => {
    return allAnime.map((anime) =>{
      return (
        <div className= "carousel-item-container">
          <div className="title">{anime.title}</div>
          <div className= 'description'>{anime.description}</div>
          <img src={anime.image} alt="anime" />
        </div>
      )
    })
  };

  return (
    <div>
      <div className="header">
        Welcome to Silverhawk Blogs, a site where you can find anime everyone's talking about, and give your thoughts! Below are the currently trending Anime:
        </div>
        <Carousel className="carousel"
        infiniteLoop
        useKeyboardArrows
        autoPlay={false}
        showThumbs={false}
      >
        {renderAllAnime()}
      </Carousel>
    </div>
  )
}
