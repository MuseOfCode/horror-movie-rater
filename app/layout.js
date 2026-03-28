import "./globals.css"

export const metadata = {
  title: "ScareScore",
  description: "A horror film tracker"
}

export default function RootLayout({children}) {
  return(
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}