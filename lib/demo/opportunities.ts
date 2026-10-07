import type { Opportunity, OpportunityRepository } from "@/types/domain";
import { es } from "@/lib/i18n/es";
export const demoOpportunities: Opportunity[] = [
  {
    slug: "porsche-911-carrera",
    vehicle: {
      id: "demo-1",
      brand: "Porsche",
      model: "911 Carrera",
      version: "3.0 PDK · 385 CV",
      year: 2021,
      mileage: 32500,
      country: "Alemania",
      price: 78900,
      image: "/images/porsche.png",
    },
    landedPrice: 87400,
    score: { value: 87, status: "preliminary", disclaimer: es.scoreDisclaimer },
    availability: "demo",
    isDemo: true,
  },
  {
    slug: "range-rover-sport",
    vehicle: {
      id: "demo-2",
      brand: "Land Rover",
      model: "Range Rover Sport",
      version: "D300 Dynamic SE · 300 CV",
      year: 2023,
      mileage: 24800,
      country: "Bélgica",
      price: 76500,
      image: "/images/range-rover.png",
    },
    landedPrice: 85100,
    score: { value: 89, status: "preliminary", disclaimer: es.scoreDisclaimer },
    availability: "demo",
    isDemo: true,
  },
  {
    slug: "bmw-m340i-touring",
    vehicle: {
      id: "demo-3",
      brand: "BMW",
      model: "M340i Touring",
      version: "xDrive Steptronic · 374 CV",
      year: 2022,
      mileage: 38200,
      country: "Alemania",
      price: 48900,
      image: "/images/bmw.png",
    },
    landedPrice: 55400,
    score: { value: 85, status: "preliminary", disclaimer: es.scoreDisclaimer },
    availability: "demo",
    isDemo: true,
  },
];
export const demoOpportunityRepository: OpportunityRepository = {
  async list() {
    return demoOpportunities;
  },
  async findBySlug(slug) {
    return demoOpportunities.find((item) => item.slug === slug) ?? null;
  },
};
