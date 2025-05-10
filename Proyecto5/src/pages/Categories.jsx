import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ErrorBoundary } from "../components/ErrorBoundary";

const Categories = () => {
  const { data, loading, error } = useFetch(
    import.meta.env.VITE_CATEGORIES_API_URL
  );

  if (loading) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        fontWeight={600}
        color="primary"
      >
        Categorías de Recetas
      </Typography>
      <Grid container spacing={4}>
        {data?.categories.map((recipeCat) => (
          <Grid item xs={12} sm={6} md={4} key={recipeCat.idCategory}>
            <ErrorBoundary>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/categorias/${recipeCat.strCategory}`}
                  state={{ recipeCat }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={recipeCat.strCategoryThumb}
                    alt={recipeCat.strCategory}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#2e7d32",
                      }}
                    >
                      {recipeCat.strCategory}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ErrorBoundary>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
