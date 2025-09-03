import "./globals.css";
export const metadata = {
  title: "Binayaraj Soti - Next.js E-commerce Developer from Nepal",
  description: "I'm Binayaraj Soti, a Next.js e-commerce developer who transforms your ideas into fast, modern, and user-friendly websites from Nepal.",
  keywords: "Next.js developer, e-commerce developer, web developer Nepal, React developer",
  authors: [{ name: "Binayaraj Soti" }],
  openGraph: {
    title: "Binayaraj Soti - Next.js E-commerce Developer",
    description: "Transforming ideas into fast, modern, and user-friendly websites from Nepal",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="container">
        {children}
      </body>
    </html>
  );
}