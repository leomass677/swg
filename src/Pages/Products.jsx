import React from "react";
import OurProducts from "../assets/Products/OurProducts";
import ProductHero from "../assets/Products/ProductHero";
import ProductsDescription from "../assets/Products/ProductsDescription";
import ServicesGallery from "../assets/Products/ServicesGallery";
import Automated from "../Sevices/Automated";

const Products = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/09/18/15/42/planet-3d-3686480_1280.jpg")`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="relative bg-stone-50 pt-16"
    >
      {/* overlay - FIXED */}
      <div className="w-full h-full bg-da rk/50 absolute left-0 top-0 "></div>
      <div className="z-10">
        <ProductHero />
        <ProductsDescription />
        <ServicesGallery />
        <OurProducts />
        <Automated />
      </div>
    </div>
  );
};

export default Products;
