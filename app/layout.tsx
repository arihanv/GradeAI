import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GradeAI",
  description: "An app that helps users grade their essays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col justify-center w-full items-center py-[48px] lg:py-[128px]">
            <div className="w-full stagger-1 max-w-[900px]" data-animate>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}