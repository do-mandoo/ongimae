'use client';
// Error 컴포넌트 (간단 Retry 버튼)
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center'>
      <p className='mb-4 text-red-500'>Failed to load favorites.</p>
      <button onClick={() => reset()} className='px-4 py-2 bg-blue-500 text-white rounded'>
        Retry
      </button>
    </div>
  );
}
