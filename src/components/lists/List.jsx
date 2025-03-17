import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import ListElement from "./ListElement";

const BASE_URL = "https://api.disneyapi.dev";

const List = () => {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    `${BASE_URL}/character?page=${page}`
  );

  if (loading) {
    return (
      <Box sx={{ 
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "20px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" }}>
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
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{margin: "20px"}}>
        {characters.map((item) => (
          <Grid item key={item._id} size={{ xs: 12, sm: 6, md: 2 }}>
            <ListElement item={item} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
