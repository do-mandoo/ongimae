// Loading 컴포넌트 (스피너 + 텍스트)
export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <svg
        className='animate-spin h-8 w-8 mb-2 text-gray-500'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z'
        />
      </svg>
      <span>Loading favorites...</span>
    </div>
  );
}
