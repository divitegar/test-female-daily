import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Swiper.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import ProductCard from "../Card/ProductCard";

export default function SwiperTrending({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
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
        {data?.data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="mb-10">
              <ProductCard
                key={index}
                image={item?.image}
                rating={item?.rating}
                name={item?.name}
                description={item?.desc}
                alt={item?.name}
                total={item?.total}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
