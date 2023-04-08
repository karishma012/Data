import React from 'react'
import image from "./img/2.png";
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import Table from './components/Table';
import { Footer } from './components/Footer';


function App() {
  
  const mystyle={
    width:'100%',
    height:'200vh',
    backgroundImage:`url(${image})`,
    
  }
  return (
    <>
   
   <div className="bg-fixed bg-cover bg-center"style={mystyle}>
    {/* Your component's content */}
    <Navbar/>
    <Content/>
    <Table/>
    <Footer/>
    
  </div>
    
    </>
  )
}

export default App
