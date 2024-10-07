import SearchNav from "@/components/SearchNav"

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
        <SearchNav />
        {children}
      </body>
    </html>
  )
}
