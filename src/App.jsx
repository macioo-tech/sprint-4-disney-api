import { ModeProvider } from "./context/ThemeContext";
import Header from "./components/header/Header";
import List from "./components/lists/List";
import { Paper } from "@mui/material";

function App() {
  return (
    <>
      <ModeProvider>
        <Paper elevation={0} sx={{height: "100%"}} square>
          <Header />
          <List />
        </Paper>
      </ModeProvider>
    </>
  );
}

export default App;
