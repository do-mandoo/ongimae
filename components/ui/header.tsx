import Image from 'next/image';

const Header = () => {
  return (
    // <div className='h-[225px]'>
    //   <div>WHILE</div>
    //   <div>YOU&rsquo;RE</div>
    //   <div>HERE</div>
    //   <div>온 김에</div>
    //   <div></div>
    // </div>
    <>
      <Image src='/image_img.png' alt='imgae' width={430} height={225} />
    </>
  );
};

export default Header;
