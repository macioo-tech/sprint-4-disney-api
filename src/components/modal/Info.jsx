import { Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

const Info = ({ name, options }) => {
  console.log(options);

  return (
    <>
      <List>
        {name}
        {options.map((item) => (
          <ListItem key={item}>
            <ListItemText secondary={item} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default Info;
