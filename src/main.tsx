import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import MainPage from "./pages/main/MainPage.tsx";
import InspirationPage from "./pages/Inspiration/InspirationPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import ProductsPage from "./pages/products/ProductsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "inspiration", element: <InspirationPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "products", element: <ProductsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
);
