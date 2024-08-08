import React from 'react'
import Image from 'next/image';
// import {AiFillStar,AiOutlineStar} from "react-icons/ai";



interface propsType{
    img:string;
    title:string;
    desc:string
    price:string
    ratting:number
}


const ProductCard: React.FC<propsType>=({
    img,
    title,
    desc,
    price,
    ratting,

}) => {


    // const generateRating = (ratting:number) => {
    //     switch (ratting) {
    //         case 1:  
    //         return(
    //             <div className='flex gap-1 text-[20px] text-[#ff9529]'>
    //                 <AiFillStar />
    //                 <AiOutlineStar />
    //                 <AiOutlineStar />
    //                 <AiOutlineStar />
    //                 <AiOutlineStar />


    //             </div>
    //         )

            // case 2:  
            // return(
            //     <div className='flex gap-1 text-[20px] text-[#ff9529]'>
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiOutlineStar />
            //         <AiOutlineStar />
            //         <AiOutlineStar />


            //     </div>
            // )

            // case 3:  
            // return(
            //     <div className='flex gap-1 text-[20px] text-[#ff9529]'>
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiOutlineStar />
            //         <AiOutlineStar />


            //     </div>
            // )

            // case 4:  
            // return(
            //     <div className='flex gap-1 text-[20px] text-[#ff9529]'>
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiFillStar/>
            //         <AiFillStar />
            //         <AiOutlineStar />


            //     </div>
            // )

            // case 5:  
            // return(
            //     <div className='flex gap-1 text-[20px] text-[#ff9529]'>
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiOutlineStar />
            //         <AiOutlineStar />


            //     </div>
            // )

            // case 6:  
            // return(
            //     <div className='flex gap-1 text-[20px] text-[#ff9529]'>
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiFillStar />
            //         <AiFillStar />


            //     </div>
            // )


        //     break;

        //     default:
        //     return null
        // 
    // }
// }



  return  <div className="px-4 border border-gray-200px rounded-xl max-w-[400px]">
    <div>
        <Image
        className='w-full h-auto'
        src ={img}
        width ={100}
        height ={200}
        alt ="watch1"
        />

    </div>

   <div className='space-y-2 py-2'>
    <h2 className='text-accent font-medium uppercase'>{title}</h2>
    <p className='text-gray-500 max-w-[150px]'>{desc}</p>
    {/* <div> {generateRating(ratting)}</div> */}



<div className='font-bold flex gap-4'>
    ${price}
    <del className='text-gray-500 font-normal'> $3500 </del>


</div>
</div>
</div>
  
};

export default ProductCard;
