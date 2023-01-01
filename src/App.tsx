import React, { useState } from "react";
import ArrayPage from "./Page/PageArray";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ArrayStore } from "./Store/ArrayStore";
import PageLinkedList from "./Page/PageLinkedList";
import { LinkedListStore, clearList } from "./Store/LinkedListStore";
import PageStack from "./Page/PageStack";
import PageQueue from "./Page/PageQueue";
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
  const [LinkedListModal, setLinkedListModal] = useState(false);
  const LinkedListBtn = () => setLinkedListModal(!LinkedListModal);
  const [StackModal, setStackModal] = useState(false);
  const StackBtn = () => setStackModal(!StackModal);
  const [QueueModal, setQueueModal] = useState(false);
  const QueueBtn = () => setQueueModal(!QueueModal);
  return (
    <div className="App">
      <Button
        style={{ display: "block" }}
        onClick={() => {
          {
            ArrayBtn();
            ArrayStore.Load();
            clearList();
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

      <Button
        style={{ display: "block" }}
        onClick={() => {
          {
            LinkedListBtn();
            LinkedListStore.Load();
          }
        }}
      >
        DS Linked List
      </Button>
      <Modal
        open={LinkedListModal}
        onClose={LinkedListBtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PageLinkedList />
        </Box>
      </Modal>

      <Button
        style={{ display: "block" }}
        onClick={() => {
          {
            StackBtn();
          }
        }}
      >
        DS Stack
      </Button>
      <Modal
        open={StackModal}
        onClose={StackBtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PageStack />
        </Box>
      </Modal>

      <Button
        style={{ display: "block" }}
        onClick={() => {
          {
            QueueBtn();
          }
        }}
      >
        DS Queue
      </Button>
      <Modal
        open={QueueModal}
        onClose={QueueBtn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PageQueue />
        </Box>
      </Modal>

      <p>-Tree</p>
      <p>-Graph</p>
      <p>-Searching</p>
      <p>-Sorting</p>
    </div>
  );
}

export default App;
