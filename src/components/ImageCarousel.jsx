'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination]);

const ImageCarousel = ({ images }) => {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlideChange = () => {
    if (swiper) {
      setCurrentIndex(swiper.activeIndex);
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-64 my-5 gap-2">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={setSwiper}
        onSlideChange={onSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64">
              <Image
                src={image}
                alt={`Image ${index + 1} of ${images.length}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center text-sm text-gray-600">
        <p className=' text-center text-gray-400'>Проведите пальцем вправо или влево</p>
        {/* {`${currentIndex + 1} из ${images.length}`} */}
      </div>
    </div>
  );
};

export default ImageCarousel;
