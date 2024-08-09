
import React from 'react'
import ProductCard from './ProductCard'


const productsData =[
{
    img:"/watch1.jpg",
    title:" Men Watch",
    desc:"Absolute-9% off ",
    price:"LKR 18,000",
    rating:4.7,
    
},

{
    img:"/g-s23.jpg",
    title:" SAMSUNG GALAXY Mobile",
    desc:" Absolute-9% off ",
    price:"LKR 65,000",
    rating:4.2,
},

{
    img:"/LG tv.jpg",
    title:" LG Smart TV",
    desc:"Absolute-9% off ",
    price:"LKR 165,000",
    rating:4.8,
},

{
    img:"/sg1.jpg",
    title:" SAMSUNG GALAXY Mobile",
    desc:"DAbsolute-9% off ",
    price:"LKR 80,000",
    rating:4.3,
},
]

const PopularDeals = () => {
  return (
   <div> 
    <div className='container pt-10'> 
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
    rating={item.rating}
    />
))}


   </div>
   </div>
   </div> 
  )
}

export default PopularDeals
