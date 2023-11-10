import Image from 'next/image';
import styles from './page.module.css';
import image_01 from '../public/geral_01.jpg';
import foto_bike from '../public/bike_03.jpg';
import foto_natação from '../public/swim_01.jpg';
import foto_corrida from '../public/run_11.jpg';
import ciclismo from '../public/logo_bike.png';
import corrida from '../public/logo_run.png';
import natação from '../public/logo_swim.png';
import multiesporte from '../public/logo_tri.png';
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

          <div className={styles.about}>
            <h2>SOMOS UMA <span>ASSESSORIA ESPORTIVA</span> QUE TRANSFORMA!</h2>
            <div>
              <h3>DESDE 2010 CUIDANDO DE VOCÊ</h3>
              <p>
                A NewPace Assessoria é especializada no treinamento de caminhada, corrida, natação, ciclismo e triatlo.
                Com 16 anos de experiência, atendemos nossos atletas tanto presencialmente em Florianópolis como remotamente em todo o Brasil.
                Os treinos são cuidadosamente elaborados por educadores físicos com conhecimento especializado.
                A NewPace está aqui para ajudá-lo a alcançar seus objetivos, seja uma melhor qualidade de vida,
                participar da sua primeira corrida, completar uma maratona ou conquistar o tão sonhado IronMan.
              </p>
            </div>
          </div>

          <div className={styles.balta}>
            <div className={styles.baltaInterior}>
              <div className={styles.baltaImageContainer}>
                <Image
                  className={styles.baltaImage}
                  src={image_01}
                  fill
                  sizes="500px"
                  alt="Rodrigo Baltazar"
                  placeholder="blur"
                ></Image>
              </div>
              <div>
                <h2>Rodrigo Baltazar</h2>
                <li>Coach e fundador da NewPace</li>
                <li>Educador físico</li>
                <li>Mestre em Ciências do Movimento pela UDESC</li>
                <li>Treinador CBtri Nível 2</li>
                <li>Treinador Pose Method of Running - EUA</li>
                <li>Certificação Bike Fit Trek/ Cycle Logic - EUA</li>
                <li>Certificação Bike Fit Shimano Montion Analyzer</li>
                <li>9 x IRONMAN finisher</li>
                <li>Atleta de Triathlon com mais de 20 anos de experiência</li>
              </div>
            </div>
          </div>

          <div className={styles.bannerModality}>
            <div className={styles.bannerModalityParallax}>
              <div className={styles.bannerModalityShadow}></div>
              <div className={styles.bannerModalityImageContainer}>
                <Image
                  className={styles.bannerModalityBike}
                  alt="Ciclismo"
                  src={foto_bike}
                  fill
                  sizes={100}
                  loading='lazy'
                  placeholder='blur'
                />
              </div>
            </div>
            <div className={styles.bannerModalityParallax}>
              <div className={styles.bannerModalityShadow}></div>
              <div className={styles.bannerModalityImageContainer}>
                <Image
                className={styles.bannerModalityRun}
                src={foto_corrida}
                alt="Corrida"
                fill
                sizes={100}
                loading='lazy'
                placeholder='blur'
              />
              </div>
            </div>
            <div className={styles.bannerModalityParallax}>
              <div className={styles.bannerModalityShadow}></div>
              <div className={styles.bannerModalityImageContainer}>
                <Image
                  className={styles.bannerModalitySwim}
                  src={foto_natação}
                  alt="Natação"
                  fill
                  sizes={100}
                  placeholder='blur'
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={styles.modalitySection}>
            <h2>NOSSAS MODALIDADES</h2>
            <div className={styles.modalitySectionGrid}>
              <div className={styles.modalitySport}>
                <div className={styles.modalityGridContainerImage}>
                  <Image
                    className={styles.modalityGridImage}
                    src={multiesporte}
                    fill
                    sizes='140px'
                    alt="Modalidade Multiesporte"
                    placeholder="blur"
                  ></Image>
                </div>
                <div className={styles.modalitySportText}>
                  <h2>MULTIESPORTE</h2>
                  <p>Planilhas de treino completas para <i>triathlon</i> ou <i>duathlon</i>, você decide quais esportes. Nossas planilhas atendem do <i>sprint</i> ao <i>Ironman</i>.</p>
                  <button className={styles.modalityButton}>Saiba mais</button>
                </div>
              </div>
              <div className={styles.modalitySport}>
                <div className={styles.modalityGridContainerImage}>
                  <Image
                    className={styles.modalityGridImage}
                    src={corrida}
                    fill
                    sizes='140px'
                    alt="Modalidade Corrida"
                    placeholder="blur"
                    loading='lazy'
                  ></Image>
                </div>
                <div className={styles.modalitySportText}>
                  <h2>CORRIDA</h2>
                  <p>Seja na corrida de rua ou <i>trail run</i> nossa assessoria vai te ajudar a destravar seu melhor <i>pace.</i> Planilhas de corrida personalizadas para alcançar seus objetivos.</p>
                  <button className={styles.modalityButton}>Saiba mais</button>
                </div>
              </div>
              <div className={styles.modalitySport}>
                <div className={styles.modalityGridContainerImage}>
                  <Image
                    className={styles.modalityGridImage}
                    src={ciclismo}
                    fill
                    sizes='140px'
                    alt="Modalidade Ciclismo"
                    placeholder="blur"
                  ></Image>
                </div>
                <div className={styles.modalitySportText}>
                  <h2>CICLISMO</h2>
                  <p>Planilhas para ciclismo de estrada e <i>triathlon</i></p>
                  <button className={styles.modalityButton}>Saiba mais</button>
                </div>
              </div>
              <div className={styles.modalitySport}>
                <div className={styles.modalityGridContainerImage}>
                  <Image
                    className={styles.imageSport}
                    src={natação}
                    fill
                    sizes='140px'
                    alt="Modalidade Natação"
                    placeholder="blur"
                  ></Image>
                </div>
                <div className={styles.modalitySportText}>
                  <h2>NATAÇÃO</h2>
                  <p>Melhore seus resultados dentro d'água</p>
                  <button className={styles.modalityButton}>Saiba mais</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.depoSection}>
            <div className={styles.depoCard}>
              <div className={styles.depoImage}>
                <Image
                  src={foto_natação}
                  fill
                  alt="Natação"
                  placeholder="blur"
                  sizes='100%'
                  style={{
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                ></Image>
              </div>
              <div className={styles.depoCardText}>
                <h3>Nome</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque dolorem alias consequatur nulla, labore provident atque obcaecati molestias veritatis, voluptatibus suscipit vitae expedita sunt voluptates veniam odio, repellat eos.</p>
              </div>
            </div>

            <div className={styles.depoCard}>
              <div className={styles.depoImage}>
                <Image
                  src={foto_natação}
                  fill
                  alt="Natação"
                  placeholder="blur"
                  loading='lazy'
                  sizes='100%'
                  style={{
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                ></Image>
              </div>
              <div className={styles.depoCardText}>
                <h3>Nome</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque dolorem alias consequatur nulla, labore provident atque obcaecati molestias veritatis, voluptatibus suscipit vitae expedita sunt voluptates veniam odio, repellat eos.</p>
              </div>
            </div>

            <div className={styles.depoCard}>
              <div className={styles.depoImage}>
                <Image
                  src={foto_natação}
                  fill
                  alt="Natação"
                  placeholder="blur"
                  sizes='100%'
                  style={{
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                ></Image>
              </div>
              <div className={styles.depoCardText}>
                <h3>Nome</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque dolorem alias consequatur nulla, labore provident atque obcaecati molestias veritatis, voluptatibus suscipit vitae expedita sunt voluptates veniam odio, repellat eos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
