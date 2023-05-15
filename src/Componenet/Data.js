import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Data = ({ name, email, index }) => {
  return (
    <div className="data_1">
      <h5>{name}</h5>
      <h5>{email}</h5>
      <Stack>
        <Button variant="contained" color="success">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Data;
