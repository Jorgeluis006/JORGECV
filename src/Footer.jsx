import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        py: 5,
        px: 1,
        textAlign: 'center',
        width: '99%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex:1,
        top:"1400px"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        Desarrollado por{' '}
        <Link href="https://www.linkedin.com/in/jorge-escobar-real-80863b28b/" target="_blank" rel="noopener">
          Jorge Escobar
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;

