import { ArrayStore as Store } from "../Store/ArrayStore";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const ArrayPage = () => {
  let [index, setIndex] = useState([1]);

  useEffect(() => {}, [setIndex]);

  const Reflesh = () => {
    setIndex([...index, 1]);
  };

  return (
    <div>
      <Container>
        Array
        {Store.Array.map((element, index) => {
          return (
            <Col key={index}>
              Dizinin {index} elemanı ={">"} {element}
            </Col>
          );
        })}
      </Container>
      <br />
      <Container>
        <button
          onClick={() => {
            Reflesh();
            Store.IsArrayPush();
          }}
        >
          Array Insertion
        </button>
        {Store.PushArray.map((element, index) => {
          return (
            <Col key={index}>
              Dizinin {index} elemanı ={">"} {element}
            </Col>
          );
        })}
      </Container>
      <br />
      <Container>
        <button
          onClick={() => {
            Reflesh();
            Store.IsArrayDelete();
          }}
        >
          Array Deletion
        </button>
        {Store.DeleteArray.map((element, index) => {
          return (
            <Col key={index}>
              Dizinin {index} elemanı ={">"} {element}
            </Col>
          );
        })}
      </Container>
      <br />
      <Container>
        <input
          placeholder="Search"
          type={"number"}
          onChange={(e) => {
            Reflesh();
            Store.IsArraySearch(
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
          placeholder="Update 2nd element of array"
          type={"number"}
          onChange={(e) => {
            Reflesh();
            Store.IsArrayUpdate(
              e.currentTarget.value === ""
                ? undefined
                : parseInt(e.currentTarget.value)
            );
          }}
        />
        <br />
        {Store.UpdateArray.map((element, index) => {
          return (
            <Col key={index}>
              Dizinin {index} elemanı ={">"} {element}
            </Col>
          );
        })}
      </Container>
    </div>
  );
};

export default ArrayPage;
