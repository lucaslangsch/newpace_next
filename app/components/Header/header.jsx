'use client'

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './header.module.css';
import logo from '../../../public/logo_np.png';

export default function Header() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setIsHeaderHidden(scrollY !== 0);
  }, []);

  useEffect(() => {
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true });
    const headerElement = document.querySelector(`.${styles.header}`);
    const handleMouseEnter = () => {
      setIsHeaderHidden(false);
    };

    const handleMouseLeave = () => {
      onScroll()
    };

    headerElement.addEventListener('mouseenter', handleMouseEnter);
    headerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
      headerElement.removeEventListener('mouseenter', handleMouseEnter);
      headerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const headerClasses = `${styles.header} ${isHeaderHidden ? styles['headerHidden'] : ''}`;

  return (
    <header className={headerClasses}>
      <div className={styles.headerDiv}>
        <div className={styles.headerDivImage}>
          <Image
            className={styles.headerLogoImage}
            src={logo}
            alt="Logo Newpace"
            fill
            sizes="100px"
            priority
          />
        </div>
        <div className={styles.headerDivLinks}>
          <ul className={styles.headerDivLinksList}>
            <li>
              <Link href="https://newpace.com.br">NEWPACE</Link>
            </li>
            <li>
              <Link href="https://uniformes.newpace.com.br">LOJA</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}