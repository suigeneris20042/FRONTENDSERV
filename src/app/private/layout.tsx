
import './globals.css';

export const metadata = {
  title: 'My Full Stack App',
  description: 'Testing layout changes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer style={{ padding: '1rem', backgroundColor: '#9b192d', color: 'white' }}>
          <p>Este es el footer</p>
        </footer>
      </body>
    </html>
  );
}
