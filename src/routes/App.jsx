import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}