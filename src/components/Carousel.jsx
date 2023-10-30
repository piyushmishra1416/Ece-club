import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Create this file for custom styling

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselData = [
    {
      imageUrl: '/Website people Images/2021 Batch/Harsh.jpg',
      message: 'Message 1',
    },
    {
      imageUrl: '/Website people Images/2022 Batch/Amritha.jpg',
      message: 'Message 2',
    },
    {
      imageUrl: '/Website people Images/2021 Batch/Harsh.jpg',
      message: 'Message 1',
    },
    {
      imageUrl: '/Website people Images/2022 Batch/Amritha.jpg',
      message: 'Message 2',
    },
    // Add more data as needed
  ];

  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.imageUrl} alt={`Slide ${index}`} />
          <div className="carousel-message">{item.message}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
