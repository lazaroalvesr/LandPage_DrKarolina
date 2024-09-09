import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import StyledComponentsRegistry from "../lib/register";
import { HeaderPage } from "@/_components/header";
import { FooterPage } from "@/_components/footer";

const RobotoFont = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '300', '400', '500', '700', '900']
});


export const metadata: Metadata = {
  title: "Dr Karolina",
  description: "Dr Karolina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icons/Icon.png" type="image/png" />
      </head>
      <StyledComponentsRegistry>
        <body className={`${RobotoFont.className}`}>
          <HeaderPage />
          {children}
          <FooterPage/>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
