'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  regions,
  subregions,
  categories,
  type Region,
  type Category,
  type FavoriteItem,
  toggleFavorite,
} from '@/data/favorites';
import TabBar from '@/components/tabBar/tabBar';
import Accordion from '@/components/ui/accordion';

type Props = { initialItems: FavoriteItem[] };

export default function FavoriteClient({ initialItems }: Props) {
  const [items, setItems] = useState<FavoriteItem[]>(initialItems);

  // UI 상태
  const [region, setRegion] = useState<Region>('All');
  const [subregion, setSubregion] = useState<string>('');

  // Category별 확장 여부: reduce로 명시적 타입 지정
  const initExpanded = (): Record<Category, boolean> =>
    categories.reduce((acc, cat) => {
      acc[cat] = false;
      return acc;
    }, {} as Record<Category, boolean>);

  const [expanded, setExpanded] = useState<Record<Category, boolean>>(initExpanded);

  // region 변경 시 서브지역·아코디언 초기화
  useEffect(() => {
    const list = subregions[region] || [];
    setSubregion(list[0] ?? '');
    setExpanded(initExpanded());
  }, [region]);

  // 필터링 로직
  const filtered = items.filter(item => {
    if (region === 'All') return true;
    if ((subregions[region] || []).length > 0) {
      return item.region === region && item.subregion === subregion;
    }
    return item.region === region;
  });

  const titleMap: Record<Category, string> = {
    culturalAttractions: 'Cultural Attractions',
    festivals: 'Festivals',
    culturalFacilities: 'Cultural Facilities',
    shopping: 'Shopping',
    restaurants: 'Restaurants',
    lodging: 'Lodging',
  };

  return (
    <div className='p-4 border border-neutral-500 min-h-screen pb-20'>
      {/* <div className='p-4'> */}
      <h1 className='text-2xl font-bold mb-4 text-center'>Favorites</h1>

      {/* 1차 탭 */}
      <TabBar tabs={regions} active={region} onChange={setRegion} />

      {/* 2차 탭 (서브지역) */}
      {(subregions[region] || []).length > 0 && (
        <TabBar
          tabs={subregions[region]!}
          active={subregion}
          onChange={setSubregion}
          className='mb-6'
        />
      )}

      {/* 카테고리별 아코디언 */}
      <div className='space-y-4'>
        {categories.map(cat => {
          const group = filtered.filter(i => i.category === cat);
          return (
            <Accordion key={cat} title={`${titleMap[cat]} (${group.length})`} defaultOpen={false}>
              {group.length > 0 ? (
                <>
                  <ul className='space-y-3'>
                    {(expanded[cat] ? group : group.slice(0, 1)).map(item => (
                      <li key={item.id} className='flex gap-3'>
                        {/* 이미지 or 플레이스홀더 */}
                        {item.imageUrl ? (
                          <div className='w-20 h-20 relative rounded-md overflow-hidden'>
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className='object-cover'
                            />
                          </div>
                        ) : (
                          <div className='w-20 h-20 flex items-center justify-center bg-gray-100 rounded-md text-gray-500 text-xs'>
                            No Images
                          </div>
                        )}

                        {/* 제목·설명 */}
                        <div className='flex-1'>
                          <h3 className='font-semibold'>{item.title}</h3>
                          <p className='text-sm text-gray-600 line-clamp-3'>{item.description}</p>
                        </div>

                        {/* ★ 토글 시 목록에서 제거 */}
                        <button
                          onClick={() => toggleFavorite(item.id, setItems)}
                          className='self-start text-yellow-400'
                        >
                          ★
                        </button>
                      </li>
                    ))}
                  </ul>

                  {/* Show more */}
                  {!expanded[cat] && group.length > 1 && (
                    <button
                      onClick={() => setExpanded(prev => ({ ...prev, [cat]: true }))}
                      className='mt-2 text-blue-600 hover:underline'
                    >
                      Show more
                    </button>
                  )}
                </>
              ) : (
                <p className='text-gray-500 italic'>No favorites in this section.</p>
              )}
            </Accordion>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}
