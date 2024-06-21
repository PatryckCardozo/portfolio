import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Header from './components/Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Patryck Cardozo',
  description: 'Portfólio',
  icons:{
    icon:['/favicon.ico'],
    apple:['letter_p.png'],
    shortcut:['letter_p.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  )
}
