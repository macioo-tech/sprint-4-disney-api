import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Info from "./Info";
import { Paper } from "@mui/material";

const Details = ({ item, onClose }) => {
  const { name, imageUrl, films, shortFilms, videoGames, tvShows } = item || {};

  return (
    <Paper elevation={0} sx={{ height: "100%" }} square>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <Card
          sx={{
            padding: "20px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            zIndex: "10",
          }}
        >
          <CardContent>
            <Typography textAlign="center" variant="h6" component="div">
              {name}
            </Typography>
            <CardMedia
              image={imageUrl}
              alt={name}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <Info name="Films" options={films} />
            <Info name="Short Films" options={shortFilms} />
            <Info name="Video Games" options={videoGames} />
            <Info name="TV Shows" options={tvShows} />

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Button onClick={onClose} size="small">
                Close
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
};

export default Details;
