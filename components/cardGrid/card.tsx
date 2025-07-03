'use client';

import React, { useState } from 'react';
import { AttractionCard } from '../attractionSection/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface CardProps {
  item: AttractionCard;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const images = item.images ?? [];
  const [isFavorite, setIsFavorite] = useState<boolean>(item.favorite ?? false);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
    // TODO: 서버에 업데이트 요청 or 상위 컴포넌트에 알리기
  };

  return (
    <div className='w-40 rounded-2xl shadow-md overflow-hidden relative'>
      {/* 이미지 슬라이더 또는 이미지가 없을 때 placeholder */}
      {images.length > 0 ? (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className='w-full h-32'
        >
          {item.images?.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className='relative w-full h-32'>
                <Image
                  src={src}
                  alt={`${item.title} image ${idx + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className='relative w-full h-32 bg-gray-200 flex items-center justify-center'>
          <p className='text-gray-500'>No image available</p>
        </div>
      )}

      {/* 즐겨찾기 아이콘 */}
      <button
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Unfavorite' : 'Favorite'}
        className='absolute top-2 right-2 focus:outline-none'
      >
        {isFavorite ? (
          <StarSolidIcon className='w-6 h-6 text-yellow-400' />
        ) : (
          <StarOutlineIcon className='w-6 h-6 text-white hover:text-yellow-300' />
        )}
      </button>

      {/* 제목 */}
      <div className='p-2'>
        <h4 className='text-sm font-medium truncate' title={item.title}>
          {item.title}
        </h4>
      </div>
    </div>
  );
};

export default Card;
