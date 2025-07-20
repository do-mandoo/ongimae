'use client';

import React from 'react';

export interface TabBarProps<T extends string> {
  tabs: readonly T[];
  active: T;
  onChange: (tab: T) => void;
  className?: string;
}

export default function TabBar<T extends string>({
  tabs,
  active,
  onChange,
  className = '',
}: TabBarProps<T>) {
  return (
    <nav className={`overflow-x-auto mb-4 ${className}`}>
      <ul className='flex space-x-2'>
        {tabs.map(tab => (
          <li key={tab}>
            <button
              className={`px-4 whitespace-nowrap cursor-pointer hover:bg-gray-200
                ${tab === active ? ' text-neutral-900 font-semibold' : ' text-gray-400 '}`}
              onClick={() => onChange(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
