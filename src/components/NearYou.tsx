import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/LG UN74 SMART.jpg",
    title: " LG Smart Tv",
    desc: " Absolute-19% off ",
    price: "LKR 165,000",
    rating: 4.7,
  },

  {
    img: "/sony.jpg",
    title: " SONY VH",
    desc: "Absolute-15% off ",
    price: "LKR 30,000",
    rating: 4.2,
  },

  {
    img: "/sony camera.jpg",
    title: " SONY CAMERA",
    desc: "Absolute-5% off ",
    price: "LKR 200,000",
    rating: 4.7,
  },

  {
    img: "/sg1.jpg",
    title: " SAMSUNG GALAXY Mobile",
    desc: " Absolute-15% off ",
    price: "LKR 80,000",
    rating: 4.2,
  },
];

const NearYou = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4"> Near You </h2>

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

export default NearYou;
