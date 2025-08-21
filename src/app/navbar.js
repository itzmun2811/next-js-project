import Image from "next/image";
import Link from "next/link";




export default function Navbar() {
    const links=<>
    <Link to="">Home</Link>
    <Link to="">Products</Link>
    <Link to="">Login</Link>
 
    </>
  return (
   <div className=" mx-auto w-full bg-black text-white  p-3 flex justify-between items-center flex-shrink-0">
  <div className="navbar 
  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <div className="flex gap-2">
   <Image src="/floral-perfume-bottle-orchid-flowers-floral-perfume-bottle-orchid-flowers-116126068 (1).webp"  width={50} 
      height={40} className="rounded-lg"
   alt="perfume"></Image>
   <h1 className="text-xl font-semibold">AromaLuxe</h1>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
   </div>
  );
}