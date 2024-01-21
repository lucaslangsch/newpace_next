import Image from 'next/image';
import styles from './page.module.css';
import image_01 from '../public/geral_03.jpg';
import icon_cart from '../public/icon_cart.png'
import { productList } from "./utils/productList";
import Product from "./components/Product/product";
import Header from "./components/Header/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.bannerIntro}>
            <div className={styles.bannerIntroImageContainerShadow}></div>
            <div className={styles.bannerIntroImageContainer}>
              <Image
                src={image_01}
                className={styles.bannerIntroImage}
                alt="Assessoria Esportiva"
                fill
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionProduct}>
          {productList.map((product, index) => (
            <Product key={index} data={product} index={index}/>
          ))}
        </section>
          <div className={styles.iconCart}>
            <Image
              src={icon_cart}
              // fill
              width={32}
              height={32}
              alt="Roupa de Treino - Macaquinho"
            />
          </div>
      </main>
    </>
  )
}
