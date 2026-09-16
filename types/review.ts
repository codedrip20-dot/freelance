export interface Review {
  id?: string;

  email: string;

  rating: number;

  review: string;

  projectCode: string;

  verified: boolean;

  approved: boolean;

  createdAt?: unknown;
}