import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/painting.jpg",
    title: " Panting",
    desc: " Absolute-5% off ",
    price: "LKR 20,000",
    rating: 4.7,
  },

  {
    img: "/plumbing.jpg",
    title: " Plumbing",
    desc: " Absolute-9% off ",
    price: "LKR 18,000",
    rating: 4.2,
  },

  {
    img: "/W clean.jpg",
    title: "Window Cleaning",
    desc: "Absolute-4% off ",
    price: "LKR 15000",
    rating: 4.7,
  },

  {
    img: "/haircut.jpg",
    title: "Hair Cutting",
    desc: "Absolute-5% off ",
    price: "LKR 2000",
    rating: 4.2,
  },
];

const ServicesNearYou = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> Services Near You </h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
   lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesNearYou;
