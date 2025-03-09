import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ListElement from "./ListElement";
import ThemeSwitch from "./ThemeSwitch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

import Switch from "@mui/material/Switch";

const BASE_URL = "https://api.disneyapi.dev";

const List = () => {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    `${BASE_URL}/character?page=${page}`
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <></>;
  }

  const { data: characters, info } = data;

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ThemeSwitch />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          size="large"
          page={page}
          count={info.totalPages}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default List;
