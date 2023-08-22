"use client";

import { Billboard } from "@/types";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface BillboardProps {
  data: Billboard[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  
  return (
    <div className="p-4 overflow-hidden sm:p-6 lg:p-8 rounded-xl">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {data.map((billboards) => (
        <SwiperSlide className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden object-fill bg-cover">
          <img
            key={billboards.id}
            src={billboards.imageUrl}
            alt={billboards.label}
            className="object-cover aspect-square md:aspect-[2.4/1]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Billboard;
