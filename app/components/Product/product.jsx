'use client'

import styles from './product.module.css';
import Image from 'next/image';
import AddProduct from './addProduct';
import { useGlobalContext } from '@/app/Context/store';

export default function Product({data, index}) {
  const { products, setProducts } = useGlobalContext()
  function onAddClick({event, data}) {
    event.preventDefault()
    
    const productExists = products.some((product) => product.description === data.title);

    if (!productExists) {
      const newProduct = {
        quantity: 1,
        price: data.price,
        amount: data.price,
        description: data.title,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  }

  return (
    <>
      <div className={styles.productInfo}>
      <h4 className={styles.productInfoTitle}>{data.title}</h4>
      <p className={styles.productInfoDesc}>{data.desc}</p>
      <div className={styles.productDivImg}>
        <Image 
          src={data.image}
          width={400}
          height={266}
          alt="Roupa de Treino - Macaquinho"
        />
      </div>
      {/* {products && products.length > 1} */}
      <p className={styles.productInfoPrice}>Preço: R${data.price.toFixed(2)}</p>
        <AddProduct key={index} data={data} index={index}/>
      </div>
    </>
  )
}