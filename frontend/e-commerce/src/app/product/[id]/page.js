'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/product/${id}`);
      const data = await response.json();
      setProduct(data.data.product);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (!product) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.imageUrl} alt={product.productName} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}