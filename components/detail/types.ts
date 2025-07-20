export interface FestivalCard {
  id: string | number;
  image: string; // 카드에 쓸 썸네일 URL
  title: string;
}

export type FacilityType = 'cultural facilities' | 'shopping' | 'restaurant' | 'lodging';

export interface Facility {
  id: string | number;
  type: FacilityType;
  name: string;
  address: string;
}

export interface DetailPageData {
  id: string | number;
  title: string; // ex: "Bulguksa Temple"
  audioUrl: string; // .mp3 파일 URL
  script: string; // 스크립트 텍스트
  about: string; // About Gyeongju Place 텍스트
  directions: {
    googleMapsUrl: string;
    kakaoMapsUrl: string;
  };
  festivalInfos: FestivalCard[];
  nearbyFacilities: Facility[];
}
