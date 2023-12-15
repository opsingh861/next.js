import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '100',
  display: 'swap',
  subsets: ['cyrillic-ext', 'greek']
})
export default function Home() {
  return (
    <main>
      <h1>Font optimization</h1>
      <h2 style={{ fontFamily: 'roboto', fontWeight: '100' }}>Robot mono using link</h2>
      <h2 className={roboto.className}>Roboto using next.js font</h2>
    </main>
  )
}

