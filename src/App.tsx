import { Button } from "@/components/ui/button"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import { login } from "./lib/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Button>Click me</Button>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Button>Login</Button>,
  },
]);

const App = () => {
  login()
  return (
    <RouterProvider router={router} />
  )
}

export default App
