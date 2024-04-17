export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, analytics, team }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
