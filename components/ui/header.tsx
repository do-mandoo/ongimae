import Image from 'next/image';
export default function Header() {
  return (
    // <div className='h-[225px]'>
    //   <div>WHILE</div>
    //   <div>YOU&rsquo;RE</div>
    //   <div>HERE</div>
    //   <div>온 김에</div>
    //   <div></div>
    // </div>
    <header>
      <Image
        src='/image_img.png'
        alt='imgae'
        width={430}
        height={225}
        className='border-x border-neutral-400'
      />
    </header>
  );
}
