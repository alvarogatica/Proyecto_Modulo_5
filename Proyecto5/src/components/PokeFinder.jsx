import {
  Avatar,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
  Box,
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const PokeFinder = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchPokemon = async () => {
    const name = inputRef.current.value.trim().toLowerCase();
    if (!name) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_POKEMON_API_URL}${name}`
      );
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const data = await response.json();
      setPokemon(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPokemon(null);
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 3,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Buscar Pokémon
        </Typography>
        <TextField
          inputRef={inputRef}
          fullWidth
          variant="outlined"
          placeholder="Ingrese el nombre del Pokémon"
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={fetchPokemon}>
          Buscar
        </Button>

        {error && (
          <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {pokemon && (
          <Box sx={{ marginTop: 3 }}>
            <Divider sx={{ marginBottom: 2 }} />
            <Avatar
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              sx={{ width: 100, height: 100, margin: "0 auto", marginBottom: 1 }}
            />
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {pokemon.name}
            </Typography>

            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Tipos:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap", mt: 1 }}>
              {pokemon.types.map((t) => (
                <Chip
                  key={t.type.name}
                  label={t.type.name}
                  color="secondary"
                  sx={{ textTransform: "capitalize" }}
                />
              ))}
            </Box>

            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Habilidades:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap", mt: 1 }}>
              {pokemon.abilities.map((a) => (
                <Chip
                  key={a.ability.name}
                  label={a.ability.name}
                  sx={{ textTransform: "capitalize" }}
                />
              ))}
            </Box>

            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 1 }}>
              Estadísticas base:
            </Typography>
            <Stack spacing={1}>
              {pokemon.stats.map((stat) => (
                <Box key={stat.stat.name}>
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "capitalize", display: "flex", justifyContent: "space-between" }}
                  >
                    {stat.stat.name}: <strong>{stat.base_stat}</strong>
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(stat.base_stat, 100)}
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PokeFinder;
