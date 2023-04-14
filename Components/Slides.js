import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import styles from "./Slides.module.css";
import m1 from "../assets/mountains1.webp";
import m2 from "../assets/mountains2.webp";
import m3 from "../assets/mountains3.webp";

const Slides = () => {
  return (
    <Swiper
      className={styles.container}
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img className={styles.img} src={m1} alt="mountains" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.img} src={m2} alt="mountains" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.img} src={m3} alt="mountains" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
