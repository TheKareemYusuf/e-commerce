import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <img src={product.imageUrl} alt={product.productName} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold">{product.productName}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}