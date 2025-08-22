import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProductForm from "../productForm";

export default async function AddProductPage() {
//   const session = await getServerSession();

//   if (!session) {
//     redirect("/login"); // 🚀 redirect unauthenticated users
//   }

  return (
    <div className="p-8 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
      <ProductForm/>
    </div>
  );
}
