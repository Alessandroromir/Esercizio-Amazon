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

  addProductToStore() {}
  removeProductFromStore() {}
  getProduct() {}
  addProductToCart() {}
  removeProductFromCart() {}
  checkout() {}

  upgradeUserToSeller() {}

  addCategory() {}
  removeCategory() {}
  getCategories() {}

  createOrder() {}
  getOrders() {}
  deleteOrder() {}
  removeProductFromOrder() {}
  // #endregion
}
