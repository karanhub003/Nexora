import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${sora.variable} ${jakarta.variable}  min-h-screen flex flex-col`}>
        <header>
       <div className="announcementBarContainer bg-black w-full">
         <AnnouncementBar/>
       </div>
        <div className="navBarContainer bg-white w-full border-b border-[#E4E0DA]  ">
          <NavBar/>
        </div>
        </header>
       <main className="grow">
         {children}
       </main>
        <footer className="bg-black w-full ">
          <Footer/>
        </footer>

        </body>
    </html>
  );
}
