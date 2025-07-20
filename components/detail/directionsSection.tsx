// components/detail/DirectionsSection.tsx
'use client';

interface DirectionsProps {
  googleMapsUrl: string;
  kakaoMapsUrl: string;
}

export default function DirectionsSection({ googleMapsUrl, kakaoMapsUrl }: DirectionsProps) {
  return (
    <section className='space-y-2'>
      <h2 className='text-2xl font-bold'>Get Directions</h2>
      <div className='flex gap-4'>
        <a
          href={googleMapsUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          Open in Google Maps
        </a>
        <a
          href={kakaoMapsUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='px-4 py-2 bg-yellow-400 text-black rounded'
        >
          Open in Kakao Maps
        </a>
      </div>
    </section>
  );
}
