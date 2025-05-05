import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Henry Odunsi | Profile Card",
  description:
    "Welcome to the profile card of Henry Adetunji Odunsi – a passionate frontend developer skilled in Next.js, React, bootstrap, Tailwind CSS, and Framer Motion. Explore projects, skills, and experience.",
  keywords: [
    "Henry Adetunji Odunsi",
    "Henry Odunsi",
    "frontend developer profile",
    "frontend developer Nigeria",
    "Next.js developer",
    "Tailwind CSS",
    "Bootstrap",
    "EEE",
    "Framer Motion",
    "React developer",
    "web development portfolio",
  ],
  authors: [{ name: "Henry Adetunji Odunsi" }],
  creator: "Henry Adetunji Odunsi",
  openGraph: {
    title: "Henry Adetunji Odunsi | Frontend Developer Profile Card",
    description:
      "Explore the work and skills of frontend developer Henry Odunsi. Built with Next.js, Tailwind CSS, and Framer Motion.",
    url: "https://henry-profile.vercel.app",
    siteName: "Henry Odunsi Profile Card",
    images: [
      {
        url: "/images/Nrytech.jpg",
        width: 1200,
        height: 630,
        alt: "Henry Adetunji Odunsi Profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Adetunji Odunsi | Frontend Developer Profile Card",
    description:
      "Frontend engineer with a flair for building sleek, interactive UIs using modern web technologies.",
    images: ["/images/Nrytech.jpg"],
    creator: "@HENRYODUNSI5",
  },
  icons: {
    icon: "/images/Nrytech.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
