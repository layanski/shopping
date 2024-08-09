import React from "react";
import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsTypes {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
 
}

const ProductCard: React.FC<propsTypes> = ({
  img,
  title,
  desc,
  rating,
  price,
 
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );

      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="px-4 border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-[200px] w-[200px]max-w-lg rounded-xl "
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-red-900  font-bold uppercase">{title}</h2>
        <p className="text-gray-400 max-w-[150px]">{desc}</p>
        <div> {generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
          LKR {price}
          <del className="text-gary-500 font-normal">
             {parseInt(price) + 100} .00 </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
