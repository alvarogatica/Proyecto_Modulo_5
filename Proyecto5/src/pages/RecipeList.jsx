import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const RecipeList = () => {

  const { data, loading, error } = useFetch(
    import.meta.env.VITE_RECIPES_API_URL
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
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {data?.meals.map((recipe) => (
        <Grid xs={12} sm={6} md={4} key={recipe.idMeal}>
          <Card>
            <CardActionArea
              component={Link}
              to={`/recetas/${recipe.strMeal}`}
              state={{ recipe }}
            >
              <CardMedia
                component="img"
                height="140"
                image={recipe.strMealThumb}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {recipe.strMeal}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
