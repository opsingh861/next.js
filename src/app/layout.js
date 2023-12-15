
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,400;1,200;1,300&family=Roboto:wght@100&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata={
  title: 'Home page',
  description: 'This is the home page',
}