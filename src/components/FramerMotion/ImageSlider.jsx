import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import services from "../../assets/Image/ServicesPage.png";
import landing from "../../assets/Image/LandingPage.png";
import blog from "../../assets/Image/BlogPage.png";
import about from "../../assets/Image/AboutUs.png";
import blogPost from "../../assets/Image/BlogPost.png";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const images = [services, landing, blog, about, blogPost];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
      );
    }, 2000); // 4 sec slow autoplay

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]  h-[400px]"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 1,
            ease: "easeInOut", }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;