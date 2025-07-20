const SearchPage = () => {
  return (
    <div className='border-x border-neutral-400 flex flex-col justify-start min-h-screen pb-20 '>
      <div className='p-4'>
        <h1>search page</h1>
        <div className='flex flex-col'>
          <input
            type='text'
            value=''
            placeholder='Enter keyword'
            className='w-full h-10 px-3 rounded-lg bg-gray-200 placeholder-gray-500 focus:outline-none'
          />
          <button className='m-4 cursor-pointer mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm'>
            search
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
