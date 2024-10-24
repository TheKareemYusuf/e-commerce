'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/search?search=${encodeURIComponent(query)}`);
      const data = await response.json();
      setProducts(data.data.products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product._id}`} key={product._id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img src={product.imageUrl} alt={product.productName} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{product.productName}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No products found for "{query}"</p>
      )}
    </div>
  );
}