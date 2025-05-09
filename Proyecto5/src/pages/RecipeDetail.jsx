import { Container, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const RecipeDetail = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }

    return ingredients;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {recipe.strMeal}
      </Typography>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "50%", borderRadius: "8px" }}
      />
      <Typography variant="h6" gutterBottom>
        Ingredientes:{" "}
      </Typography>
      <ul>
        {getIngredients().map((ingredient, index) => (
          <li key={index}>
            <Typography variant='body1'>{ingredient}</Typography></li>
        ))}</ul>
      <Typography>Instrucciones: </Typography>
      <p>{recipe.strInstructions}</p>
    </Container>
  );
};

export default RecipeDetail;
