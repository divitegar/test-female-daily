import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Swiper.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ReviewCard from "../Card/ReviewCard";

export default function SwiperReview({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiperHome}
      >
        {data?.["latest review"]?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ReviewCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
