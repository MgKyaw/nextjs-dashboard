import { Metadata } from 'next';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Kyaw\'s Acme Dashboard',
    default: 'Kyaw\'s Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, build with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh',)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased'}>{children}</body>
    </html>
  );
}
