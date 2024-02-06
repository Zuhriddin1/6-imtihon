import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../layout/Header";
import Home from "./Home";
import Product from "./Product";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header></Header>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
]);
const Root = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Root;
