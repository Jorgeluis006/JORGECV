import React from 'react';
import { AppRouter } from "./router/AppRouter";
import './App.css';
import Header from "./Header";
import Body from './Body';
import Galery from './Galery';
import Footer from './Footer';


export const App = () => {
  return (
    <>
    
      <Header >


      </Header>

      <Body >


      </Body>

      <Galery>

      </Galery>

    
      <Footer />
      
     
      {/* Aquí podrías agregar el componente AppRouter si lo necesitas */}
    </>
  );
};
