import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Recetas", path: "/recetas" },
  { name: "Categorías", path: "/categorias" },
  { name: "Perro Aleatorio", path: "/randomdog" },
  { name: "GitHub User", path: "/gituser" },
  { name: "Pokedex", path: "/pokedex" },
  { name: "Sobre Nosotros", path: "/about" },
  { name: "Test_Error_Boundary", path: "/testerror" },
];

function NavbarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1B5E20",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <RestaurantMenuIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: theme.typography.fontFamily,
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            SABORES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="start"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{
                display: { xs: "block", md: "none" },
                mt: 1,
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: theme.typography.fontFamily }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: theme.typography.fontFamily,
              fontWeight: 700,
              letterSpacing: ".15rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            SABORES
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  letterSpacing: "0.05rem",
                  fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
                  "&:hover": {
                    backgroundColor: "#2E7D32",
                    color: "#FFFDE7",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  },
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                  transition: "all 0.2s ease-in-out",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarComponent;
