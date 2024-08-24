import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { useRouter } from 'next/router'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { motion } from 'framer-motion';

const Category = () => {
    const [query, setquery] = useState(null)
    const router = useRouter()
    const { slug } = router.query
    const searchparams=useSearchParams()
// console.log('query is ',searchparams.get('query'))
const data=searchparams.get('query')
//
const handleSearch = async () => {
    // logic to handle search
 

      // Fetch products from the API
      const response = await fetch('/api/getProducts');
      const result = await response.json();

      // Filter products based on the search query
      const filteredResults = result.products.filter((product) =>
        product.title.toLowerCase().includes(data?.toLowerCase())
      );

      // Update the search results
      setquery(filteredResults);

    // Navigate to SearchResults page with the search query as a parameter
    
  };

  handleSearch()
//
  return (
    <div className='w-full relative border z-0  min-h-screen'>
      
    <Wrapper>
    <div className="text-center  bg-black relative mx-w-[800px] mx-auto md:pt-0">
    {/* Image container */}
    <div className="absolute top-0 left-0 w-full md:h-[40vh] h-[30vh] z-0">
        <img src='/2.png' className="w-full h-full object-cover opacity-90" alt="Transparent Image" />
    </div>

    {/* Text container */}
    {!data && (
        <div className="relative z-10 pt-20 text-[28px] md:text-[34px] font-urbanist text-white font-bold leading-tight">
            {slug?.toUpperCase()}
        </div>
    )}
            
            
        </div>

    {/* Product Grid   */}
    <div onClick={()=>{console.log('clicked')}} className='grid grid-cols-1 md:mt-40 mt-32    md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0'>
            <ProductCard slug={slug} query={query} />
           
        </div>                        
    </Wrapper>
      </div>
  )
}

export default Category
