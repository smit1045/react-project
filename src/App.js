import "./App.css";
import Header from "./Componenet/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  function removeItem(index){
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            onClick={addData}
            className="btn"
            variant="contained"
            color="success"
          >
            Add
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_1">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_1">
              <h5>{element.name}</h5>
              <h5>{element.email}</h5>
              <Stack>
                <Button onClick={() => removeItem(index)} variant="contained" color="success">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
