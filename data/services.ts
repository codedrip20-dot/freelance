export type ServiceLevel = 1 | 2 | 3;

export type Service = {
  id: string;
  level: ServiceLevel;
  name: string;
  shortName: string;
  price: string;
  description: string;
  idealFor: string[];
  features: string[];
  popular?: boolean;
  cta: string;
};

export const services: Service[] = [
  {
    id: "business-websites",
    level: 1,
    name: "Business Websites",
    shortName: "Websites",
    price: "₹5K – ₹15K",
    description:
      "Professional, responsive websites that give your business a strong online presence and make it easy for customers to connect with you.",
    idealFor: [
      "Restaurants & Cafés",
      "Hotels & Local Businesses",
      "Real Estate Agencies",
      "Professional Services",
    ],
    features: [
      "5–8 responsive pages",
      "Modern custom UI design",
      "Contact form",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic SEO setup",
      "Mobile & tablet optimization",
      "Deployment & launch",
    ],
    cta: "Get Your Website",
  },

  {
    id: "web-applications",
    level: 2,
    name: "Web Applications",
    shortName: "Web Apps",
    price: "₹15K – ₹40K",
    description:
      "Interactive web applications built around your business processes, with the functionality you need to manage and serve your customers.",
    idealFor: [
      "Growing Businesses",
      "Booking Platforms",
      "Property Businesses",
      "Businesses Needing Dashboards",
    ],
    features: [
      "Everything in Business Websites",
      "Authentication & user accounts",
      "Database integration",
      "Admin dashboards",
      "Booking & listing systems",
      "API integrations",
      "Custom business workflows",
      "Production deployment",
    ],
    popular: true,
    cta: "Build Your Web App",
  },

  {
    id: "custom-software",
    level: 3,
    name: "Custom Software",
    shortName: "Custom Software",
    price: "₹40K+",
    description:
      "Purpose-built software for businesses with complex requirements, from SaaS platforms and marketplaces to automation and AI-powered products.",
    idealFor: [
      "Startups",
      "Established Businesses",
      "SaaS Products",
      "Complex Business Workflows",
    ],
    features: [
      "Custom architecture",
      "Advanced dashboards",
      "Marketplace functionality",
      "Custom APIs & integrations",
      "Business automation",
      "AI-powered features",
      "Scalable database systems",
      "Deployment & technical handover",
    ],
    cta: "Discuss Your Project",
  },
];