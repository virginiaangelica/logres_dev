import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import EmailPage from "@/pages/auth/EmailPage";
import HapePage from "@/pages/auth/HapePage";
import LoginDokterPage from "@/pages/auth/LoginDokterPage";
import RegisterDokterPage from "@/pages/auth/RegisterDokterPage";
import EmailDokterPage from "./pages/auth/EmailDokterPage";
import HapeDokterPage from "./pages/auth/HapeDokterPage";
import LoginAdminPage from "./pages/auth/LoginAdminPage";

const router = createBrowserRouter([
  // Disini menghandle route yang ada di dalam project
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/email",
    element: <EmailPage />,
  },
  {
    path: "/hape",
    element: <HapePage />,
  },
  {
    path: "/login-dokter",
    element: <LoginDokterPage />,
  },
  {
    path: "/register-dokter",
    element: <RegisterDokterPage />,
  },
  {
    path: "/email-dokter",
    element: <EmailDokterPage />,
  },
  {
    path: "/hape-dokter",
    element: <HapeDokterPage />,
  },
  {
    path: "/login-admin",
    element: <LoginAdminPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
