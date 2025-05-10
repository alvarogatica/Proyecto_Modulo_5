import {
  Avatar,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const UserFinder = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchUsers = async () => {
    const username = inputRef.current.value.trim();
    if (!username) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_GITHUB_USER_API_URL}${username}`
      );
      if (!response.ok) {
        throw new Error("Usuario no encontrado");
      }
      const data = await response.json();
      setUser(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: 420,
        margin: "40px auto",
        padding: 3,
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Buscar usuario de GitHub
        </Typography>
        <TextField
          inputRef={inputRef}
          fullWidth
          variant="outlined"
          placeholder="Ingrese el nombre del usuario"
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={fetchUsers}>
          Buscar
        </Button>

        {error && (
          <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {user && (
          <Box sx={{ marginTop: 3, textAlign: "center" }}>
            <Divider sx={{ marginBottom: 2 }} />
            <Avatar
              src={user.avatar_url}
              alt={user.name}
              sx={{ width: 100, height: 100, margin: "0 auto", marginBottom: 1 }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              {user.name || user.login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seguidores: {user.followers}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Repositorios públicos: {user.public_repos}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default UserFinder;
