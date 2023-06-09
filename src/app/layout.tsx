import './globals.css'
import React from "react";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <header>
      <h1>Demo Note</h1>
    </header>
    <nav>
      <a href="">Contact</a>
      <a href="">about</a>
    </nav>
    {children}
    </body>
    </html>
  )
}
