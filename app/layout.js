import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mayur Hase - Cloud & DevOps Engineer | AWS Infrastructure & Automation Expert",
  description: "Cloud & DevOps Engineer with 3.5+ years of experience in AWS infrastructure, containerization, CI/CD automation, and scalable systems. Specializing in Linux, automation, and full-stack development.",
  keywords: "Cloud Engineer, DevOps Engineer, AWS, Infrastructure, Automation, CI/CD, Linux, Docker, Kubernetes, Terraform, Mayur Hase",
  authors: [{ name: "Mayur Hase" }],
  creator: "Mayur Hase",
  publisher: "Mayur Hase",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mayur-hase-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mayur Hase - Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS infrastructure, automation, and scalable systems.",
    url: "https://mayur-hase-portfolio.vercel.app",
    siteName: "Mayur Hase Portfolio",
    images: [
      {
        url: "/cloud_devops_engineer.jpeg",
        width: 1200,
        height: 630,
        alt: "Mayur Hase - Cloud & DevOps Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Hase - Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS infrastructure, automation, and scalable systems.",
    images: ["/cloud_devops_engineer.jpeg"],
    creator: "@mayur_hase",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

