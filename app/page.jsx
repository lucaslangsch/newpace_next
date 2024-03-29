import Image from 'next/image';
import styles from './page.module.css';
import image_01 from '../public/geral_03.jpg';
import { productList } from "./utils/productList";
import Product from "./components/Product/product";
import Chart from './components/Product/chart';
import Header from "./components/Header/header";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
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
            <Chart />
          </div>
      </main>
    </>
  )
}
