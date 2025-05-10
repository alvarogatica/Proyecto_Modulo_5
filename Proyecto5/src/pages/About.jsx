import React from "react";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Sobre SaborAndino
            </Typography>
            <Typography variant="body1" paragraph>
              SaborAndino es una empresa familiar fundada en 2015 en Mendoza,
              Argentina. Nos especializamos en ofrecer platos tradicionales
              latinoamericanos preparados con ingredientes frescos y locales.
            </Typography>
            <Typography variant="body1" paragraph>
              Nuestra misión es brindar una experiencia culinaria auténtica que
              conecte a las personas con la cultura y tradición andina. Creemos
              que cada plato cuenta una historia y estamos comprometidos con
              preservar esos sabores.
            </Typography>
            <Typography variant="body1" paragraph>
              Con una visión puesta en el futuro, aspiramos a convertirnos en un
              referente de la comida tradicional en toda América Latina,
              destacándonos por nuestra calidad, sabor y excelente servicio al
              cliente.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
