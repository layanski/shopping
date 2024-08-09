import React from 'react'

const Footer = () => {
  return (
    <div className='container pt-20 '>
    <div className='px-4 py-3 space-x-3 bg-blackish text-white text-center py-6 pb-16 md:pb-20'>
        <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

        <div className='mb-5'>
            <h4 className='px-4 py-3 space-x-3'>EZICHOICE</h4>
            <div className='text-sm py-2'> © 2024 EziChoice. All rights reserved </div>

            <strong> Phone:</strong> +94 773124567 <br/>
            <strong> Email:</strong> ezhichoice@gmail.com <br/>
        </div>

        {/* <div className='mb-5'>
            <h4 className='px-4 py-3 space-x-3'> Useful Links</h4>
            <ul>
               <li>Home</li>
               <li>Drapdown</li>
               <li>Services</li>
               <li>Pricing</li>
               <li>Contact</li>
            </ul>
            
        </div>  */}

        <div className='mb-5'>
        <h4 className='px-4 py-3 space-x-3'> Deals</h4>
            <ul>
               <li>Products</li>
               <li>Services</li>
               <li>Events</li>
               
            </ul>
            
        
        </div>

        <div className='mb-5'> 
        <h4 className='px-4 py-3 space-x-3'> Company</h4>
            <ul>
               <li>About</li>
               <li>Jobs</li>
               <li>Branding</li>
               
            </ul>
            
        </div>

        <div className='mb-5'> 
        <h4 className='px-4 py-3 space-x-3'> Resources</h4>
            <ul>
               <li>College</li>
               <li>Support</li>
               <li>Safty</li>
               
            </ul>
            
        </div>
        
        <div className='mb-2'> 
        
        <h4 className='px-4 py-3 space-x-3'> Policies</h4>
            <ul>
               <li>Terms</li>
               <li>Privacy</li>
               <li>Guidelines</li>
               
            </ul>
        
        </div> 

        <div className='w-full sm:w-[300] md:w-[70%] relative ps-5 col-span-3 font-serif text-base space-y-3'>
        <input className='border-gray-200 border p-2 px-4 text-blackish rounded-lg w-full text-lg'  type="text" placeholder='E-mail'/>
           <div className="bg-blue-500 sm:w-[180px] sm:h-[45px] rounded-md text-lg text-center py-2"> <button>Subscribe</button>


           </div>
           
           
          
            
        </div>




        </div>


        </div>
      
     </div>
     </div>
  )
}

export default Footer
