export type ID = string;
export interface User {
  id: ID;
  email: string;
  role: "customer" | "admin";
}
export interface Lead {
  id: ID;
  name: string;
  email: string;
  status: "new" | "contacted" | "qualified" | "closed";
}
export interface SearchRequest {
  id: ID;
  leadId: ID;
  brand: string;
  model: string;
  budget: number;
  deliveryProvince: string;
}
export interface Vehicle {
  id: ID;
  brand: string;
  model: string;
  version: string;
  year: number;
  mileage: number;
  country: string;
  price: number;
  image: string;
}
export interface VehicleScore {
  value: number;
  status: "preliminary" | "reviewed";
  disclaimer: string;
}
export interface Opportunity {
  slug: string;
  vehicle: Vehicle;
  landedPrice: number;
  score: VehicleScore;
  availability: "demo" | "available" | "reserved" | "unavailable";
  isDemo: boolean;
}
export interface Operation {
  id: ID;
  leadId: ID;
  vehicleId: ID;
  status: "review" | "purchase" | "transport" | "registration" | "delivered";
}
export interface Document {
  id: ID;
  operationId: ID;
  name: string;
  storagePath: string;
}
export interface Task {
  id: ID;
  operationId: ID;
  title: string;
  dueAt: string | null;
  completed: boolean;
}
export interface CostConfig {
  id: ID;
  concept: string;
  amount: number;
  currency: "EUR";
}
export interface LeadEvent {
  id: ID;
  leadId: ID;
  kind: "note" | "status_change" | "contact";
  createdAt: string;
  description: string;
}
export interface OpportunityRepository {
  list(): Promise<Opportunity[]>;
  findBySlug(slug: string): Promise<Opportunity | null>;
}
export interface CalculatorInput {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  budget: number;
  province: string;
}
export interface Estimate {
  european: [number, number];
  landed: [number, number];
  spanish: [number, number];
  saving: [number, number];
  isDemo: true;
}
