'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  // 모달 오픈 시 뒤쪽 스크롤 잠그기
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // 클릭 시 onClose 호출
  const handleOverlayClick = () => onClose();

  // 모달 내용 클릭은 이벤트 전파 차단
  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  return createPortal(
    <div
      className='fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50'
      onClick={handleOverlayClick}
    >
      <div
        className='relative w-full max-w-2xl bg-white rounded-lg shadow-lg mx-4'
        onClick={handleContentClick}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className='cursor-pointer absolute top-2 right-3 text-2xl leading-none hover:bg-gray-400 px-3 py-2 rounded-full'
        >
          &times;
        </button>

        {/* 자식으로 넘겨준 내용 */}
        {children}
      </div>
    </div>,
    document.body
  );
}
