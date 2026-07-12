import type { Metadata, Viewport } from "next";
import type React from "react";
import { RegisterServiceWorker } from "./register-sw";
import "./globals.css";

export const metadata: Metadata = {
  title: "En català",
  description: "Learn practical A1 and A2 Catalan vocabulary with flashcards and pronunciation.",
  applicationName: "En català",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "En català",
    description: "Learn the Catalan you’ll actually use.",
    type: "website"
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#b8322b"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <RegisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
