import { title } from 'process'
import React from 'react'
import ProductCard from './ProductCard'


const productsData =[
{
    img:"/watch1.jpg",
    title:" Men Watch",
    desc:"Dyson V11 Absolute-9% off ",
    price:"LKR 2000",
    ratting:4.7,
    
},

{
    img:"/watch1.jpg",
    title:" Men Watch",
    desc:"Dyson V11 Absolute-9% off ",
    price:"LKR 2000",
    ratting:4.2,
},

{
    img:"/watch1.jpg",
    title:" Men Watch",
    desc:"Dyson V11 Absolute-9% off ",
    price:"LKR 2000",
    ratting:4.8,
},

{
    img:"/watch1.jpg",
    title:" Men Watch",
    desc:"Dyson V11 Absolute-9% off ",
    price:"LKR 2000",
    ratting:4.3,
},
]

const PopularDeals = () => {
  return (
   <div> 
    <div className='container pt-16'> 
   <h2 className='font-medium text-2xl pb-4'> Popular Deals </h2>

   <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
   lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>

{productsData.map((item,index)=>(
<ProductCard
    key={index}
    img={item.img}
    title={item.title}
    desc={item.desc}
    price={item.price}
    ratting={item.ratting}
    />
))}


   </div>
   </div>
   </div> 
  )
}

export default PopularDeals
