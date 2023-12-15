import img from './OIP.jpeg'
import Image from 'next/image'

export default function Home() {
  console.log(img)
  return (
    <main>
      <h1>Image optimization</h1>
      {/* <Image
        src={img}
        alt="Picture of the author"
        width={200}
        height={200} />
      <br />
      <br />
      <h2>Without next Image tag</h2>
      <img height={100} width={100} src={img.src} alt="Picture of the author" /> */}

      <h1>Using external Links</h1>
      <Image
        src="https://getwallpapers.com/wallpaper/full/e/5/a/299879.jpg"
        width={400}
        height={400} />

      <img src="https://getwallpapers.com/wallpaper/full/e/5/a/299879.jpg" alt="Picture of the author"
     />
    </main>
  )
}

