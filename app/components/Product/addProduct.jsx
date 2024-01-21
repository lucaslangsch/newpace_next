'use client'
import styles from './addProduct.module.css';
import { useGlobalContext } from '@/app/Context/store';
import { useEffect, useState } from 'react';

export default function AddProduct({ data, index }) {
  const { products, setProducts } = useGlobalContext()

  function onAddClick({ event, data }) {
    event.preventDefault()
    const selectedSize = document.getElementById(`selectSize${index}`).value;
    const newProduct = {
      quantity: 1,
      price: data.price,
      amount: data.price,
      description: `${data.title} - ${selectedSize}`,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className={styles.productOpt}>
      <div className={styles.input}>
        <button
          onClick={(event) => onAddClick({ event, data })}
        >
          Adicionar ao Carrinho
        </button>
      </div>
      <div className={styles.select}>
        <label htmlFor={`selectSize${index}`}>Tamanhos</label>
        <select name={`selectSize${index}`} id={`selectSize${index}`}>
          {data.size.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  )
}