import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // domains: [ /* 수백 개를 일일이 쓰기엔 번거로움 */ ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 호스트네임 허용
        port: '', // 포트 제한 없애려면 빈 문자열
        pathname: '/**', // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
