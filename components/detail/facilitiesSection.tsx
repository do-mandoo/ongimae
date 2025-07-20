'use client';
import { Facility, FacilityType } from './types';
import { useState } from 'react';

const TABS: {
  type: FacilityType;
  label: string;
  iconName: string;
}[] = [
  { type: 'cultural facilities', label: 'cultural facilities', iconName: 'festival' },
  { type: 'shopping', label: 'Shopping', iconName: 'shopping_cart' },
  { type: 'restaurant', label: 'restaurant', iconName: 'local_dining' },
  { type: 'lodging', label: 'Lodging', iconName: 'bedroom_child' },
];

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export default function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  // 현재 활성 탭 상태
  const [activeTab, setActiveTab] = useState<FacilityType>('cultural facilities');
  // 활성 탭 타입에 따라 필터링
  const filtered = facilities.filter(f => f.type === activeTab);

  return (
    <section className='space-y-4'>
      <h2 className='text-2xl font-bold'>Nearby Facilities</h2>
      {/* 탭 바 */}
      <div className='flex gap-4 border-b'>
        {TABS.map(({ type, label, iconName }) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`flex flex-col items-center p-2 -mb-px ${
              activeTab === type ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            <span className='material-icons text-2xl'>{iconName}</span>
            <span className='text-sm mt-1'>{label}</span>
          </button>
        ))}
      </div>

      {/* 필터링된 시설 리스트 */}
      <ul className='space-y-2'>
        {filtered.map(f => {
          // 각 아이템의 타입에 맞는 아이콘 가져오기
          const { iconName } = TABS.find(t => t.type === f.type)!;
          return (
            <li key={f.id} className='flex items-center gap-2'>
              <span className='material-icons text-xl text-gray-600'>{iconName}</span>
              <div>
                <p className='font-medium'>{f.name}</p>
                <p className='text-sm text-gray-500'>{f.address}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <ul className='space-y-2'>
        {facilities.map(f => (
          <li key={f.id} className='flex items-center gap-2'>
            <Image src={ICONS[f.type]} alt={f.type} width={24} height={24} />
            <div>
              <p className='font-medium'>{f.name}</p>
              <p className='text-sm text-gray-500'>{f.address}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </section>
  );
}
