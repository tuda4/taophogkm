import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  images: string[]
}

const Slider = ({images}: Props) => {
  function createSlide(props: string) {
    return (
      <SwiperSlide key={props} >
        <img className="object-cover rounded-lg" src={props} alt="" />
      </SwiperSlide>
    );
  }
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {images.map((image: string) => createSlide(image))}
    </Swiper>
  );
};

export default Slider;
