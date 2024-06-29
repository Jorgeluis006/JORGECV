import React from 'react';
import Typography from '@mui/material/Typography';

// Define el componente de encabezado
const Header = () => {
  return (
    <Typography variant="h3" sx={{ color: "white", textAlign: "center", paddingTop: "30px", position: "fixed", width: "100%", top: 0, zIndex: 1000, backgroundColor: "black", left: 0, right: 0, margin: "0 auto", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ flexGrow: 1 }}>🄼🅈 🄻🄸🄵🄴 🄹🄾🅁🄶🄴 🄴🅂🄲🄾🄱🄰🅁</span>
      <button style={{ left:1650, color: "black", backgroundColor: "white", borderRadius: "5px", padding: "1px 30px", cursor: "pointer",top:15,position:"absolute" }}>Button</button>
    </Typography>
  );
};

export default Header;