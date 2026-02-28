import type { Metadata } from "next";
import { womensHairSchema, womensFAQSchema } from "@/lib/womens-schema";
import WomensLandingPage from "./WomensLandingPage";

export const metadata: Metadata = {
  title: "Women's Hair Stylist in Pflugerville | Bigger Than Business",
  description: "Discover the best women's hair services in Pflugerville, TX. Expert haircuts, silk press, blowouts, and natural hair care. Book your appointment today at Bigger Than Business.",
  keywords: "women's hair stylist Pflugerville, women's haircut Pflugerville, hair salon Pflugerville TX, silk press Pflugerville, blowout Pflugerville, professional hair stylist Pflugerville, natural hair care Pflugerville",
  openGraph: {
    title: "Women's Hair Stylist in Pflugerville | Bigger Than Business",
    description: "Premium women's hair services in Pflugerville, TX. From silk press to natural hair care, experience personalized styling in a welcoming atmosphere.",
    type: "website",
    locale: "en_US",
    url: "https://biggerthanbusiness.com/womens-hair-stylist-pflugerville",
    siteName: "Bigger Than Business",
  },
};

export default function Page() {
  return (
    <>
      <WomensLandingPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensHairSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(womensFAQSchema) }}
      />
    </>
  );
}
