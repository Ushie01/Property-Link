import './../../styles'


export const metadata = {
  title: 'pl site',
  description: 'Property Listening',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>  
  )
}
