import type { Metadata } from "next";
import "./globals.css";
import StyledJsxRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import LayoutPage from "@/components/Layout";

import { Readex_Pro } from "next/font/google";
import { LenisProvider } from "@/components/Layout/LenisProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// const readex_pro = Readex_Pro({
//   weight: ["400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-readex-pro",
// });

// export const metadata: Metadata = {
//   title: "GrabWay — Grab Money on the way",
//   description:
//     "GrabWay was created to provide drivers, gig workers, and frequent travelers with the opportunity to monetize their daily commutes. By harnessing advanced blockchain technology and GPS tracking, GrabWay transforms ordinary travel into a rewarding experience. Whether you're driving for work or moving around the city, GrabWay allows you to convert your movements into valuable rewards, offering a seamless and innovative way to earn as you go.",
//   openGraph: {
//     type: "website",
//     url: "https://grabway.site/",
//     title: "GrabWay — Grab Money on the way",
//     description:
//       "GrabWay was created to provide drivers, gig workers, and frequent travelers with the opportunity to monetize their daily commutes. By harnessing advanced blockchain technology and GPS tracking, GrabWay transforms ordinary travel into a rewarding experience. Whether you're driving for work or moving around the city, GrabWay allows you to convert your movements into valuable rewards, offering a seamless and innovative way to earn as you go.",
//     images: [
//       {
//         url: "https://grabway.site/images/banner.png",
//         width: 800,
//         height: 600,
//         alt: "GrabWay Banner",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "GrabWay — Grab Money on the way",
//     description:
//       "GrabWay was created to provide drivers, gig workers, and frequent travelers with the opportunity to monetize their daily commutes. By harnessing advanced blockchain technology and GPS tracking, GrabWay transforms ordinary travel into a rewarding experience. Whether you're driving for work or moving around the city, GrabWay allows you to convert your movements into valuable rewards, offering a seamless and innovative way to earn as you go.",
//     images: ["https://grabway.site/images/banner.png"],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>
          <GlobalStyles />
          <>
            <AntdRegistry>
              <LayoutPage>{children}</LayoutPage>
            </AntdRegistry>
          </>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
