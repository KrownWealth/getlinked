import React from 'react';
import Header from './components/Header';
import './styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>getlinked | Linked Talents and Recruiters</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Header />
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
