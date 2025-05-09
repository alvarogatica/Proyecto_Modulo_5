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
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {data?.categories.map((recipeCat) => (
          <Grid xs={12} sm={6} md={4} key={recipeCat.idCategory}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/categorias/${recipeCat.strCategory}`}
                state={{ recipeCat }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={recipeCat.strCategoryThumb}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {recipeCat.strCategory}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default Categories;
  