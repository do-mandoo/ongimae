// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// // 메인 탭 타입
// type MainTab = 'All' | 'Gangwon-do' | 'Gyeongju';

// // 카테고리 타입
// type CategoryType =
//   | 'cultural-attractions'
//   | 'festivals'
//   | 'cultural-facilities'
//   | 'shopping'
//   | 'restaurants'
//   | 'lodging';

// // 즐겨찾기 아이템 타입 (AttractionCard 확장)
// interface FavoriteItem {
//   id: string | number;
//   title: string;
//   images?: string[];
//   favorite?: boolean;
//   description?: string;
//   location?: string; // 지역 정보 추가
//   region?: 'gangwon' | 'gyeongju'; // 지역 구분 추가
// }

// // 카테고리 데이터 타입
// interface CategoryData {
//   type: CategoryType;
//   name: string;
//   count: number;
//   items: FavoriteItem[];
// }

// // Si-gun-gu 리스트 (ABC 순서)
// const siGunGuList = [
//   'Cheorwon',
//   'Chuncheon',
//   'Donghae',
//   'Gangneung',
//   'Goseong',
//   'Hongcheon',
//   'Hoengseong',
//   'Hwacheon',
//   'Inje',
//   'Jeongseon',
//   'Pyeongchang',
//   'Samcheok',
//   'Sokcho',
//   'Taebaek',
//   'Wonju',
//   'Yanggu',
//   'Yangyang',
//   'Yeongwol',
// ];

// // 더미 데이터 생성 (전체 데이터)
// const createAllDummyData = (): CategoryData[] => {
//   const categories: { type: CategoryType; name: string }[] = [
//     { type: 'cultural-attractions', name: 'Cultural Attractions' },
//     { type: 'festivals', name: 'Festivals' },
//     { type: 'cultural-facilities', name: 'Cultural Facilities' },
//     { type: 'shopping', name: 'Shopping' },
//     { type: 'restaurants', name: 'Restaurants' },
//     { type: 'lodging', name: 'Lodging' },
//   ];

//   const counts = [0, 5, 2, 3, 1, 4];

//   return categories.map((category, index) => {
//     const count = counts[index];
//     const items: FavoriteItem[] = [];

//     for (let i = 0; i < count; i++) {
//       // 지역 랜덤 할당
//       const regions = ['gangwon', 'gyeongju'] as const;
//       const region = regions[Math.floor(Math.random() * regions.length)];
//       const location =
//         region === 'gangwon'
//           ? siGunGuList[Math.floor(Math.random() * siGunGuList.length)]
//           : 'Gyeongju';

//       items.push({
//         id: `${category.type}-${i}`,
//         title: `${category.name} Item ${i + 1}`,
//         images: [],
//         favorite: true,
//         description: `This is a sample description for ${category.name} item ${
//           i + 1
//         }. It provides detailed information about the location, features, and what makes it special. The description can be up to 4 lines long to give users enough context about the item.`,
//         location,
//         region,
//       });
//     }

//     return {
//       type: category.type,
//       name: category.name,
//       count,
//       items,
//     };
//   });
// };

// // 강원도 데이터 생성
// const createGangwonDummyData = (selectedSiGunGu: string): CategoryData[] => {
//   const categories: { type: CategoryType; name: string }[] = [
//     { type: 'cultural-attractions', name: 'Cultural Attractions' },
//     { type: 'festivals', name: 'Festivals' },
//     { type: 'cultural-facilities', name: 'Cultural Facilities' },
//     { type: 'shopping', name: 'Shopping' },
//     { type: 'restaurants', name: 'Restaurants' },
//     { type: 'lodging', name: 'Lodging' },
//   ];

//   // 선택된 Si-gun-gu에 따라 다른 개수 설정
//   const getCounts = (location: string) => {
//     const locationIndex = siGunGuList.indexOf(location);
//     return [
//       locationIndex % 3, // 0-2개
//       (locationIndex + 1) % 4, // 0-3개
//       (locationIndex + 2) % 3, // 0-2개
//       (locationIndex + 3) % 4, // 0-3개
//       (locationIndex + 4) % 3, // 0-2개
//       (locationIndex + 5) % 4, // 0-3개
//     ];
//   };

//   const counts = getCounts(selectedSiGunGu);

//   return categories.map((category, index) => {
//     const count = counts[index];
//     const items: FavoriteItem[] = [];

