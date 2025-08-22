import clientPromise from "../../lib/mongodb";

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("perfumeCollectionData");

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
  }

  const result = await db.collection("users").insertOne({ name, email, password });

  return new Response(JSON.stringify({ message: "User created", id: result.insertedId }), { status: 201 });
}
