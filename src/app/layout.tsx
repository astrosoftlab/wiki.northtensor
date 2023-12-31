import '@/styles/main.css'

export const metadata = {
  title: 'WikiTensor',
  description: 'Generate Articles With AI'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
