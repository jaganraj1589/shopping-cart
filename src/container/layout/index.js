import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

const Layout = ({children}) => {
  return(
    <div className="container">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Layout;