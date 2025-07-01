import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sheraz Waseem | Portfolio",
  description:
    "The official portfolio of Sheraz Waseem - showcasing projects, skills, and contact information.",
  icons: {
    icon: "/Sheraz_Tab_Pic.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
