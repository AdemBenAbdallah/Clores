import './globals.css'
import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer';
import getCurrentUser from './actions/getCurrentUser';
import Provider from './components/Provider';



const font = Syne({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <Navbar currentUser={currentUser} />
          <div className='min-h-screen bg-gray_white'>
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
