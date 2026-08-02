import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App is a...',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="min-h-screen scroll-smooth">{children}</main>
      <Footer />
    </div>
  );
}
