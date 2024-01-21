import styles from './product.module.css';
import Image from 'next/image';

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
      <div className={styles.productOpt}>
        <div className={styles.input}>
          <label htmlFor={`addToChart${index}`}>Adicionar ao Carrinho</label>
          <input type="checkbox" name={`addToChart${index}`} id={`addToChart${index}`} />
        </div>
        <div className={styles.select}>
        <label htmlFor={`selectSize${index}`}>Tamanhos</label>
          <select name={`selectSize${index}`} id={`selectSize${index}`}>
            <option value="someOption">P</option>
            <option value="someOption">M</option>
            <option value="someOption">G</option>
          </select>
        </div>
      </div>
      </div>
    </>
  )
}