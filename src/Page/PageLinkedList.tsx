import {
  insertNode,
  arrayToLinkedList,
  LinkedListStore as Store,
  insertLastNode,
  getIndex,
  removeIndex,
  clearList,
} from "../Store/LinkedListStore";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";

const PageLinkedList = () => {
  let [index, setIndex] = useState([1]);

  useEffect(() => {}, [setIndex]);

  const Reflesh = () => {
    setIndex([...index, 1]);
  };

  const InsertNode = () => {
    insertNode();
    arrayToLinkedList();
  };

  const InsertLastNode = () => {
    insertLastNode();
    arrayToLinkedList();
  };

  return (
    <div>
      <Container>
        <Button
          onClick={() => {
            Reflesh();
            InsertNode();
          }}
        >
          Insert Node
        </Button>
      </Container>
      <br />
      <Container>
        Linked List
        {Store.LinkListArray.map((element, key) => {
          return (
            <Col key={key}>
              Linklistin {key}. elemanı ={">"} {element}
            </Col>
          );
        })}
      </Container>
      <br />
      <Container>
        <Button
          onClick={() => {
            Reflesh();
            InsertLastNode();
          }}
        >
          Insert Last Node
        </Button>
      </Container>
      <br />
      <Container>
        <input
          placeholder="Search"
          type={"number"}
          onChange={(e) => {
            Reflesh();
            getIndex(
              e.currentTarget.value === ""
                ? undefined
                : parseInt(e.currentTarget.value)
            );
          }}
        />
        <br />
        <label>{Store.SetSearch}</label>
      </Container>
      <br />
      <Container>
        <input
          placeholder="Remove"
          type={"number"}
          onChange={(e) => {
            Reflesh();
            removeIndex(
              e.currentTarget.value === ""
                ? undefined
                : parseInt(e.currentTarget.value)
            );
            arrayToLinkedList();
          }}
        />
        <br />
      </Container>
      <br />
      <Container>
        <Button
          onClick={() => {
            Reflesh();
            clearList();
            arrayToLinkedList();
          }}
        >
          Clear list
        </Button>
      </Container>
    </div>
  );
};

export default PageLinkedList;
