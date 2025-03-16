import { useState } from "react";
import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// eslint-disable-next-line react-refresh/only-export-components
export const ModeContext = createContext(null);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};
