"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
  const params = useParams(); 
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
  fetch(`/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="w-11/12 mx-auto py-10 max-w-4xl">
    

      <div className="flex flex-col md:flex-row gap-6 bg-base-100 shadow-md p-6 rounded-lg">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-50 p-4 rounded">
          <Image
            src={product?.image}
            alt={product?.name}
            width={400}
            height={400}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold">{product.price}</p>
          <button className="btn btn-primary mt-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
