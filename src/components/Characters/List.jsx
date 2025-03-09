import useFetch from "../../hooks/useFetch";
import ListElement from "./ListElement";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";

import Switch from "@mui/material/Switch";

const BASE_URL = "https://api.disneyapi.dev";

const List = () => {
  const { data, error, loading } = useFetch(`${BASE_URL}/character`);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <></>
    );
  }

  const { data: characters, info } = data;

  console.log("characters:", characters);
  console.log("info:", info);

  return (
    <Box>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        {characters.map((item) => (
          <ListElement key={item._id} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default List;
