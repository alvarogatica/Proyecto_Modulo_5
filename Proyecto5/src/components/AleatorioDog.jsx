import { useState } from "react";
import useFetch from "../hooks/useFetch";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const AleatorioDog = () => {
  const [update, setUpdate] = useState(false);
  const { data, loading } = useFetch(
    import.meta.env.VITE_RANDOM_DOG_API_URL,
    update
  );

  const dogImage = data?.message;

  return (
    <Box sx={{ mt: 6, px: 2 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
        }}
      >
        ¡Mira un perro aleatorio!
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
                backgroundColor: "#025b3c",
              },
            }}
          >
            Ver un perro aleatorio
          </Button>

          {loading && (
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <CircularProgress />
            </Grid>
          )}

          {dogImage && !loading && (
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={dogImage}
                alt="Perro aleatorio"
                sx={{ objectFit: "cover" }}
              />
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AleatorioDog;
