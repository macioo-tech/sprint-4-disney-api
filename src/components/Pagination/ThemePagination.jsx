import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const ThemePagination = ({ info, page, setPage }) => {
    const { totalPages } = info;

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <>
      <Stack spacing={2}>
        <Pagination page={page} count={totalPages} onChange={handleChange} size="large" />
      </Stack>
    </>
  );
};

export default ThemePagination;
