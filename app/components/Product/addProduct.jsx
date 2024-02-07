'use client'
import styles from './addProduct.module.css';
import { useGlobalContext } from '@/app/Context/store';
import { useEffect, useState } from 'react';

export default function AddProduct({ data, index }) {
  const { products, setProducts, total, setTotal } = useGlobalContext()
  const [size, setSize] = useState()

  useEffect(() => {
    setSize(data.size[0])
  }, []);

  function onAddClick({ event, data }) {
    event.preventDefault()
    const newProduct = {
      title: `${data.title} - ${size}`,
      description: size,
      picture_url: null,
      category_id: 'fashion',
      quantity: 1,
      currency_id: 'BRL',
      unit_price: data.price,
      id: data.id
    };
    const existingProductIndex = products.findIndex(
      (product) => product.description === newProduct.description && product.title === newProduct.title
    );
  
    if (existingProductIndex !== -1) {

      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity += 1;
      setProducts(updatedProducts);
    } else {

      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  }

  function handleChange({event}) {
    setSize(event.target.value);
  }

  return (
    <div className={styles.productOpt}>
      <div className={styles.input}>
        <button
          onClick={(event) => onAddClick({ event, data })}
        >
          Adicionar
        </button>
      </div>
      <div className={styles.select}>
        <label htmlFor={`selectSize${index}`}>Tamanhos</label>
        <select name={`selectSize${index}`} id={`selectSize${index}`} value={size} onChange={(event) => handleChange({ event })}>
          {data.size.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  )
}