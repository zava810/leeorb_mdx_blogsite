import './globals.css';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

import { ing115_font } from './lifonts/lifonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://mdx8.vercel.app'),
  alternates: { canonical: '/', },
  title: { default: 'vimAl kumar', template: '%s | vimAl kumar', },
  description: 'frontend developer, optimist, community builder.',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${ing115_font.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
			<main className="max-w-[60ch] mx-auto w-full space-y-6"> {children} </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: '@etphor', url: 'https://x.com/etphor' },
    { name: 'fAcebook', url: 'https://www.fb.com/ztrabc' },
    { name: 'github', url: 'https://github.com/zava8' },
  ];
  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
		  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 
		  hover:text-blue-500 transition-colors duration-200" >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
