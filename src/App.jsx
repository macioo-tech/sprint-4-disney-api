import List from "./components/Characters/List";
import ThemePagination from "./components/Pagination/ThemePagination";
import ThemeSwitch from "./components/Switch/ThemeSwitch";

function App() {
  return (
    <>
      <ThemeSwitch />
      <List />
      <ThemePagination />
    </>
  );
}

export default App;
