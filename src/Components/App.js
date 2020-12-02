import './App.css';
import React from 'react';
import Header from './Header'
import MainBody from './Main'
import Footer from './Footer'

function ParentChildComp(){
  return(
    <div>
      <Header />
      <MainBody />
      <Footer />
      </div>
  )
  }

  export default ParentChildComp;