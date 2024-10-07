import SearchBox from "@/components/SearchBox"

export const metadata = {
  title: 'Search-Page',
  description: 'Search Results',
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
        <SearchBox />
      </body>
    </html>
  )
}
