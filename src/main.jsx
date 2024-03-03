import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import EventDetails from "./components/EventDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/event/:id",
    element: <EventDetails />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
