export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'bread' | 'pastry' | 'cake' | 'cookie';
  bestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface DeliveryInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
}
