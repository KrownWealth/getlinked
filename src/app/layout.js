import Header from './components/Header';
import Link from 'next/link';
import './styles/globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>getlinked | Linked Talents and Recruiters</title>
      </head>
      <body>
        <Header />
        <div className="z-2">{children}</div>
        </body>
    </html>
  )
}