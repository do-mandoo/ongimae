import { MAIN_URL } from '@/app/lib/api';
import { NextRequest, NextResponse } from 'next/server';

export function OPTIONS() {
  return NextResponse.json(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { addr1, addr2 } = await req.json();
    console.log('[api/main] Request body:', { addr1, addr2 });

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error('API_KEY가 설정되지 않았습니다.');
    }

    const upstream = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      // 클라이언트가 보낸 addr1, addr2 를 그대로 전달
      body: JSON.stringify({ addr1, addr2 }),
    });
    // 우선 upstream 전체 JSON을 받고
    const raw = await upstream.json();
    // AWS Lambda Proxy 형태라면 raw에는 .body가 문자열로 존재합니다
    // 그렇지 않은 일반 API라면 body가 없고, raw이 곧 페이로드죠.

    // 여기서 실제 페이로드만 꺼내기
    const payload =
      typeof raw.body === 'string'
        ? JSON.parse(raw.body) // "body" 문자열 안의 JSON을 파싱
        : raw; // 아니면 raw 자체가 { attractions: [...] }

    // 이제 payload === { attractions: ApiAttraction[] }
    return NextResponse.json(payload, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  } catch (e) {
    console.error('[api/main] Error in POST:', e);
    return NextResponse.json(
      { error: 'Internal Server Error', detail: (e as Error).message },
      { status: 500 }
    );
  }
}