//     for (let i = 0; i < count; i++) {
//       items.push({
//         id: `gangwon-${selectedSiGunGu}-${category.type}-${i}`,
//         title: `${selectedSiGunGu} ${category.name} ${i + 1}`,
//         images: [],
//         favorite: true,
//         description: `This is a ${category.name.toLowerCase()} located in ${selectedSiGunGu}, Gangwon-do. It offers unique experiences and features that make it a must-visit destination in the region.`,
//         location: selectedSiGunGu,
//         region: 'gangwon',
//       });
//     }

//     return {
//       type: category.type,
//       name: category.name,
//       count,
//       items,
//     };
//   });
// };

// // 경주 데이터 생성
// const createGyeongjuDummyData = (): CategoryData[] => {
//   const categories: { type: CategoryType; name: string }[] = [
//     { type: 'cultural-attractions', name: 'Cultural Attractions' },
//     { type: 'festivals', name: 'Festivals' },
//     { type: 'cultural-facilities', name: 'Cultural Facilities' },
//     { type: 'shopping', name: 'Shopping' },
//     { type: 'restaurants', name: 'Restaurants' },
//     { type: 'lodging', name: 'Lodging' },
//   ];

//   const counts = [6, 3, 4, 2, 5, 3]; // 경주 고유 개수

//   return categories.map((category, index) => {
//     const count = counts[index];
//     const items: FavoriteItem[] = [];

//     for (let i = 0; i < count; i++) {
//       items.push({
//         id: `gyeongju-${category.type}-${i}`,
//         title: `Gyeongju ${category.name} ${i + 1}`,
//         images: [],
//         favorite: true,
//         description: `This is a historic ${category.name.toLowerCase()} in Gyeongju, the ancient capital of the Silla Kingdom. Experience the rich cultural heritage and traditional atmosphere of this UNESCO World Heritage city.`,
//         location: 'Gyeongju',
//         region: 'gyeongju',
//       });
//     }

//     return {
//       type: category.type,
//       name: category.name,
//       count,
//       items,
//     };
//   });
// };

// // 즐겨찾기 토글 함수
// const toggleFavorite = (
//   itemId: string | number,
//   setData: React.Dispatch<React.SetStateAction<CategoryData[]>>
// ) => {
//   setData(prevData =>
//     prevData.map(category => ({
//       ...category,
//       items: category.items
//         .map(item => (item.id === itemId ? { ...item, favorite: !item.favorite } : item))
//         .filter(item => item.favorite), // 즐겨찾기 해제된 항목 제거
//       count: category.items.filter(item => (item.id === itemId ? !item.favorite : item.favorite))
//         .length,
//     }))
//   );
// };

// // 아코디언 컴포넌트
// const AccordionSection = ({
//   category,
//   isOpen,
//   onToggle,
//   onToggleFavorite,
// }: {
//   category: CategoryData;
//   isOpen: boolean;
//   onToggle: () => void;
//   onToggleFavorite: (itemId: string | number) => void;
// }) => {
//   return (
//     <div className='border-b border-gray-200 last:border-b-0'>
//       {/* 아코디언 헤더 */}
//       <button
//         onClick={onToggle}
//         className='w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 transition-colors'
//       >
//         <span className='font-medium text-lg'>
//           {category.name} ({category.count})
//         </span>
//         <span className='text-xl'>{isOpen ? '−' : '+'}</span>
//       </button>

//       {/* 아코디언 내용 */}
//       {isOpen && (
//         <div className='pb-4'>
//           {category.count === 0 ? (
//             <p className='text-gray-500 text-center py-4'>
//               No {category.name.toLowerCase()} in your favorites yet.
//             </p>
//           ) : (
//             <div className='space-y-3'>
//               {category.items.map(item => (
//                 <div key={item.id} className='flex gap-3 p-3 bg-gray-50 rounded-lg'>
//                   {/* 좌측 이미지 */}
//                   <div className='relative flex-shrink-0 w-20 h-16 bg-gray-200 rounded-lg overflow-hidden'>
//                     {item.images && item.images[0] ? (
//                       <Image
//                         src={item.images[0]}
//                         alt={item.title}
//                         className='w-full h-full object-cover'
//                         width={80}
//                         height={64}
//                       />
//                     ) : (
//                       <div className='w-full h-full flex items-center justify-center text-gray-400 text-xs'>
//                         No Image
//                       </div>
//                     )}

