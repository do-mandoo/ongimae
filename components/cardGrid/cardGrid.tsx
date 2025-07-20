'use client';

import React from 'react';
import { AttractionCard } from '../attractionSection/types';
import Card from './card';

interface CardGridProps {
  items: AttractionCard[];
  onCardClick?: (item: AttractionCard) => void;
}

export default function CardGrid({ items, onCardClick }: CardGridProps) {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto '>
      {items.map(item => (
        <Card key={item.id} item={item} onClick={() => onCardClick?.(item)} />
      ))}
    </div>
  );
}
