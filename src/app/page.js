'use client' // use this if you want interactivity at client side

export default function Home() {
  const call = (item) => {
    alert(item)
  }
  return (
    <main>
      <h1>Click the button</h1>
      <button onClick={() => call('apple')}>Click me</button>
    </main>
  )
}