//                     {/* 즐겨찾기 별표 - 이미지 위에 위치 */}
//                     <button
//                       onClick={() => onToggleFavorite(item.id)}
//                       className='absolute top-1 right-1 w-5 h-5 flex items-center justify-center bg-white/80 rounded-full hover:bg-white transition-colors'
//                     >
//                       <span className='text-yellow-400 text-sm'>★</span>
//                     </button>
//                   </div>

//                   {/* 우측 정보 */}
//                   <div className='flex-1 min-w-0'>
//                     <h4 className='font-medium text-sm mb-1 truncate'>{item.title}</h4>
//                     {item.location && <p className='text-xs text-blue-600 mb-1'>{item.location}</p>}
//                     <p className='text-xs text-gray-600 line-clamp-3'>{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function FavoritesPage() {
//   const [activeMainTab, setActiveMainTab] = useState<MainTab>('All');
//   const [activeSubTab, setActiveSubTab] = useState<string>(siGunGuList[0]);
//   const [openAccordions, setOpenAccordions] = useState<Set<CategoryType>>(new Set());

//   // 각 탭별 데이터 상태
//   const [allData, setAllData] = useState<CategoryData[]>(() => createAllDummyData());
//   const [gangwonData, setGangwonData] = useState<CategoryData[]>(() =>
//     createGangwonDummyData(siGunGuList[0])
//   );
//   const [gyeongjuData, setGyeongjuData] = useState<CategoryData[]>(() => createGyeongjuDummyData());

//   // 강원도 Si-gun-gu 변경 시 데이터 업데이트
//   const handleSiGunGuChange = (location: string) => {
//     setActiveSubTab(location);
//     setGangwonData(createGangwonDummyData(location));
//     setOpenAccordions(new Set()); // 아코디언 모두 닫기
//   };

//   // 아코디언 토글 함수
//   const toggleAccordion = (type: CategoryType) => {
//     setOpenAccordions(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(type)) {
//         newSet.delete(type);
//       } else {
//         newSet.add(type);
//       }
//       return newSet;
//     });
//   };

//   // 현재 활성 탭에 따른 데이터 선택
//   const getCurrentData = () => {
//     switch (activeMainTab) {
//       case 'All':
//         return allData;
//       case 'Gangwon-do':
//         return gangwonData;
//       case 'Gyeongju':
//         return gyeongjuData;
//       default:
//         return allData;
//     }
//   };

//   // 즐겨찾기 토글 핸들러
//   const handleToggleFavorite = (itemId: string | number) => {
//     switch (activeMainTab) {
//       case 'All':
//         toggleFavorite(itemId, setAllData);
//         break;
//       case 'Gangwon-do':
//         toggleFavorite(itemId, setGangwonData);
//         break;
//       case 'Gyeongju':
//         toggleFavorite(itemId, setGyeongjuData);
//         break;
//     }
//   };

//   const currentData = getCurrentData();

//   return (
//     <div className='border-x border-neutral-400 min-h-screen pb-20'>
//       <div className='p-4'>
//         {/* 페이지 제목 */}
//         <h1 className='text-2xl font-bold mb-6 text-center'>Favorites</h1>

//         {/* 메인 탭바 */}
//         <div className='flex border-b mb-6'>
//           {(['All', 'Gangwon-do', 'Gyeongju'] as MainTab[]).map(tab => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveMainTab(tab);
//                 setOpenAccordions(new Set()); // 탭 변경 시 아코디언 모두 닫기
//               }}
//               className={`flex-1 py-2 px-4 text-center font-medium transition-colors ${
//                 activeMainTab === tab
//                   ? 'border-b-2 border-blue-500 text-blue-600'
//                   : 'text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Si-gun-gu 선택 (Gangwon-do일 때만 표시) */}
//         {activeMainTab === 'Gangwon-do' && (
//           <div className='mb-6'>
//             <h3 className='text-lg font-medium mb-3'>Si-gun-gu Selection</h3>
//             <div className='grid grid-cols-3 gap-2'>
//               {siGunGuList.map(location => (
//                 <button
//                   key={location}
//                   onClick={() => handleSiGunGuChange(location)}
//                   className={`py-2 px-3 text-sm rounded-lg transition-colors ${
//                     activeSubTab === location
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {location}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* 아코디언 컨텐츠 */}
//         <div className='space-y-4'>
//           {currentData.map(category => (
//             <AccordionSection
//               key={`${activeMainTab}-${activeSubTab}-${category.type}`}
//               category={category}
//               isOpen={openAccordions.has(category.type)}
//               onToggle={() => toggleAccordion(category.type)}
//               onToggleFavorite={handleToggleFavorite}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import {
//   regions,
//   subregions,
//   categories,
//   favoriteItems,
//   type Region,
//   type Category,
// } from '@/data/favorites';
// import TabBar from '@/components/tabBar/tabBar';
// import Accordion from '@/components/ui/accordion';

