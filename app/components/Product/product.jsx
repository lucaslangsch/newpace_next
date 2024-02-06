import styles from './product.module.css';
import Image from 'next/image';
import AddProduct from './addProduct';

export default function Product({data, index}) {
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
      <p className={styles.productInfoPrice}>Preço: R${data.price.toFixed(2)}</p>
        <AddProduct key={index} data={data} index={index}/>
      </div>
    </>
  )
}