import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Front End Developer | Dandi Izzulhaq',
  description: 'My App is a...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,600;1,400;1,600&family=Krona+One&family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <div className="scroll-smooth" id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
