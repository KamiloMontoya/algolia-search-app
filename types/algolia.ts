export interface Restaurant {
  objectID: string;
  name: string;
  address: string;
  area: string;
  city: string;
  country: string;
  image_url: string;
  mobile_reserve_url: string;
  payment_options: string[];
  phone: string;
  postal_code: string;
  price: number;
  reserve_url: string;
  state: string;
  food_type: string;
  stars_count: number;
  reviews_count: number;
  neighborhood: string;
  phone_number: string;
  price_range: string;
  dining_style: string;
}

export type CreateRestaurantData = Omit<Restaurant, "objectID">;
