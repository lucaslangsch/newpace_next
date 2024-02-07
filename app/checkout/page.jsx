import Image from 'next/image';
import styles from './page.module.css';
import image_01 from '../../public/bike_03.jpg';
import Header from "../components/Header/header";
import Checkout from '../components/Checkout/checkout';

export default function HomeCheckout() {
  return (
    <>
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
        <section>
          <Checkout />
        </section>
      </main>
    </>
  )
}