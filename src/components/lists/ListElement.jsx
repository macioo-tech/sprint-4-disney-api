import { createPortal } from "react-dom";
import { useState } from "react";
import { styled } from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Details from "../modal/Details";

const StyledBox = styled(Box)`
  @media (max-width: 400px) {
    align-items: center;
    justify-content: center;
  }
`;

const ListElement = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { name, imageUrl } = item || {};
  const modal = createPortal(
    <Details item={item} onClose={() => setShowDetails(false)} />,
    document.body
  );

  return (
    <StyledBox>
      <Card variant="outlined">
        <CardContent>
          <Typography textAlign="center" variant="h6" component="div">
            {name}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            width={200}
            image={imageUrl}
            alt={name}
          />
          <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button onClick={() => setShowDetails(true)} size="small">
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      {showDetails && modal}
    </StyledBox>
  );
};

export default ListElement;
