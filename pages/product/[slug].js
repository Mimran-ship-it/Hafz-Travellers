import ProductDetailCrousel from '@/components/ProductDeatailCrousel';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import React, { useState, useEffect } from 'react';
import { MyContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const [Items, setItems] = useState([]);
  const router = useRouter();
  const { slug } = router.query; // Get slug from URL query params

  const { addToCart } = MyContext(); // Using Context API to access app functions

  const [pin, setPin] = useState(undefined);
  const [service, setService] = useState();

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...');

        const response = await fetch('/api/getPackages');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        console.log('API response:', result); // Full API response

        if (result && result.ummrahPackages && Array.isArray(result.ummrahPackages)) {
          setItems(result.ummrahPackages);
          console.log('Updated Items:', result.ummrahPackages); // Log to verify fetched data
        } else {
          console.error('Invalid or empty data structure received:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data only if `slug` is defined
    if (slug) {
      fetchData();
    } else {
      console.log('Slug is not yet defined');
    }
  }, [slug]);

  console.log('Slug from URL:', slug);
  console.log('Fetched Items:', Items);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: -10 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0, duration: 0.3, stiffness: 50 }}
      className='w-full min-h-screen md:py-20'
    >
      {/* Map through the Items and render the matching product */}
      {Items.map((key) => {
        if (String(key.slug) === String(slug)) {
          return (
            <div key={key._id}>
              <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                  {/* Left column: Image Carousel */}
                  <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                    <ProductDetailCrousel img={key.img} />
                  </div>

                  {/* Right column: Product details */}
                  <div className='flex-[1] py-3'>
                    {/* Product Title */}
                    <div className='font-bold text-[31px] mb-2'>{key.title}</div>

                    {/* Product Subtitle */}
                    <div className='text-lg font-semibold mb-5'>{key.category}</div>

                    {/* Price Details */}
                    <div className='text-lg font-semibold'>
                      Price: {key.price} $
                    </div>
                    <div className='text-sm text-black/[0.5]'>
                      Incl. of Taxes
                    </div>
                    <div className='text-sm text-black/[0.5] mb-20'>
                      (Also includes all applicable duties)
                    </div>
                  </div>
                </div>

                {/* Related Products Component */}
                <RelatedProducts />
              </Wrapper>
            </div>
          );
        }
        return null;
      })}
    </motion.div>
  );
}