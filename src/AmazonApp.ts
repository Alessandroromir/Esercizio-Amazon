import {
  Users,
  Products,
  Carts,
  Orders,
  Categories,
  Order,
  Table,
  Product,
  Category,
  Cart,
  User,
} from './declarations';
import { v4 as uuidv4 } from 'uuid';

/*export class AmazonApp {
  name: string = 'AmazonApp';
  users: Users = {};
  userOrders: Table<Array<Order['id']>> = {};
  products: Products = {};
  userProducts: Table<Array<Product['id']>> = {};
  userLogged = null;
  carts: Carts = {};
  orders: Orders = {};
  categories: Categories = {};
}*/

export class AmazonApp {
  // #region Properties

  name: string = 'AmazonApp';
  #userLogged = null;
  // TABLES
  #users: Table<User> = {};
  #products: Table<Product> = {};
  #carts: Table<Cart> = {};
  #orders: Table<Order> = {};
  #categories: Table<Category> = {};
  // TABLES RELATIONS
  #productSeller: Table<User['id']> = {};
  #productCategory: Table<Category['id']> = {};
  #userCart: Table<Cart['id']> = {};
  #userOrders: Table<Array<Order['id']>> = {};
  #userProducts: Table<Array<Product['id']>> = {};
  #orderUsers: Table<User['id']> = {};
  #orderProducts: Table<Array<Product['id']>> = {};
  #cartUsers: Table<User['id']> = {};
  #cartProducts: Table<
    Array<{
      idProduct: Product['id'];
      date: Date;
    }>
  > = {};
  // #endregion

  // #region METHODS
  login() {}
  logout() {}
  signup() {}
  deleteUser() {}

  getUserLogged() {}

  addProductToStore() {
    const newId = uuidv4();
    //login();
    if (!!this.#userLogged != null) {
      if (!!this.#users.isBusiness == true) {
        const newProduct: Product = {
          isAvailable: true,
          id: newId,
          name: 'name',
          price: 50,
          description: 'questo è un nuovo prodotto',
          cover: 'non lo so',
          quantity: 60,
        };
        this.#products = { ...this.#products, newProduct };
        return this.#products;
      } else throw new Error('Non hai un account business');
    } else throw new Error('Non sei loggato');
  }

  removeProductFromStore(productId: Product['id']): AmazonApp {
    //login();
    if (!!this.#userLogged != null) {
      if (!!this.#users.isBusiness == true) {
        if (productId in this.#products) {
          delete this.#products[productId];
          return this;
        } else {
          throw new Error('Il prodotto non esiste.');
        }
      } else {
        throw new Error('Non hai un account business.');
      }
    } else {
      throw new Error('Non sei loggato.');
    }
  }

  getProduct() {}
  addProductToCart(productId: Product['id']) {
    //login();
    if (!!this.#userLogged != null) {
      if (productId in this.#products) {
        const productToAdd = this.#products[productId];
        this.#carts[productId] = productToAdd;
        return this.#carts;
      } else {
        throw new Error('Il prodotto non esiste.');
      }
    } else {
      throw new Error('Non sei loggato');
    }
  }

  removeProductFromCart() {}
  checkout() {}

  upgradeUserToSeller() {}

  addCategory() {
    const id = uuidv4();
  }
  removeCategory() {}
  getCategories() {}

  createOrder() {}
  getOrders() {}
  deleteOrder() {}
  removeProductFromOrder() {}
  // #endregion
}
