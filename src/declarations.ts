export interface Table<T> {
  [key: string]: T;
}

export interface User {
  isActive: boolean;
  id: string;
  isBusiness: boolean;
  email: string;
  password: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  address: { street: string; city: string; country: string; zip: string };
}

export interface UserOrders {
  [idUser: User['id']]: Array<Order['id']>;
}

export interface Users {
  [key: User['id']]: User;
}

export interface Product {
  isAvailable: boolean;
  id: string;
  name: string;
  price: number;
  description: string;
  cover: string;
  quantity: number;
}

export interface Products {
  [key: Product['id']]: Product;
}

export interface Category {
  id: string;
  name: string;
}

export interface Categories {
  [key: Category['id']]: Category;
}

/*export interface Tables<T(Il tipo da passare)>{[key:string]:T;}
type categories=Tables<Category>;*/

export interface Order {
  id: string;
  totalPrice: number;
  date: Date;
  status: 'pending' | 'completed' | 'canceled';
}

export interface Orders {
  [key: Order['id']]: Order;
}

export interface Cart {
  id: string;
}

export interface Carts {
  [key: Cart['id']]: Cart;
}
