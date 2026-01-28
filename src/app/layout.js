import './globals.css'

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
    apple: ['/letter_p.png'],
    shortcut: ['letter_p.png']
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
