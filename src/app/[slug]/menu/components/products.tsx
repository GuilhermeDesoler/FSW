"use client"

import {  Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

const Products = ({products}: ProductsProps) => {
  return ( 
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link key={product.id} className="flex items-center border-b justify-between gap-10 py-" href="/">
          <div>
            <h3 className="text-sem font-medium">
              {product.name}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">{Intl.NumberFormat("pt", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)
            }</p>
          </div>
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image src={product.imageUrl} alt={product.name} fill className="object-contain rounded-lg" />
          </div>
        </Link>
      ))}
    </div>
  );
}
 
export default Products;