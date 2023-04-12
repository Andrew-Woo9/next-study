import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Counter from "@/components/Counter";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('서버 **')
  return (
    <>
      <Counter />
      <div>홈페이지</div>
    </>
  )
}
