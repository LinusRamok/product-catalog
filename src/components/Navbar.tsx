"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });
  return (
    <nav className="bg-white p-4 shadow flex justify-between">
      <Link href="/" className="font-bold text-lg">
        Product Catalog
      </Link>
      <div>Cart ({isMounted ? cartCount : "..."})</div>
    </nav>
  );
};
export default Navbar;
