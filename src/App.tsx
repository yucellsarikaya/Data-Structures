import React, { useState } from "react";
import ArrayPage from "./Page/PageArray";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ArrayStore } from "./Store/ArrayStore";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  height: "100%",
  display: "block",
};

function App() {
  const [ArrayModal, setArrayModal] = useState(false);
  const ArrayBtn = () => setArrayModal(!ArrayModal);
  return (
    <div className="App">
      <Button
        onClick={() => {
          {
            ArrayBtn();
            ArrayStore.Load();
          }
        }}
      >
        DS Array
      </Button>
      <Modal
        open={ArrayModal}
        onClose={ArrayBtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ArrayPage />
        </Box>
      </Modal>
      <p>-Linked List</p>
      <p>-Stack</p>
      <p>-Queue</p>
      <p>-Tree</p>
      <p>-Graph</p>
      <p>-Searching</p>
      <p>-Sorting</p>
    </div>
  );
}

export default App;
