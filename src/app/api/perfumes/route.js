import clientPromise from "../../lib/mongodb";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    // const session = await getServerSession();

    // if (!session) {
    //   return new Response(JSON.stringify({ error: "Unauthorized" }), {
    //     status: 401,
    //   });
    // }

    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("perfumeCollectionData");

    const result = await db.collection("perfumeData").insertOne({
      name: body.name,
      price: body.price,
      description: body.description,
      image:body.image,
     
    });

    return new Response(
      JSON.stringify({ message: "Product added", id: result.insertedId }),
      { status: 201 }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
