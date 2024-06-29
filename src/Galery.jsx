import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import caruselpagina from "./assets/caruselpagina"

const Galery = () => {
  const carouselContainerStyle = {
    position: 'relative',
    maxWidth: '2000px', // Ancho máximo del carrusel ajustado según tu diseño
    margin: '50px auto',
    top:"560px", // Centra el carrusel horizontalmente
   
  };

  const carouselImageStyle = {
    maxWidth: '100%', // Ajusta el tamaño máximo de las imágenes dentro del carrusel
    maxHeight: '5000px', // Altura máxima de las imágenes dentro del carrusel
    borderRadius: '9px', // Bordes redondeados para las imágenes
  };

  return (
  
    
    <Box style={carouselContainerStyle}>
     <Typography variant="h1" gutterBottom sx={{  color: "white", textAlign: "center", paddingTop: "1px", width: "100%"  , left: 100, right: 0, margin: "0 auto", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center"   }}>
     <span style={{ flexGrow: 1 }}>ᴇx ᴘʀᴏᴊᴇᴄᴛꜱ ʟᴀꜱᴛ ʏᴇᴀʀ</span>
      </Typography>
      <Carousel
        autoPlay={false}
        animation="slide"
        indicators={false} // Oculta los indicadores de página si no son necesarios
        navButtonsAlwaysVisible={true} // Muestra siempre los botones de navegación
      >
        {caruselpagina.map((producto, index) => (
          <img
            key={index}
            src={producto.img}
            alt={producto.nombre}
            style={carouselImageStyle}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Galery;