// export default function FavoritePage() {
//   const [region, setRegion] = useState<Region>('All');
//   const [subregion, setSubregion] = useState<string>('');
//   // 각 카테고리별 '더보기' 확장 상태
//   const [expandedMap, setExpandedMap] = useState<Record<Category, boolean>>(() => {
//     return categories.reduce(
//       (acc, cat) => ({ ...acc, [cat]: false }),
//       {} as Record<Category, boolean>
//     );
//   });

//   // region이 변경될 때 subregion 초기화
//   useEffect(() => {
//     const list = subregions[region];
//     if (list.length > 0) {
//       setSubregion(list[0]);
//     } else {
//       setSubregion('');
//     }
//     // Reset expansion when region changes
//     setExpandedMap(
//       categories.reduce((acc, cat) => ({ ...acc, [cat]: false }), {} as Record<Category, boolean>)
//     );
//   }, [region]);

//   // 표시할 아이템 필터링
//   const displayedItems = favoriteItems.filter(item => {
//     if (region === 'All') return true;
//     if (subregions[region].length > 0) {
//       return item.region === region && item.subregion === subregion;
//     }
//     return item.region === region;
//   });

//   // 카테고리 타이틀 맵
//   const titleMap: Record<Category, string> = {
//     culturalAttractions: 'Cultural Attractions',
//     festivals: 'Festivals',
//     culturalFacilities: 'Cultural Facilities',
//     shopping: 'Shopping',
//     restaurants: 'Restaurants',
//     lodging: 'Lodging',
//   };

//   return (
//     <div className='border border-neutral-500 min-h-screen pb-20'>
//       <div className='p-4'>
//         <h1 className='text-2xl font-bold mb-4'>Favorites</h1>
//         {/* 1차 지역 탭 */}
//         <TabBar tabs={regions} active={region} onChange={setRegion} />
//         {/* 2차 시·군·구 탭 (해당 지역에만) */}
//         {subregions[region].length > 0 && (
//           <TabBar
//             tabs={subregions[region]}
//             active={subregion}
//             onChange={setSubregion}
//             className='mb-6'
//           />
//         )}
//         {/* 카테고리별 아코디언 */}
//         <div className='space-y-4'>
//           {categories.map(category => {
//             const items = displayedItems.filter(item => item.category === category);
//             const title = `${titleMap[category]} (${items.length})`;

//             return (
//               <Accordion key={category} title={title} defaultOpen={false} disablePreview>
//                 {items.length > 0 ? (
//                   <>
//                     <ul className='space-y-2'>
//                       {(expandedMap[category] ? items : items.slice(0, 1)).map(item => (
//                         <li key={item.id} className='flex space-x-3'>
//                           <div className='w-20 h-20 relative flex-shrink-0'>
//                             <Image
//                               src={item?.imageUrl}
//                               alt={item.title}
//                               fill
//                               className='object-cover rounded-md'
//                             />
//                           </div>
//                           <div>
//                             <h3 className='font-semibold'>{item.title}</h3>
//                             <p className='text-sm text-gray-600'>{item.description}</p>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                     {/* 더보기 버튼 */}
//                     {!expandedMap[category] && items.length > 1 && (
//                       <button
//                         type='button'
//                         className='mt-2 text-blue-600 hover:underline'
//                         onClick={() => setExpandedMap(prev => ({ ...prev, [category]: true }))}
//                       >
//                         Show more
//                       </button>
//                     )}
//                   </>
//                 ) : (
//                   <p className='text-gray-500 italic'>No favorites in this section.</p>
//                 )}
//               </Accordion>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

//  <div className='border border-neutral-500 min-h-screen pb-20'>

import { favoriteItems } from '@/data/favorites';
import FavoriteClient from './FavoriteClient';

export default async function Page() {
  // const res = await fetch('/api/favorites', { cache: 'no-store' });
  // const items: FavoriteItem[] = await res.json();
  return <FavoriteClient initialItems={favoriteItems} />;
}
