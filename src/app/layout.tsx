import './globals.css';

export const metadata = {
  title: 'AMARIS: The Gaia Telemetry Network',
  description: 'Global Wildlife, Marine, and Airborne 3D Ecosystem Simulator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
