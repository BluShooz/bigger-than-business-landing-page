export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Bigger Than Business Barbershop",
    "image": "https://biggerthanbusiness.com/hero-bg.png",
    "@id": "https://biggerthanbusiness.com/#localbusiness",
    "url": "https://biggerthanbusiness.com",
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

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you accept walk-ins in Pflugerville?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We primarily operate by appointment to ensure every client receives our full attention and a high-quality experience. However, when availability allows across our eight chairs, we are happy to accommodate walk-in clients in Pflugerville."
            }
        },
        {
            "@type": "Question",
            "name": "How much does a fade cost in Pflugerville?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our professional fade haircuts start at $35. This includes a consultation and a precision finish."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best barbershop near 78660?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bigger Than Business is a top-rated choice in the 78660 area, known for our expert barbers and community vibe."
            }
        },
        {
            "@type": "Question",
            "name": "Do you cut kids' hair?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer specialized haircuts for kids in Pflugerville, ensuring a comfortable experience for them."
            }
        },
        {
            "@type": "Question",
            "name": "How often should I get a haircut?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To maintain a sharp look, we recommend visiting our Pflugerville barbershop every 2-3 weeks."
            }
        }
    ]
};
