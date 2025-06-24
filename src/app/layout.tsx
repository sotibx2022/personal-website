import "./globals.css";
import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container bg-red-500">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
