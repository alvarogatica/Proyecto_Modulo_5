import { useState } from "react";
import useFetch from "../hooks/useFetch";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const RandomMeal = () => {
  const [update, setUpdate] = useState(false);
  const { data, loading } = useFetch(import.meta.env.VITE_RANDOM_API_URL, update);

  const meal = data?.meals?.[0];

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Poppins', sans-serif", // Fuente mejorada para el título
          fontWeight: 700,
        }}
      >
        INTENTA ALGO NUEVO!!
      </Typography>

      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => setUpdate(!update)}
            sx={{
              mb: 4,
              py: 1.5,
              fontSize: "1rem",
              backgroundColor: "#2E7D32",
              "&:hover": {
                backgroundColor: "#025b3c", // un tono más claro al pasar el mouse
              },
            }}
          >
            Obtener una receta nueva para aprender a cocinar!!
          </Button>

          {loading && (
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <CircularProgress />
            </Grid>
          )}

          {meal && !loading && (
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Efecto de hover para la tarjeta
                },
              }}
            >
              <CardMedia
                component="img"
                height="250" // Tamaño ajustado para la imagen
                image={meal.strMealThumb}
                alt={meal.strMeal}
                sx={{ objectFit: "cover" }} // Ajuste de la imagen para que no se distorsione
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {meal.strMeal}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {meal.strInstructions.slice(0, 250)}...
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RandomMeal;
