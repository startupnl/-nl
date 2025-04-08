
import '../globals.css';

export const metadata = {
  title: 'Startups.nl',
  description: 'Platform voor de Nederlandse startup scene',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
