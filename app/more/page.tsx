'use client';

import React from 'react';
import Accordion from '@/components/ui/accordion'; // 실제 경로 확인

export default function MorePage() {
  return (
    <main className='border-x border-neutral-400 flex flex-col justify-start min-h-screen pb-20'>
      {/* 헤더 */}
      <h1 className='text-center font-bold'>More</h1>
      <p className='text-center text-sm text-gray-500 mb-4'>App Settings &amp; Help</p>

      <div className='divide-y divide-gray-200 p-4'>
        {/* 1. Language Settings */}
        <Accordion title='Language Settings' disablePreview>
          <ul className='list-disc mb-2 text-sm'>
            <li>Currently, only English is available.</li>
            <li>Japanese and Chinese support will be added in the future.</li>
            <li>
              (Note: This is for informational purposes only; no actual selection feature is
              provided.)
            </li>
          </ul>
          <select disabled defaultValue='en' className='w-full p-2 border rounded text-sm'>
            <option value='en'>English</option>
            <option value='ko'>한국어</option>
          </select>
          <p className='mt-1  text-gray-400'>(추후 Japanese·Chinese 지원 예정—현재 선택 불가)</p>
        </Accordion>

        {/* 2. How to Use Audio Guided */}
        <Accordion title='How to Use Audio Guided' disablePreview>
          <ul className='list-disc ml-5 text-sm'>
            <li>헤드폰을 연결한 뒤 play/pause 버튼을 사용하세요.</li>
            <li>배경 소음이 많다면 볼륨을 최대치로 설정해주세요.</li>
          </ul>
        </Accordion>

        {/* 3. About This Web */}
        <Accordion title='About This Web' disablePreview>
          <ul className='list-disc ml-5'>
            <li>Ongime은 웹 앱입니다.</li>
            <li>브라우저에서 바로 사용—설치 불필요.</li>
          </ul>
        </Accordion>

        {/* 4. Send Feedback */}
        <Accordion title='Send Feedback' disablePreview>
          <button
            onClick={() => (window.location.href = 'mailto:feedback@ongime.com')}
            className='cursor-pointer mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm'
          >
            피드백 보내기
          </button>
        </Accordion>

        {/* 5. Navigation Tips */}
        <Accordion title='Navigation Tips' disablePreview>
          <p className='text-sm'>
            “Open in Google or Kakao Maps” 클릭 시 목적지가 자동으로 입력됩니다.
          </p>
        </Accordion>
      </div>

      {/* 푸터 */}
      <div className='mt-6 text-center text-xs text-gray-400'>© 2025 온김에</div>
    </main>
  );
}
