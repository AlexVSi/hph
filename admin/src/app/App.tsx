import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./../shared/authProvider";
import myDataProvider from "./../shared/myDataProvider";
import { UserList } from "../entities/user/UserList";
import { UserEdit } from "../entities/user/UserEdit";
import { UserCreate } from "../entities/user/UserCreate";
import { ProductList } from "../entities/product/ProductList";
import { CategoryList } from "../entities/category/CategoryList";
import { myAuthProvider } from "../shared/myAuthProvider";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={myDataProvider}
    // authProvider={authProvider}
    authProvider={myAuthProvider}
  >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="products" list={ProductList} />
    <Resource name="categories" list={CategoryList} />
  </Admin>
);
