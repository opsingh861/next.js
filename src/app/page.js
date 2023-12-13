'use client'
import Link from "next/link"

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const changeRoute = (name) => {
    router.push(name)
  }
  return (
    <main>
      <h1>Home</h1>
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <button type="button" onClick={() => changeRoute("/about")}>
        Go to about page
      </button>
    </main>
  )
}

