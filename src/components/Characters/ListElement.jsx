import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ListElement = ({ item }) => {
  const { name, imageUrl } = item || {};

  return (
    <Box sx={{ width: 200, height: 400 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography textAlign="center" variant="h6" component="div">
            {name}
          </Typography>
          <CardMedia component="img" height="200" image={imageUrl} alt={name} />
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ListElement;
