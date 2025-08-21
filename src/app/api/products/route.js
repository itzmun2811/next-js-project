import clientPromise from "../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("perfumeCollectionData");
    const perfumes = await db.collection("perfumeData").find({}).toArray();

    return new Response(JSON.stringify(perfumes), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}