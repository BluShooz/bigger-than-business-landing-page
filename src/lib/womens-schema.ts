export const womensHairSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Bigger Than Business - Women's Hair Services",
  "image": "https://biggerthanbusiness.com/womens-hair-hero.jpg",
  "@id": "https://biggerthanbusiness.com/womens-hair-stylist-pflugerville/#localbusiness",
  "url": "https://biggerthanbusiness.com/womens-hair-stylist-pflugerville",
  "telephone": "512-590-5235",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2700 W Pecan St Suite 101",
    "addressLocality": "Pflugerville",
    "addressRegion": "TX",
    "postalCode": "78660",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.4385,
    "longitude": -97.6438
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/biggerthanbusiness",
    "https://instagram.com/biggerthanbusiness"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "280"
  }
};

export const womensFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept walk-ins for women's hair services in Pflugerville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are recommended to ensure you receive our full attention and a high-quality experience. When availability allows, we do welcome walk-ins for women's hair services in Pflugerville."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a silk press cost in Pflugerville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our silk press services start at $75, including a thorough consultation and precision styling for silky, smooth results that last."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find a women's hair stylist in Pflugerville, TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bigger Than Business offers professional women's hair services in Pflugerville, TX. Our skilled stylists specialize in haircuts, blowouts, silk press, and natural hair care."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer natural hair care services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in natural hair care, including moisturizing treatments, protective styles, and personalized consultations to help you maintain healthy, beautiful hair."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I get a women's haircut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For maintaining healthy ends and your style shape, we recommend visiting every 6-8 weeks. Your stylist can provide a personalized recommendation based on your hair goals."
      }
    }
  ]
};
