import React from 'react';
import Header from './components/Header';
import './styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>getlinked | Hackathon Chalenge 1.0 Landing Page Design</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
