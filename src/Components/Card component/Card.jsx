import Slider from "react-slick";
import eAuction from "../../Assets/auction.PNG";
import Ved from "../../Assets/Ved.PNG";
import Portfolio from "../../Assets/protfolio.PNG"; // fixed spelling
import Worzo from "../../Assets/worzo.PNG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Card = () => {
  const [showModel, setShowModel] = useState(false);
  const [projectDetail, setProjectDetail] = useState();
  const projectData = [
    {
      name: "E-Auction",
      image: eAuction,
      url: "",
      role : "Full Stack",
      description : "E-Auction is an online bidding platform that allows users to place bids on listed items digitally. The goal is to provide a transparent, efficient, and remote-accessible auctioning system.",
      technology : ["React JS" , "Node JS" , "Express JS" , "MongoDB" ],
      library : ["React Slick" , "Framer Motion" , "Zod" , "Tailwind CSS" , "Multer" , "React-Toastify"]
    },
    {
      name: "Ved Tour & Travels",
      image: Ved,
      url: "https://vedtourandtravels.in/",
      role : "Frontend",
      description:"Ved Tour & Travels is a travel booking platform where users can browse tour packages, view trip details, and make bookings. It includes an admin panel to manage trips and user bookings.",
      technology:["React JS" , "Node JS" , "Express JS" , "MongoDB" ],
      library : ["Redux Toolkit" , "Zod" , "Tanstack" , "Framer Motion" , "React Slick" , "React-Toastify"]
    },
    {
      name: "Portfolio",
      image: Portfolio,
      url: "https://soft-entremet-566960.netlify.app/",
      role:"Frontend",
      description : "This is my personal portfolio website where i showcase my projects, skills, experience, and include a contact form & you can download my resume . The design is clean, modern, and responsive.",
      technology:["React JS"],
      library:["Zod" , "Framer Motion" , "React-Toastify","React-Slick","Nodemailer"]
    },
    // {
    //   name: "Worzo",
    //   image: Worzo,
    //   url: "https://worzo.in/",
    //   role:"Frontend",
    //   description:"Worzo is a website for an electric vehicle (EV) scooty company. It showcases different EV models, their specifications, features, and allows users to explore and inquire about the products.",
    //   technology:["React JS" , "Node JS" , "Express JS" , "MongoDB" ],
    //   library:["Redux Toolkit" , "React-Slick" , "React-Toastify","Zod","Framer-Motion"]
    // },
  ];

  const handleProjectData = (details) => {
    setProjectDetail(details);
    console.log(projectDetail);
    setShowModel(true);
  };
  const handleClose = () => {
    setShowModel(false);
  };

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
                  // onClick={()=>window.open(project.url,"blank")}
                  onClick={() => handleProjectData(project)}
                  className="bg-gradient-to-r from-pink-400 to-green-400 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {showModel && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative transition-all duration-300 ease-in-out">
      {/* Close Button */}
      <button
        className="absolute top-3 right-4 text-red-600 text-3xl font-bold"
        onClick={handleClose}
        title="Close"
      >
        &times;
      </button>

      {/* Project Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#c86e7e] to-[#afeb5b] bg-clip-text text-transparent border-b pb-3">
        {projectDetail.name}
      </h3>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Image + Description */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <img
            src={projectDetail.image}
            alt={projectDetail.name}
            className="rounded-xl w-full h-auto object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span> {projectDetail.description}
          </p>
        </div>

        {/* Right Section: Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Role */}
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Role:</span> {projectDetail.role}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-1 text-gray-800">Technologies:</h4>
            <ul className="flex flex-wrap gap-2">
              {projectDetail.technology.map((tech, i) => (
                <li
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Libraries */}
          <div>
            <h4 className="font-semibold mb-1 text-gray-800">Libraries Used:</h4>
            <ul className="flex flex-wrap gap-2">
              {projectDetail.library.map((lib, i) => (
                <li
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
                >
                  {lib}
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Button */}
          {projectDetail.url && (
            <div className="mt-4">
              <a
                href={projectDetail.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-green-500 text-white font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Visit Site
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default Card;
