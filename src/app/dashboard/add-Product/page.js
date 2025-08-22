
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProductForm from "../productForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function AddProductPage() {
  const session =await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // 🚀 redirect unauthenticated users
  }

  return (
    <div className="p-8 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
      {JSON.stringify(session)}
      <ProductForm/>
    </div>
  );
}
