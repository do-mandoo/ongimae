import AudioSection from '@/components/detail/audioSection';
import Accordion from '@/components/ui/accordion';
import DirectionsSection from '@/components/detail/directionsSection';
import FestivalInfoSection from '@/components/detail/festivalInfoSection';
import FacilitiesSection from '@/components/detail/facilitiesSection';

// interface Params {
//   id: string;
// }

// export default async function DetailPage({ params: { id } }: { params: Params }) {
export default async function DetailPage() {
  // 1) 백엔드에서 JSON 형태로 불러오기 (axios 대신 fetch)
  // const res = await fetch(`https://api.example.com/detail/${id}`, {
  //   next: { revalidate: 60 }, // ISR 원하시면
  // });
  // if (!res.ok) throw new Error('Failed to fetch detail data');
  // const data: DetailPageData = await res.json();

  return (
    <div className='border-x border-neutral-400 min-h-screen pb-20'>
      <div className='p-4'>
        {/* 페이지 타이틀 */}
        {/* <h1 className='text-3xl font-bold'>{data.title}</h1> */}
        <h1 className='text-3xl font-bold'>Place Title</h1>

        {/* 2) 오디오 + 스크립트 */}
        <AudioSection
          // title={`The History and Culture of ${data.title}`}
          // audioUrl={data.audioUrl}
          // script={data.script}
          title='The History and Culture of [Place Title]'
          audioUrl='/audios/sample.mp3' // placeholder URL
          script='여기에 스크립트가 들어갑니다. 닫힌 상태가 기본 상태입니다.Housed in the Culinary School of Korea History and Culture in Gyeongju, the Laseonjae restaurant serves unique culinary delights that recreate the cuisine served in the royal courts of the Silla Kingdom. The school has a well-established reputation as a culinary institution that excels in preserving the taste and cooking styles of the past. Laseonjae was opened with the goal of promoting Isageum, the Silla-style course meal that the school developed after many years of research.
The Isageum table consists of various dishes served in the royal court of Silla: the dishes are made of nine rare, medicinal ingredients called gujinmi. The interior of Laseonjae is decorated mostly in gold, the color that defines the Silla Kingdom. Note the columns with lotus leaf patterns and other characteristics unique to banquet halls from the Silla royal court. The restaurant staff further portrays the splendor of the era by wearing traditional Shilla dress, seemingly transporting diners back in time while they enjoy an elegant and delicious meal experience.'
        />

        {/* 3) About Gyeongju Place (아코디언) */}
        <Accordion title='About Gyeongju Place'>
          {/* <p className='whitespace-pre-line text-sm leading-relaxed'>{data.about}</p> */}
          <p className='whitespace-pre-line text-sm leading-relaxed'>
            여기에 About 텍스트가 들어갑니다. 기본은 닫힌 상태입니다.Hwangnidan Street was
            originally known as “Hwangnam Keungil” near Poseok-ro, Hwangnam-dong. Its name comes
            from the combination of Hwangnam-dong and Gyeongnidan Street in Itaewon, Seoul, meaning
            the “Gyeongnidan Street of Hwangnam-dong.” The street is home to numerous restaurants,
            cafes, photo studios, and shops housed in traditional hanok buildings, making it popular
            among the younger generations in Korea. The street also demonstrates newtro aesthetics
            due to the remaining old and worn buildings built during the 1960s and the '70s.
            Hwangnidan Street is near Cheomseongdae Observatory, Daereungwon Ancient Tombs, and
            other major tourist sites, allowing the street to become a popular Gyeongju attraction
            as well.
          </p>
        </Accordion>

        {/* 4) Get Directions */}
        <DirectionsSection
          // googleMapsUrl={data.directions.googleMapsUrl}
          // kakaoMapsUrl={data.directions.kakaoMapsUrl}
          googleMapsUrl='https://maps.google.com'
          kakaoMapsUrl='https://map.kakao.com'
        />

        {/* 5) Festival Info (카드 리스트 & 모달) */}
        <FestivalInfoSection
          // items={data.festivalInfos}
          items={[
            { id: '1', image: '/images/placeholder.jpg', title: 'Festival 1' },
            { id: '2', image: '/images/placeholder.jpg', title: 'Festival 2' },
            // 최소 두 개 정도는 있어야 레이아웃이 보임
          ]}
        />

        {/* 6) Nearby Facilities */}
        <FacilitiesSection
          // facilities={data.nearbyFacilities}
          facilities={[
            { id: 'n1', type: 'cultural facilities', name: 'Facility 1', address: 'Address 1' },
            { id: 'n2', type: 'restaurant', name: 'Facility 2', address: 'Address 2' },
            { id: 'n3', type: 'cultural facilities', name: 'Facility 1', address: 'Address 3' },
            { id: 'n4', type: 'restaurant', name: 'Facility 2', address: 'Address 4' },
            { id: 'n5', type: 'cultural facilities', name: 'Facility 1', address: 'Address 5' },
            { id: 'n6', type: 'restaurant', name: 'Facility 2', address: 'Address 6' },
          ]}
        />
      </div>
    </div>
  );
}
