'use client'
import custom from './custom.module.css'
import outside from '@/style/outside.module.css'
export default function Home() {
  return (
    <main>
      <h1>Modular Styling</h1>
      <h2 className="main">This is global css</h2>
      <h3 className={custom.main}>This is modular css</h3>
      <h3 className={outside.main}>This is modular css but outside of the folder</h3>
    </main>
  )
}

