import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '../components/Header/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Checkout',
  description: 'Compre seu uniforme da Newpace, roupas esportivas para triatlo, corrida e ciclismo',
}

export default function Layout({ children }) {
  return (
      <>
        <Header />
        {children}
      </>
  )
}
