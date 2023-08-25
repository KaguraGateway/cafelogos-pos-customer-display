import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { Providers } from './providers';

const notoSans = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'カスタマーディスプレイ - カフェロゴス',
  description: 'カフェロゴスのカスタマーディスプレイ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
