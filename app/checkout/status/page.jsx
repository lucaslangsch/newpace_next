'use client'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import image_01 from '../../../public/bike_03.jpg';

export default function Status() {
  const param = useSearchParams();
 
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
          <h2 style={{marginTop: '40px'}}>Pagamento {param}</h2>
        </section>
      </main>
    </>
  )
}