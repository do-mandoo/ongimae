'use client';

import Accordion from '../ui/accordion';

interface AudioSectionProps {
  title: string; // ex: "The History and Culture of Bulguksa"
  audioUrl: string; // .mp3 URL
  script: string;
}

export default function AudioSection({ title, audioUrl, script }: AudioSectionProps) {
  return (
    <section className='mb-8'>
      {/* 1) 제목 */}
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>

      {/* 2) 오디오 플레이어 */}
      <audio controls src={audioUrl} className='w-full h-10 mb-4'>
        Your browser does not support the audio element.
      </audio>

      {/* 3) 스크립트 아코디언 */}
      <Accordion title='Script' defaultOpen={false}>
        <p className='whitespace-pre-line text-sm leading-relaxed'>{script}</p>
      </Accordion>
    </section>
  );
}
