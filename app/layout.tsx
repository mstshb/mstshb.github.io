import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "MST-Resume",
  description: "Mostafa Shabani's Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-[#26262d] text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
