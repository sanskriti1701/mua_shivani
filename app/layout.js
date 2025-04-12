import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Shivani MUA Portfolio',
  description: 'Professional Makeup Artist Portfolio – Shivani',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
