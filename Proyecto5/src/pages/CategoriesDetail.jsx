import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const CategoriesDetail = () => {
  const location = useLocation();
  const { recipeCat } = location.state || {};

  if (!recipeCat) {
    return <Typography variant="h6">No se encontró la categoría.</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
        <CardMedia
          component="img"
          height="300"
          image={recipeCat.strCategoryThumb}
          alt={recipeCat.strCategory}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {recipeCat.strCategory}
          </Typography>
          <Typography variant="body1">
            {recipeCat.strCategoryDescription}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CategoriesDetail;
