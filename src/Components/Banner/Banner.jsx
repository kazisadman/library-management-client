// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={"https://i.ibb.co/5TTDwMG/cover1.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://i.ibb.co/Kwv2fZY/cover2.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://i.ibb.co/4JS96x9/cover3.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://i.ibb.co/FzZ9Kfw/cover4.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
      </>{" "}
    </div>
  );
};

export default Banner;
