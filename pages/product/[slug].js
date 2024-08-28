
import ProductDetailCrousel from '@/components/ProductDeatailCrousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React, { useState,useEffect } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MyContext } from '@/pages/_app'
import { useRouter } from 'next/router'
import AddToCartNotification from '@/components/AddToCartNotification'
import { motion } from 'framer-motion'

export default function ProductDetails() {
const [Items, setItems] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getProducts');
        const result = await response.json();

        // Ensure the response has a "products" property and it's an array before setting state
        if (result && Array.isArray(result.products)) {
          setItems(result.products);
        } else {
          console.error('Invalid data structure received:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const [isCartVisible, setIsCartVisible] = useState(false);
    const [size, setSize] = useState(undefined)

    const router = useRouter()
    const { slug } = router.query

    // Using Context API to use app functions in this file
    const { addToCart } = MyContext()


    const [pin, setPin] = useState(undefined)
    const [service, setService] = useState()

    // Pin Code Service Availability 
    const checkServiceAvailability = async () => {
        let pins = await fetch("/api/pincode");
        let pinJson = await pins.json();
        if (pinJson.includes(+pin)) {
            setService(true)
        }
        else {
            setService(false)
        }
    }


    const onChangePin = (e) => {
        setPin(e.target.value)
    }
    
    return (
        <motion.div  initial={{ opacity: 0 ,scale:1,y:-10   }}  animate={{y:0,  opacity: 1, scale: 1}} transition={{ delay: 0,duration:.3,stiffness:50 }} className='w-full min-h-screen md:py-20'>
            {/* {console.log('asas',Items[0]?._id)}
            {console.log(slug)} */}
{
Items.map((key)=>{
    return <>{key?._id==slug&&<div>
       <Wrapper>
                <div className=' flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* left col start  */}
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'><ProductDetailCrousel img={key.img} /> </div>
                    {/* left col end  */}

                    {/* Right col start  */}
                    <div className="flex-[1] py-3">

                        {/* Product Title */}
                        <div className='font-bold  text-[30px] mb-2'>
                            {key.title}
                        </div>

                        {/* Product Subtitle */}
                        <div className='text-lg font-semibold mb-5'>
                        {key.category}
                        </div>

                        {/* Price Details */}
                        <div className='text-lg font-semibold'>
                            Price : {key.price} /- Rs
                        </div>
                        <div className='text-sm text-black/[0.5]'>
                            Incl. of Texes
                        </div>
                        <div className='text-sm text-black/[0.5] mb-5'>
                            {`(Also includes all applicable duties)`}
                        </div>

                        
                                        {/* Descriptive Paragraph Start */}
                                        <div>
                                            <div className='text-lg font-bold mb-0'>
                                                Description
                                                
                                            </div>
                                            <div className='text-md mb-5'>{key.desc}    </div>
                                        </div>
                                         
                                        <a href="https://wa.me/+923037078822" target="_blank" rel="noopener noreferrer">
  <button className='w-full text-lg bg-black text-white border rounded-full py-4 font-md transition-transform active:scale-95 flex items-center justify-center hover:opacity-75 mb-3'>
    Contact Now
  </button>
</a>






                    </div>
                    {/* Right col end  */}

                </div>
             

                <RelatedProducts />
            </Wrapper>

        </div>}</>
})

}
                    </motion.div>
    )
}

