"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Products() {
  const [products, setProducts] = useState([]);
    const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
        <div key={p._id} className="card w-11/12 bg-base-100  shadow-sm">
  <figure>
    <Image  className="object-contain w-[400px] h-[400px]"  width={400} height={400}
      src={p.image}
      alt="Shoes" />
  </figure>
  <div className="card-body p-6">
    <h2 className="card-title">{p?.name}</h2>
    <p>{p?.description}</p>
    <p>{p?.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"   onClick={() => router.push(`/products/${p._id}`)}>View Details</button>
    </div>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}
