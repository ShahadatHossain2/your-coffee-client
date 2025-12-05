import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../home/Home";
import AddCoffee from "../coffee/AddCoffee";
import CoffeeDetails from "../coffee/CoffeeDetails";
import UpdateCoffee from "../coffee/UpdateCoffee";

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
    ],
  },
]);
