// components/detail/FestivalInfoSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/modal/modal';
import { FestivalCard } from './types';

interface Props {
  items: FestivalCard[];
}

export default function FestivalInfoSection({ items }: Props) {
  const [selected, setSelected] = useState<FestivalCard | null>(null);

  return (
    <section className='space-y-4'>
      <h2 className='text-2xl font-bold'>Festival Info</h2>

      {/* 카드 그리드 */}
      <div className='grid grid-cols-2 gap-4'>
        {items.map(item => (
          <div key={item.id} className='cursor-pointer' onClick={() => setSelected(item)}>
            <div className='relative w-full h-32 bg-gray-200'>
              <Image src={item.image} alt={item.title} fill className='object-cover' />
            </div>
            <p className='mt-2 text-sm'>{item.title}</p>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div className='space-y-4'>
            <Image
              src={selected.image}
              alt={selected.title}
              width={600}
              height={360}
              className='object-cover rounded'
            />
            <h3 className='text-xl font-bold'>{selected.title}</h3>
            <button
              onClick={() => {
                /* 필요시 상세 페이지로 라우팅 */
              }}
              className='mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'
            >
              View Festival Details →
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
