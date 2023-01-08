import { StoreSearching as Store } from "../Store/StoreSearching";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import * as React from "react";

const PageSearching = () => {
  let [index, setIndex] = useState([1]);
  let [varMiLinear, setVarMiLinear] = React.useState<number>(0);
  let [varMiBinary, setVarMiBinary] = React.useState<number>(0);

  useEffect(() => {}, [setIndex]);

  const Reflesh = () => {
    setIndex([...index, 1]);
  };

  return (
    <div>
      <Container>
        Linear Search
        <br />
        <input
          placeholder="Search"
          type={"number"}
          onChange={(e) => {
            Reflesh();
            const x = Store.linearSearch(
              e.currentTarget.value === ""
                ? -1
                : parseInt(e.currentTarget.value)
            );
            setVarMiLinear(x);
          }}
        />
        <br />
        <label>
          {varMiLinear === 0 || varMiLinear === -1
            ? "Element is not present in the array"
            : "Element is present at " + varMiLinear + " position of array"}
        </label>
      </Container>
      <br />
      <Container>
        Binary Search
        <br />
        <input
          placeholder="Search"
          type={"number"}
          onChange={(e) => {
            Reflesh();
            const x = Store.linearSearch(
              e.currentTarget.value === ""
                ? -1
                : parseInt(e.currentTarget.value)
            );
            setVarMiBinary(x);
          }}
        />
        <br />
        <label>
          {varMiBinary === 0 || varMiBinary === -1
            ? "Element is not present in the array"
            : "Element is present at " + varMiBinary + " position of array"}
        </label>
      </Container>
    </div>
  );
};

export default PageSearching;
