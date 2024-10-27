import "./globals.css";
import { Inter } from "next/font/google";
import { CleanupProvider } from "@/components/providers/cleanup-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Palmate - Connect, Support, Thrive",
  description: "Schedule meetups, find companions for various activities, and enjoy social time with other women in your area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <CleanupProvider>{children}</CleanupProvider>
      </body>
    </html>
  );
}
