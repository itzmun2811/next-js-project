import Image from "next/image";

export default function ProductHighlights(){
    return(
<>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <Image width={500} height={500}
      src="/673c3d188e0f0546158202bd_1732001048696.jpg"
      alt="perfumes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


</>
    )
}