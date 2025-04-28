import React from "react";
import Slider from "react-slick";
import eAuction from "../../Assets/auction.PNG";
import Ved from "../../Assets/Ved.PNG";
import Portfolio from "../../Assets/protfolio.PNG"; // fixed spelling
import Worzo from "../../Assets/worzo.PNG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  const projectData = [
    {
      name: "E-Auction",
      image: eAuction,
      url:""
    },
    {
      name: "Ved Tour & Travels",
      image: Ved,
      url:"https://vedtourandtravels.in/"
    },
    {
      name: "Portfolio",
      image: Portfolio,
      url:"https://soft-entremet-566960.netlify.app/"
    },
    {
      name: "Worzo",
      image: Worzo,
      url:"https://worzo.in/"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="w-full max-w-xl mx-auto py-10 px-4">
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index} className="p-4">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <button
                onClick={()=>window.open(project.url,"blank")}
                className="bg-gradient-to-r from-pink-400 to-green-400 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
