import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/pet.jpg",
    title: " Pet Grooming",
    desc: " Absolute-9% off ",
    price: "LKR 20,000",
    rating: 4.7,
  },

  {
    img: "/car wash.png",
    title: " Car Washing",
    desc: "Absolute-10% off ",
    price: "LKR 30,000",
    rating: 4.2,
  },

  {
    img: "/W clean.jpg",
    title: " Window Cleaning",
    desc: "Absolute-5% off ",
    price: "LKR 20,000",
    rating: 4.7,
  },

  {
    img: "/painting.jpg",
    title: " Painting",
    desc: "Absolute-5% off ",
    price: "LKR 50,000",
    rating: 4.2,
  },
];

const ServicesForStudents = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> Services For Students </h2>

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

export default ServicesForStudents;
