import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const NewUserActions = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/auth/register">
        <Button variant="contained" sx={{ fontSize: 12 }}>
          Crear cuenta
        </Button>
      </Link>
      <Link to="/auth/login">
        <Button variant="contained" sx={{ fontSize: 12 }}>
          Iniciar sesion
        </Button>
      </Link>
    </Stack>
  );
};
