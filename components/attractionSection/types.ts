// 지원되는 콘텐츠 타입
export type ContentType =
  | 'attractions'
  | 'festivals'
  | 'cultureFacilities'
  | 'shopping'
  | 'dining'
  | 'accommodation';

// 즐겨찾기 정보(API에서 받은 구조를 간소화한 형태)
export interface FavoriteInfo {
  areaId: number; // API상의 지역 ID
  engName: string; // API상의 지역 영문명
  sigunguName?: string; // API상의 시·군·구 영문명 (없을 수도 있음)
  contentType: ContentType; // 콘텐츠 타입 (attractions, festivals, ...)
}

// AttractionSection에서 사용되는 하나의 카드 데이터 구조
export interface AttractionCard {
  id: string | number; // 고유 식별자(콘텐츠 ID: attractionId, festivalId 등)
  title: string; // 카드 하단에 표시할 제목
  images?: string[]; // 슬라이드용 이미지 URL 리스트 (최소 1개 이상)
  favorite?: boolean | undefined; // 즐겨찾기 여부(Favorites 섹션 용도)
  favoriteInfo?: FavoriteInfo; // 즐겨찾기 API에서 받은 추가 정보가 필요할 때 포함
}

// Gangwon-do, Gyeongju 등 하나의 "영역(Area)"에 대한 데이터
export interface AreaData {
  name: string; //영역 이름 (ex: "Gangwon-do", "Gyeongju")
  tabs?: string[]; // 클릭 가능한 시·군·구 탭 목록 (없으면 탭 영역 숨김)

  //key: 탭 이름 또는 영역 이름(탭이 없을 경우), value: 해당 탭/영역에 보여줄 카드 배열
  cards: Record<string, AttractionCard[]>;
}

// ARecommended/Favorites 섹션에 넘겨줄 props 구조
export interface AttractionSectionProps {
  title: string; // 섹션 제목 (ex: "Recommended Cultural Attractions")
  areas: AreaData[]; //여러 영역(Area) 데이터 배열
}
