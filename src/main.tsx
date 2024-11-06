import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Route, Routes } from "react-router-dom"; // I need to use HashRouter when using github pages
import "./index.css";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import MainPage from "./pages/main/MainPage.tsx";
import InspirationPage from "./pages/Inspiration/InspirationPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import ProductsPage from "./pages/products/ProductsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="inspiration" element={<InspirationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
