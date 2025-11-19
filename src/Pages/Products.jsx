import React from "react";
import OurProducts from "../assets/Products/OurProducts";
import ProductHero from "../assets/Products/ProductHero";
import ProductsDescription from "../assets/Products/ProductsDescription";

const Products = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <ProductHero />
      <ProductsDescription />
      <OurProducts />
    </div>
  );
};

export default Products;
