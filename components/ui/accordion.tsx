'use client';

import { ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;

  previewLines?: number;
  disablePreview?: boolean;
}

export default function Accordion({
  title,
  defaultOpen = false,
  children,
  previewLines = 4,
  disablePreview = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // collapse-only 모드
  if (disablePreview) {
    return (
      <div className='border-b'>
        <button
          type='button'
          className='w-full text-left py-2 flex justify-between items-center'
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className='font-medium'>{title}</span>
          <span className='ml-2'>{isOpen ? '−' : '+'}</span>
        </button>
        <div className='p-2'>
          <div
            className={`text-sm leading-relaxed ${!isOpen ? 'overflow-hidden' : ''}`}
            style={
              !isOpen
                ? {
                    display: '-webkit-box',
                    WebkitLineClamp: previewLines,
                    WebkitBoxOrient: 'vertical',
                  }
                : undefined
            }
          >
            {children}
          </div>
        </div>
      </div>
    );
  }

  // 기본 preview 모드
  return (
    <div className='border-b'>
      {/* 타이틀 바 */}
      <button
        type='button'
        className='w-full text-left py-2 flex justify-between items-center'
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className='font-medium'>{title}</span>
        <span className='ml-2'>{isOpen ? '−' : '+'}</span>
      </button>
      {/* {isOpen && <div className='p-2'>{children}</div>} */}
      {/* 내용 영역: 펼치기 여부에 따라 줄 수 제한 및 더보기 버튼 */}
      <div className='p-2'>
        <div
          className={`text-sm leading-relaxed ${!isOpen ? 'overflow-hidden' : ''}`}
          style={
            !isOpen
              ? {
                  display: '-webkit-box',
                  WebkitLineClamp: previewLines,
                  WebkitBoxOrient: 'vertical',
                }
              : undefined
          }
        >
          {children}
        </div>
        {!isOpen && (
          <button onClick={() => setIsOpen(true)} className='mt-2 text-blue-600 hover:underline'>
            더보기
          </button>
        )}
      </div>
    </div>
  );
}
