"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const highlights = products.slice(0, 6); // show only 6 products

  return (
    <div className="w-11/12 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Highlights</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((p, index) => (
          <motion.div
            key={p._id}
            className="card w-11/12 bg-base-100 shadow-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <figure>
              {p.image && (
                <Image
                  className="object-contain w-[400px] h-[400px]"
                  width={400}
                  height={400}
                  src={p.image}
                  alt={p.name}
                />
              )}
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title">{p?.name}</h2>
              <p>{p?.description}</p>
              <p>{p?.price}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => router.push(`/products/${p._id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
