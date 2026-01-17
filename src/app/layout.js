import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/lib/redux/provider";
import ThemeProvider from "@/providers/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prabhat Kumar | MERN Stack & Frontend Developer",
  description:
    "Prabhat Kumar is a MERN Stack and Frontend Developer specializing in React and Next.js. Experienced in building high-performance, scalable web applications with a strong focus on UI/UX, performance optimization, and production-ready solutions.",
  keywords: [
    "Prabhat Kumar",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "React Portfolio",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Prabhat Kumar" }],
  creator: "Prabhat Kumar",
  metadataBase: new URL("https://prabhatkumar.vercel.app"), // replace with your domain
  openGraph: {
    title: "Prabhat Kumar | MERN Stack & Frontend Developer",
    description:
      "Portfolio of Prabhat Kumar, a MERN Stack and Frontend Developer building fast, scalable, and user-focused web applications using React and Next.js.",
    url: "https://prabhatkumar.vercel.app",
    siteName: "Prabhat Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
 
  robots: {
    index: true,
    follow: true,
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
          <ReduxProvider>
            <ThemeProvider>
              {children}

            </ThemeProvider>
            </ReduxProvider>
      </body>
    </html>
  );
}




