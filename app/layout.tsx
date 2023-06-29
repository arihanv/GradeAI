import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Tools from "@/components/Tools/tools";
import Suggestions from "@/components/suggestions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grade AI",
  description: "An app that helps users grade their essays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col-reverse items-center md:items-start gap-5 md:flex-row justify-center py-[48px] lg:py-[128px] p-6">
            <div className="max-w-[650px] w-full stagger-1" data-animate>{children}</div>
            <div className="flex flex-row md:flex-col items-start gap-5 justify-center w-[150px] stagger-1" data-animate>
              <Tools />
              <Suggestions />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
