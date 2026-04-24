import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Menu,
  MenuItem,
  IconButton,
  Switch,
  Checkbox,
  AppBar,
  Toolbar,
  Paper,
  Stack
} from "@mui/material";

export default function ThemePlayground() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (e) => setAnchorEl(e.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
      
      {/* AppBar x1 */}
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Theme Test</Typography>

          {/* Button x2 */}
          <Button color="inherit">Login</Button>
          <Button variant="contained">Signup</Button>
        </Toolbar>
      </AppBar>

      <Stack spacing={3} mt={3}>

        {/* Paper x1 */}
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Paper Section</Typography>

          {/* TextField x2 */}
          <TextField label="First Input" fullWidth sx={{ mt: 2 }} />
          <TextField label="Second Input" fullWidth sx={{ mt: 2 }} />

          {/* Switch x2 */}
          <Box sx={{ mt: 2 }}>
            <Switch /> Enable Feature A
          </Box>
          <Box>
            <Switch /> Enable Feature B
          </Box>

          {/* Checkbox x2 */}
          <Box>
            <Checkbox /> Option 1
          </Box>
          <Box>
            <Checkbox /> Option 2
          </Box>
        </Paper>

        {/* Card x2 */}
        <Stack direction="row" spacing={2}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography>Card One</Typography>
              <Button variant="contained">Action</Button>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography>Card Two</Typography>
              <Button variant="outlined">Action</Button>
            </CardContent>
          </Card>
        </Stack>

        {/* Menu x2 */}
        <Box>
          <Button variant="contained" onClick={openMenu}>
            Open Menu
          </Button>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>Settings</MenuItem>
          </Menu>
        </Box>

        {/* Typography x2 */}
        <Typography variant="h4">Heading Example</Typography>
        <Typography variant="body1">
          Body text example to test typography scaling and color.
        </Typography>

        {/* IconButton x2 (placeholder style) */}
        <Box>
          <IconButton>★</IconButton>
          <IconButton>⚙</IconButton>
        </Box>

      </Stack>
    </Box>
  );
}