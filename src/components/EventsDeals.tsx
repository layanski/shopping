import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/cleaning.jpg",
    title: "House Cleaning",
    desc: "Absolute-9% off ",
    price: "LKR 10,000",
    rating: 4.7,
  },

  {
    img: "/haircut.jpg",
    title: "Hair Cutting",
    desc: "Absolute-10% off ",
    price: "LKR 1,500",
    rating: 4.2,
  },

  {
    img: "/W clean.jpg",
    title: " Window cleanning",
    desc: " Absolute-9% off ",
    price: "LKR 2,000",
    rating: 4.7,
  },

  {
    img: "/pet.jpg",
    title: " Men Watch",
    desc: " Absolute-9% off ",
    price: "LKR 2,000",
    rating: 4.2,
  },
];

const EventsDeals = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> Your Events Deals </h2>

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

export default EventsDeals;
