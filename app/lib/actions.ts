export interface ApiAttraction {
  name: string;
  image: string;
  address: string;
}

// addr1과 addr2를 body에 담아 POST 요청
export async function fetchMainAttractions(addr1: string, addr2: string): Promise<ApiAttraction[]> {
  const res = await fetch('/api/main', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ addr1, addr2 }),
  });
  console.log(res, 'res를 보자');

  if (!res.ok) {
    throw new Error(`API 호출 실패: ${res.statusText}`);
  }

  const json = (await res.json()) as { attractions: ApiAttraction[] };
  console.log(json, 'data를볼까');

  return json.attractions;
}
