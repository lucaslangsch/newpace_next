import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from './Context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uniformes - NewPace Assessoria Esportiva',
  description: 'Compre seu uniforme da Newpace, roupas esportivas para triatlo, corrida e ciclismo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className} suppressHydrationWarning={true}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
