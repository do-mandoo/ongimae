'use client';

import React, { useState } from 'react';
import { AttractionSectionProps, AreaData } from './types';
import TabBar from '../tabBar/tabBar';
import CardGrid from '../cardGrid/cardGrid';

const AttractionSection: React.FC<AttractionSectionProps> = ({ title, areas }) => {
  // 각 영역별 활성 탭 상태 관리 (Area.name을 키로 사용)
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>(
    areas.reduce((acc, area) => {
      acc[area.name] = area.tabs?.[0] ?? area.name;
      return acc;
    }, {} as Record<string, string>)
  );

  // 탭 변경 핸들러
  const handleTabChange = (areaName: string, tab: string) => {
    setActiveTabs(prev => ({ ...prev, [areaName]: tab }));
  };

  return (
    <section>
      <h2 className='text-xl font-bold mb-4 m-auto text-center whitespace-pre-line'>{title}</h2>
      {areas.map((area: AreaData) => {
        const { name, tabs, cards } = area;
        const activeTab = activeTabs[name];
        const items = cards[tabs ? activeTab : name] || [];

        return (
          <div key={name} className='mb-8'>
            <h3 className='text-xl mb-2 '>{name}</h3>

            {/* 탭바: tabs가 정의된 경우에만 렌더 */}
            {tabs && (
              <TabBar tabs={tabs} active={activeTab} onChange={tab => handleTabChange(name, tab)} />
            )}

            {/* 카드 그리드 */}
            <CardGrid items={items} />
          </div>
        );
      })}
    </section>
  );
};

export default AttractionSection;
