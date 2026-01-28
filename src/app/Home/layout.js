import './globals.css'
import Header from '../../shared/header/white';

import {
  Inter
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Patryck Cardozo',
  description: 'Portfólio',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-icon.png'],
    shortcut: ['letter_p.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  )
}
