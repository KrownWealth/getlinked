import React from 'react';
import Header from './components/Header';
import './styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>getlinked | Hackathon Challenge 1.0 Landing Page Design</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
<link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </head>
      <body>
        <Header />
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
