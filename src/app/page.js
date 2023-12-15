'use client'
import { useState } from 'react'
import style from './style.module.css'
export default function Home() {
  const [color, setColor] = useState('red')
  const {blue} = style
  return (
    <main>
      <h1>Conditional Styling</h1>
      <h2 style={{ color: color == 'red' ? 'red' : 'green' }}>Heading 2</h2>
      <h3 className={color == 'red' ? style.red : style.green}>Heading 3</h3>
      <button onClick={() => setColor(color == 'red' ? 'green' : 'red')}>Change Color</button>
      <h2 className={blue}>blue</h2>
      <h2 id={style.orange}>Orange</h2>
    </main>
  )
}

