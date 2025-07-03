import Header from '@/components/ui/header';

import AttractionSection from '@/components/attractionSection/attractionSection';
import { AttractionCard, AttractionSectionProps } from '@/components/attractionSection/types';

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

const sections: AttractionSectionProps[] = [
  {
    title: 'Recommended\nCultural Attractions',

    areas: [
      {
        name: 'Gangwon-do',
        tabs: ['Cheorwon', 'Chuncheon', 'Donghae', 'Gangneung', 'Goseong'],
        cards: {
          Cheorwon: defaultCards,
          Chuncheon: chuncheonCards,
          Donghae: defaultCards,
          Gangneung: defaultCards,
          Goseong: defaultCards,
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
        tabs: ['Cheorwon', 'Chuncheon', 'Donghae', 'Gangneung', 'Goseong'],
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
export default function HomePage() {
  return (
    <div className='border border-neutral-500 flex flex-col justify-center min-h-screen pb-20'>
      <Header />
      <div className='p-4'>
        {sections.map(({ title, areas }) => (
          <div key={title} className=''>
            <AttractionSection key={title} title={title} areas={areas} />
          </div>
        ))}
      </div>
    </div>
  );
}
