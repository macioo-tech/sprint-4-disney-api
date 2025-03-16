import { useContext } from "react";
import { ModeContext } from "../../context/ThemeContext";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Header = () => {
  const { mode, setMode } = useContext(ModeContext);

  console.log(mode);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{padding: "20px", justifyContent: "space-around", alignItems: "baseline" }}
      >
        <Grid item size={6} sx={{ fontSize: 40 }}>
          Disney App
        </Grid>
        <Grid
          item
          size={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={mode}
                onChange={() => setMode((prev) => !prev)}
              />
            }
            label={mode ? "Light" : "Dark"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
