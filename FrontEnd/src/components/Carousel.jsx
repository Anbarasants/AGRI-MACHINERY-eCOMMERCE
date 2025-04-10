import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
      id: 1,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/2/390456434/BO/JK/NY/10027678/whatsapp-image-2024-02-20-at-18-55-37-500x500.jpeg",
      alt: "Agriculture Battery Sprayer",
      url: "/product/sprayer-1",
      price: "₹2,090 / Piece",
    },
    {
      id: 2,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/4/408635619/XI/VQ/OB/10027678/agriculture-sprayer-motor-110psi-earth-500x500.jpeg",
      alt: "Agriculture Sprayer Motor 110 PSI",
      url: "/product/sprayer-motor",
      price: "₹3,200 / Piece",
    },
    {
      id: 3,
      src: "https://5.imimg.com/data5/SELLER/Default/2023/1/FW/JN/NG/10027678/product-jpeg-500x500.png",
      alt: "Battery Sprayer with Charger",
      url: "/product/battery-sprayer",
      price: "₹1,999 / Piece",
    },
    {
      id: 4,
      src: "https://5.imimg.com/data5/SELLER/Default/2023/1/UR/LS/BM/10027678/1-hole-pato-nozzle-500x500.jpg",
      alt: "1-Hole Pato Nozzle",
      url: "/product/pato-nozzle",
      price: "₹150 / Piece",
    },
    {
      id: 5,
      src: "https://5.imimg.com/data5/SELLER/Default/2023/1/HT/ZU/HM/10027678/sprayer-battery-6-month-guarantee-sisa-12v14ah-500x500.jpg",
      alt: "Sprayer Battery (6 Month Guarantee)",
      url: "/product/sprayer-battery",
      price: "₹2,500 / Piece",
    },
    {
      id: 6,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/3/405659476/CW/MU/KG/10027678/picsart-24-03-30-16-03-20-618-500x500.jpg",
      alt: "Heavy Duty Sprayer",
      url: "/product/heavy-duty-sprayer",
      price: "₹2,800 / Piece",
    },
    {
      id: 7,
      src: "https://5.imimg.com/data5/SELLER/Default/2023/1/BA/FT/OQ/10027678/1-7-a-tanneng-sprayer-battery-charger-500x500.jpg",
      alt: "Tanneng Sprayer Battery Charger",
      url: "/product/tanneng-charger",
      price: "₹800 / Piece",
    },
    {
      id: 8,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/12/471651000/VT/IX/IX/10027678/1732602619862-watmrka-500x500.jpg",
      alt: "Watermark Sprayer",
      url: "/product/watermark-sprayer",
      price: "₹3,500 / Piece",
    },
  ];
  

  
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-full min-w-full cursor-pointer"
            onClick={() => handleNavigate(image.url)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />

            {/* Black Overlay with Product Details */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
              <h3 className="text-lg font-bold">{image.alt}</h3>
              <p className="text-sm">{image.price}</p>
              <button
                onClick={() => handleNavigate(image.url)}
                className="mt-2 bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
              >
                Get Now
              </button>
            </div>
          </div>
        ))}
      </div>

      

      {/* Dots Navigation */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
