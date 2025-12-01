import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const Service = lazy(() => import("../Pages/Services"));
const Products = lazy(() => import("../Pages/Products"));

// Loading component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600 text-sm">Loading page...</p>
    </div>
  </div>
);

const Router = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Products />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Router;
