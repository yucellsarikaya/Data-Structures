import {
  QueueStore as Store,
  insertQueue,
  arrayToQuenList,
  removeQueue,
  peekFront,
  peekRear,
} from "../Store/QueueStore";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const QueueStack = () => {
  let [index, setIndex] = useState([1]);

  useEffect(() => {}, [setIndex]);

  const Reflesh = () => {
    setIndex([...index, 1]);
  };

  const InsertQueue = () => {
    insertQueue();
    arrayToQuenList();
  };

  const RemoveQueue = () => {
    removeQueue();
    arrayToQuenList();
  };

  return (
    <div>
      <Container>
        Linked List
        <Col>Front</Col>
        {Store.QueueListArray.map((element, key) => {
          return (
            <Col key={key}>
              Queue listin {key}. elemanı ={">"} {element}
            </Col>
          );
        })}
        <Col>Rear</Col>
      </Container>
      <br />
      <Container>
        <Button
          onClick={() => {
            Reflesh();
            InsertQueue();
          }}
        >
          Insert Node
        </Button>
      </Container>
      <br />
      <Container>
        <Button
          onClick={() => {
            Reflesh();
            RemoveQueue();
          }}
        >
          Remove Queue
        </Button>

        <br />
      </Container>
      <br />
      <Container>
        <Col>İlk eleman: {peekFront()}</Col>
      </Container>
      <Container>
        <Col>Son eleman: {peekRear()}</Col>
      </Container>
    </div>
  );
};

export default QueueStack;
