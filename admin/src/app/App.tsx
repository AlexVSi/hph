import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { myDataProvider } from "../shared/providers/myDataProvider";
import { myAuthProvider } from "../shared/providers/myAuthProvider";
import { UserList } from "../entities/user/UserList";
import { UserEdit } from "../entities/user/UserEdit";
import { UserCreate } from "../entities/user/UserCreate";
import { ProductList } from "../entities/product/ProductList";
import { CategoryList } from "../entities/category/CategoryList";
import { ProductEdit } from "../entities/product/ProductEdit";
import { ProductShow } from "../entities/product/ProductShow";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={myDataProvider}
    authProvider={myAuthProvider}
  >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="products" list={ProductList} edit={ProductEdit} show={ProductShow}/>
    <Resource name="categories" list={CategoryList} />
    <Resource name="orders" list={CategoryList} />
  </Admin>
);
