"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <nav className="bg-white p-4 shadow flex justify-between">
      <Link href="/" className="font-bold text-lg">
        Product Catalog
      </Link>
      <div>Cart ({cartCount})</div>
    </nav>
  );
};
export default Navbar;
