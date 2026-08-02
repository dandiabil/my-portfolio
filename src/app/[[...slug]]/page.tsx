import Banner from '@/components/Banner/Banner';
import '../../index.css';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
