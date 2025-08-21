import Image from "next/image";
import Hero from "./hero";
import ProductHighlights from "./productHighlights";

export default function Home() {
  return (
   <div className="mt-12 my-12 mx-auto">
    <Hero></Hero>
    <ProductHighlights></ProductHighlights>
   </div>
  );
}
