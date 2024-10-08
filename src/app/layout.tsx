import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'

import type { Metadata } from 'next'
/* import Head from 'next/head' */

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: `Comming Soon - ` + process.env.title,
  icons: [
    {
     rel: 'icon',
     url: '/logo.ico', 
    },
  ],
  
}


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const { tawktoWidgetId, tawkToId } = process.env


  return (
    <html lang="en">
     <head>
      <link rel="icon" href="/favicon.ico" />
     </head>
      
      <body className={ `${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>     
        <script src={`https://embed.tawk.to/${tawkToId}/${tawktoWidgetId}`} async />     
      </body>
    </html>
  )
}
