export interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export interface ComboItem {
  id: string;
  name: string;
  items: string[];
  price: number;
  image: string;
  description?: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id?: string;
  user_id?: string;
  user_name: string;
  user_email: string;
  items: CartItem[];
  total_amount: number;
  payment_method: 'GPay' | 'Cash on Delivery';
  status?: string;
  created_at?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
}
