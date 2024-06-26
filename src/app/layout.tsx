import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import { Chat } from "@/components/Chat";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Books Chatbot",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} antialiased`}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
