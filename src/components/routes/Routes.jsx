import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../home/Home";
import AddCoffee from "../coffee/AddCoffee";
import CoffeeDetails from "../coffee/CoffeeDetails";
import UpdateCoffee from "../coffee/UpdateCoffee";
import SignIn from "../signIn/SignIn";
import SignOut from "../signOut/SignOut";
import Users from "../users/Users";
import Login from "../signIn/Login";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("http://localhost:5000/coffees").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signOut",
        Component: SignOut,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:5000/users"),
        element: (
          <PrivateRoutes>
            <Users></Users>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
