'use client'
import { useGlobalContext } from '@/app/Context/store';
import Image from 'next/image';
import icon_cart from '../../../public/icon_cart.png'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Chart() {
  const { products, setProducts } = useGlobalContext()

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Link href='checkout'>
      <Image
        src={icon_cart}
        width={32}
        height={32}
        alt="Roupa de Treino - Macaquinho"
        />
      <p>{products.length}</p>
    </Link>
  )
}