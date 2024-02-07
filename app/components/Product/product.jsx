import styles from './product.module.css';
import Image from 'next/image';
import AddProduct from './addProduct';

export default function Product({data, index}) {
  return (
    <>
      <div className={styles.productInfo}>
      <h4 className={styles.productInfoTitle}>{data.title}</h4>
      <a href='https://back-np.vercel.app/download' className={styles.linkMedidas}>Tabela de Medidas</a>
      <div className={styles.productDivImg}>
        <Image 
          src={data.image}
          width={400}
          height={266}
          alt={data.title}
        />
      </div>
      <p className={styles.productInfoPrice}>Preço: R${data.price.toFixed(2)}</p>
        <AddProduct key={index} data={data} index={index}/>
      </div>
    </>
  )
}