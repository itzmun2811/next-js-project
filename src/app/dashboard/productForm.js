"use client";
import { useState } from "react";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    const res = await fetch("/api/perfumes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      alert("✅ Product added successfully!");
      e.target.reset();
    } else {
      alert("❌ Failed to add product.");
    }
    setLoading(false);
  };

  return (
   <div className="mx-auto w-11/12 text-center">
     <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <input name="name" placeholder="Product Name" className="input input-bordered" required />
      <input name="price" type="number" placeholder="Price" className="input input-bordered" required />
     <input
  name="image"
  type="url"
  placeholder="Image URL"
  className="input input-bordered"
  required
/>
      <textarea name="description" placeholder="Description" className="textarea textarea-bordered" />

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Add Product"}
      </button>
    </form>
   </div>
  );
}
