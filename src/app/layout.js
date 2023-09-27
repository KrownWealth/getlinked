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
<<<<<<< HEAD
        <div className="main-content">{children}</div>
=======
        {children}
>>>>>>> 92c4b2de04753cd6a5dd863fd148ca2cb0c6a30e
      </body>
    </html>
  );
}

export default RootLayout;
