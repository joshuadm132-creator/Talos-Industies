import { title } from "process";

export const business = {
  name: "Denzel's Auto Repairs",
  logo: "Denzel's Auto Repairs",
  description: "Professional vehicle repairs you can trust.",

  location: "Harare, Zimbabwe",

  contact: {
    phone: "077 123 4567",
    email: "info@denzelsauto.co.zw",
    adress:"Harare, Zimbabwe",
  },
  services:[
          {
            title: "Engine Repairs",
            description: "Professional engine diagnostics and repairs.",
          },
          {
            title: "Brake Services",
            description: "Brake inspection, maintenance and repairs.",
          },
          {
            title: "Oil Changes",
            description: "Keep your engine running smoothly.",
          },
           {
            title: "window Tint",
            description: "Professional engine diagnostics and repairs.",
          },
          {
            title: "sad ending",
            description: "Opposit of the happy one I guess i donno",
          },
          {
            title: "Happy ending",
            description: "Keep your engine running smoothly.",
          },
        ],
        About: {

            title:"About Our Business",
                description:"We provide reliable automotive services to customers in Harare.",

        },
        teir:[
          {
            id: "basic",
            name: "Basic Care",
            price: "$30",
            period: "/visit",
            popular: true,
            description: "Essential fluid checks and routine maintenance.",
            features: [
              "Standard Engine Oil Change",
              "Multi-point Inspection",
              "Tire Pressure Check",
            ],
            ctaText: "Book Basic Service",
          },
          {
            id: "pro",
            name: "Pro Maintenance",
            price: "$75",
            period: "/month",
            description: "Full preventive care plan for everyday drivers.",
            popular: false,
            features: [
              "Everything in Basic",
              "Brake Pad Inspection & Cleaning",
              "Free Diagnostics Diagnostics Scan",
              "Priority Scheduling",
            ],
            ctaText: "Join Pro Plan",
          },
          {
            id: "advanced",
            name: "Advanced Fleet",
            price: "$150",
            period: "/month",
            popular: false,
            description: "Comprehensive coverage for heavy usage & commercial vehicles.",
            features: [
              "Everything in Pro",
              "Full Engine Diagnostics",
              "Suspension Alignment Check",
              "24/7 Roadside Assistance",
            ],
            ctaText: "Contact Sales",
          },
        ],
        table:[
          {
            featureName: "Standard Oil & Filter Change",
            tierValues: { basic: true, pro: true, advanced: true },
          },
          {
            featureName: "Multi-point Safety Inspection",
            tierValues: { basic: true, pro: true, advanced: true },
          },
          {
            featureName: "Diagnostic Scan",
            tierValues: { basic: false, pro: "1 per month", advanced: "Unlimited" },
          },
          {
            featureName: "Brake System Servicing",
            tierValues: { basic: false, pro: true, advanced: true },
          },
          {
            featureName: "24/7 Roadside Towing",
            tierValues: { basic: false, pro: false, advanced: true },
          },
        ]



};