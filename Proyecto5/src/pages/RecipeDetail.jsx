import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Paper,
  Divider,
} from "@mui/material";
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
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight={600}
          textAlign="center"
        >
          {recipe.strMeal}
        </Typography>

        <Box
          component="img"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 2,
            mb: 3,
          }}
        />

        <Typography variant="h6" gutterBottom>
          Ingredientes:
        </Typography>
        <List dense>
          {getIngredients().map((ingredient, index) => (
            <ListItem key={index} sx={{ py: 0.5 }}>
              <ListItemText
                primary={ingredient}
                primaryTypographyProps={{ fontSize: 16 }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Instrucciones:
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {recipe.strInstructions}
        </Typography>
      </Paper>
    </Container>
  );
};

export default RecipeDetail;
