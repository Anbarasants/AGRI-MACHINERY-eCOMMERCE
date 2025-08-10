import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleNavigate = (url) => {
    navigate(url);
  };

  const image = images[currentIndex];

  return (
    <div className="relative w-full max-w-xl mx-auto bg-white cursor-pointer p-4">
      {/* Image Card */}
      <div
        key={image.id}
        className="w-full"
        onClick={() => handleNavigate(image.url)}
      >
        <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden rounded-xl border bg-white">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Info */}
        <div className="mt-4 text-center">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 uppercase">
            {image.alt}
          </h3>
          <p className="text-lg sm:text-xl font-bold text-black mt-1">
            {image.price}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate(image.url);
            }}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded shadow"
          >
            Get Best Price
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-black p-1 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-black p-1 rounded-full shadow"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
