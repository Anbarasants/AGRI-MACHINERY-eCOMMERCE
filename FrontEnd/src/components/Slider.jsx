import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import slider1 from '../assets/sliderimg1.png';
import slider2 from '../assets/slider2.png'
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full" q
    >
      <SwiperSlide>
        <img src={slider1} alt="Offer 1" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="Offer 2" className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
