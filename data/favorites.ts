import type { Dispatch, SetStateAction } from 'react';

// Regions (지역 필터)
export const regions = ['All', 'Gangwon-do', 'Gyeongju'] as const;
export type Region = (typeof regions)[number];

// Subregions for each region (시·군·구 필터)
export const subregions: Record<Region, string[]> = {
  All: [],
  'Gangwon-do': [
    'Chuncheon',
    'Wonju',
    'Gangneung',
    'Donghae',
    'Sokcho',
    'Samcheok',
    'Taebaek',
    'Hwacheon',
    'Yanggu',
    'Inje',
    'Hongcheon',
    'Hoengseong',
    'Pyeongchang',
    'Yeongwol',
    'Jeongseon',
    'Yangyang',
    'Goseong',
    'Cheorwon',
  ],
  Gyeongju: [],
  // → 앞으로 'Jeju-do': [...], 'Gyeonggi-do': [...] 등 추가 가능
};

// Categories (아코디언 항목)
export const categories = [
  'culturalAttractions',
  'festivals',
  'culturalFacilities',
  'shopping',
  'restaurants',
  'lodging',
] as const;
export type Category = (typeof categories)[number];

// 즐겨찾기 아이템 타입 정의
export interface FavoriteItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: '';
  /** All 제외, 실제 지역 값 */
  region: Exclude<Region, 'All'>;
  /** 선택된 시·군·구 (선택적) */
  subregion?: string;
  category: Category;
}

// 즐겨찾기 토글 유틸리티 함수// 즐겨찾기 토글 유틸리티 함수
export function toggleFavorite(itemId: string, setItems: Dispatch<SetStateAction<FavoriteItem[]>>) {
  setItems(prev => prev.filter(item => item.id !== itemId));
}

// 더미 즐겨찾기 데이터
export const favoriteItems: FavoriteItem[] = [
  {
    id: '1',
    title: 'Seoraksan National Park',
    description:
      'A beautiful mountain park in Gangwon-do, known for stunning peaks and hiking trails.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Sokcho',
    category: 'culturalAttractions',
  },
  {
    id: '2',
    title: 'Gangneung Danoje Festival',
    description: 'Traditional festival celebrating Dano in Gangneung with mask dances and rituals.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Gangneung',
    category: 'festivals',
  },
  {
    id: '3',
    title: 'Gyeongju National Museum',
    description: 'Museum showcasing artifacts from the Silla Kingdom in Gyeongju.',
    imageUrl: '',
    region: 'Gyeongju',
    category: 'culturalFacilities',
  },
  {
    id: '4',
    title: 'Gyeongju Traditional Market',
    description: 'Vibrant local market selling traditional foods and crafts.',
    imageUrl: '',
    region: 'Gyeongju',
    category: 'shopping',
  },
  {
    id: '5',
    title: 'Gangneung Coffee Street',
    description: 'Popular street lined with coffee shops near the beach in Gangneung.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Gangneung',
    category: 'restaurants',
  },
  {
    id: '6',
    title: 'Hanok Stay in Gyeongju',
    description: 'Traditional Korean house accommodation to experience historic ambiance.',
    imageUrl: '',
    region: 'Gyeongju',
    category: 'lodging',
  },
  {
    id: '7',
    title: 'Seoraksan National Park',
    description:
      'A beautiful mountain park in Gangwon-do, known for stunning peaks and hiking trails.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Sokcho',
    category: 'culturalAttractions',
  },
  {
    id: '8',
    title: 'Seoraksan National Park',
    description:
      'A beautiful mountain park in Gangwon-do, known for stunning peaks and hiking trails.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Sokcho',
    category: 'culturalAttractions',
  },
  {
    id: '9',
    title: 'Wonju is good',
    description:
      'A beautiful mountain park in Gangwon-do, known for stunning peaks and hiking trails.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Wonju',
    category: 'culturalAttractions',
  },
  {
    id: '10',
    title: 'WOW Wonju',
    description:
      'A beautiful mountain park in Gangwon-do, known for stunning peaks and hiking trails.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Wonju',
    category: 'culturalAttractions',
  },
  {
    id: '11',
    title: 'Seoraksan National Park',
    description:
      'A beautiful mountain park in Gangwon-do, known for stunning peaks and hiking trails.',
    imageUrl: '',
    region: 'Gangwon-do',
    subregion: 'Sokcho',
    category: 'culturalAttractions',
  },
];
