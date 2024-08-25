import { useState, useEffect } from 'react';
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useInView } from 'react-hook-inview';
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [ref, inView] = useInView();

  // Simulate data fetching
  useEffect(() => {
    // Replace with your actual data fetching logic
    const fetchProducts = async () => {
      try {
        // Simulating a network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Example data with unique IDs
        const fetchedProducts = [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
          { id: 3, name: 'Product 3' }
        ];

        setProducts(fetchedProducts); // Update with actual data
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className='overflow-x-hidden w-screen z-40'>
      <HeroBanner />
      <Wrapper>
        <div className='text-center mb-12 max-w-[800px] mt-[50px] md:mt-[80px] mx-auto'>
          <div className='font-bold text-[28px] md:text-[34px] mb-2 leading-tight'>
            Prepare for Your Sacred Journey
          </div>
          <div className='flex text-[20px] mb-4'>
            Explore our thoughtfully curated selection of essentials designed to enhance your Umrah and Hajj experience with comfort, reverence, and ease.
          </div>
        </div>

        {/* Product Grid */}
        <div ref={ref} className="mb-52">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              {/* Loader component or spinner */}
              <div className="animate-spin border-t-2 border-blue-500 border-solid h-12 w-12 rounded-full"></div>
            </div>
          ) : (
            <div ref={ref} className="mb-52">
        {<div  className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0'>
          <ProductCard />
        </div>}

</div>
          )}
        </div>
      </Wrapper>
    </main>
  );
}
