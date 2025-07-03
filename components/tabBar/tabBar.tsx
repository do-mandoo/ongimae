'use client';

import React from 'react';

interface TabBarProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, active, onChange }) => {
  return (
    <nav className='overflow-x-auto mb-4'>
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
};

export default TabBar;
