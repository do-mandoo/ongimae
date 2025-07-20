'use client';

import AttractionSection from '@/components/attractionSection/attractionSection';
import { AttractionCard, AttractionSectionProps } from '@/components/attractionSection/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/modal/modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { ApiAttraction, fetchMainAttractions } from './lib/actions';

// 더미 데이터 생성
const defaultCards: AttractionCard[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Guryongsa Temple',
  images: [],
}));
const chuncheonCards: AttractionCard[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Soyangho Lake',
  images: [],
}));
const bulguksaCards: AttractionCard[] = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Bulguksa Temple',
  images: [],
}));

export default function HomePage() {
  const [selected, setSelected] = useState<AttractionCard | null>(null);
  const [wonjuCards, setWonjuCards] = useState<AttractionCard[]>([]);

  // POST로 addr1, addr2 전송
  useEffect(() => {
    fetchMainAttractions('Gangwon-do', 'Wonju-si')
      .then((data: ApiAttraction[]) => {
        const cards: AttractionCard[] = data.map((attr, idx) => ({
          id: idx,
          title: attr.name,
          images: [attr.image],
          // address는 모달에서만 보여줄 예정
          address: attr.address,
        }));
        setWonjuCards(cards);
      })
      .catch(err => {
        console.error('원주 API 호출 중 에러:', err);
      });
  }, []);

  const sections: AttractionSectionProps[] = [
    {
      title: 'Recommended\nCultural Attractions',

      areas: [
        {
          name: 'Gangwon-do',
          tabs: [
            'Cheorwon',
            'Chuncheon',
            'Donghae',
            'Gangneung',
            'Goseong',
            'Hoengseong',
            'Hongcheon',
            'Hwacheon',
            'Inje',
            'Jeongseon',
            'Pyeongchang',
            'Samcheok',
            'Sokcho',
            'Taebaek',
            'Wonju',
            'Yanggu',
            'Yangyang',
            'Yeongwol',
          ],
          cards: {
            Cheorwon: defaultCards,
            Chuncheon: chuncheonCards,
            Donghae: defaultCards,
            Gangneung: defaultCards,
            Goseong: defaultCards,
            Wonju: wonjuCards,
          },
        },
        {
          name: 'Gyeongju',
          cards: { Gyeongju: bulguksaCards },
        },
      ],
    },
    {
      title: 'Favorite\nCultural Attractions',
      areas: [
        {
          name: 'Gangwon-do',
          tabs: [
            'Cheorwon',
            'Chuncheon',
            'Donghae',
            'Gangneung',
            'Goseong',
            'Hoengseong',
            'Hongcheon',
            'Hwacheon',
            'Inje',
            'Jeongseon',
            'Pyeongchang',
            'Samcheok',
            'Sokcho',
            'Taebaek',
            'Wonju',
            'Yanggu',
            'Yangyang',
            'Yeongwol',
          ],
          cards: {
            Cheorwon: defaultCards.map(c => ({ ...c, favorite: true })),
            Chuncheon: chuncheonCards.map(c => ({ ...c, favorite: true })),
            Donghae: defaultCards,
            Gangneung: defaultCards.map(c => ({ ...c, favorite: true })),
            Goseong: defaultCards,
          },
        },
        {
          name: 'Gyeongju',
          cards: { Gyeongju: bulguksaCards.map(c => ({ ...c, favorite: true })) },
        },
      ],
    },
  ];

  // 모달에 렌더링할 유효한 이미지 리스트 필터
  const validModalImages =
    selected?.images?.filter(src => typeof src === 'string' && src.length > 0) ?? [];

  return (
    <div className='border-x border-neutral-400 flex flex-col justify-center min-h-screen pb-20'>
      <div className='p-4'>
        {sections.map(({ title, areas }) => (
          <div key={title} className=''>
            <AttractionSection
              key={title}
              title={title}
              areas={areas}
              onCardClick={item => setSelected(item)}
            />
          </div>
        ))}
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          {/* 이미지 슬라이더 (빈 src는 걸러낸 validModalImages 사용) */}
          {validModalImages.length > 0 ? (
            <div className='w-full h-64 overflow-hidden'>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className='w-full h-full'
              >
                {validModalImages.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className='relative w-full h-64'>
                      <Image
                        src={src}
                        alt={`${selected.title} ${idx + 1}`}
                        className='object-cover w-full h-full'
                        width={550}
                        height={250}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className='w-full h-64 bg-gray-200 flex items-center justify-center'>
              <p className='text-gray-500'>No image available</p>
            </div>
          )}

          {/* 모달 내 설명 + 주소 */}
          <div className='p-4 space-y-2'>
            <h2 className='text-xl font-bold'>{selected.title}</h2>
            <p className='text-gray-700'>address: {selected.address}</p>
          </div>

          {/* 상세 페이지 이동 버튼 */}
          <div className='p-4 text-right'>
            {/* <Link href={`/detail/${selected.id}`}> */}
            <Link href='/detail'>
              <span className='inline-flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>
                See More Details →
              </span>
            </Link>
          </div>
        </Modal>
      )}
    </div>
  );
}
