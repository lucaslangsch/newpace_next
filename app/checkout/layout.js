import { Inter } from 'next/font/google'
import '../globals.css'
import { GlobalContextProvider } from '../Context/store'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Checkout',
  description: 'Compre seu uniforme da Newpace, roupas esportivas para triatlo, corrida e ciclismo',
}

export default function Layout({ children }) {
  return (
      <>
        {children}
      </>
  )
}
