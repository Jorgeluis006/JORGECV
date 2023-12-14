// Importa los módulos necesarios de Material-UI
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Define el componente de encabezado
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1"sx={{ textAlign: 'center', mt: 1 }} color="pink">
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;