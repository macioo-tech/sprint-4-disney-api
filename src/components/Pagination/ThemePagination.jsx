import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const ThemePagination = () => {
  return (
    <>
      <Stack spacing={2}>
        <Pagination count={10} size="large" />
      </Stack>
    </>
  );
};

export default ThemePagination;
