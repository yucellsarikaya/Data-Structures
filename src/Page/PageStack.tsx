import { StackStore as Store } from "../Store/StackStore";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const PageStack = () => {
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
            Store.Push();
          }}
        >
          Array Push
        </button>
      </Container>
      <br />
      <Container>
        <button
          onClick={() => {
            Reflesh();
            Store.Pop();
          }}
        >
          Array Pop
        </button>
      </Container>
      <br />
    </div>
  );
};

export default PageStack;
