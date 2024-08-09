import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/sony.jpg",
    title: "SONY VH",
    desc: "Absolute-8% off ",
    price: "LKR 20,000",
    ratting: 4.7,
  },

  {
    img: "/g-s23.jpg",
    title: "SAMSUNG GALAXCY",
    desc: "Absolute-19% off ",
    price: "LKR 65,000",
    ratting: 4.2,
  },

  {
    img: "/sony camera.jpg",
    title: "SONY Camera",
    desc: "Absolute-10% off ",
    price: "LKR 250,000",
    ratting: 4.7,
  },

  {
    img: "/sg1.jpg",
    title: " SAMSUNG GALAXCY",
    desc: " Absolute-9% off ",
    price: "LKR 80,000",
    ratting: 4.2,
  },
];

const StudentsDeals = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> Student Deals </h2>

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
              rating={item.ratting}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsDeals;
