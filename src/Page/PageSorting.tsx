import { StoreSorting as Store } from "../Store/StoreSorting";
import { useEffect, useState } from "react";
import * as React from "react";
import Spinner from "../Components/Spinner";
import { BallTriangle } from "react-loader-spinner";
import Container from "react-bootstrap/Container";

const PageSorting = () => {
  let [index, setIndex] = useState([1]);
  let [BubbleSortSecond, setBubbleSort] = React.useState<number>(0);

  let [InsertionSortSecond, setInsertionSort] = React.useState<number>(0);

  let [spinner, setSpinner] = React.useState<boolean>(false);
  const Reflesh = () => {
    setIndex([...index, 1]);
  };
  useEffect(() => {}, [setSpinner]);

  const BubbleSort = () =>
    new Promise((resolve, reject) => {
      const x = Store.bubbleSort();
      resolve(BubbleSortReflesh(x));
    });

  const BubbleSortReflesh = (data: any) => {
    setBubbleSort(data);
    Store.show = false;
    setSpinner(Store.show);
  };

//   const InsertionSort = () =>
//     new Promise((resolve, reject) => {
//       const x = Store.insertionSort();
//       resolve(InsertionSortReflesh(x));
//     });

//   const InsertionSortReflesh = (data: any) => {
//     setInsertionSort(data);
//     Store.show = false;
//     setSpinner(Store.show);
//   };

  return (
    <div>
      <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            //
            setTimeout(() => {
              //     const x = Store.bubbleSort();
              //   setSortSecond(x);
              BubbleSort();
            }, 1000);
          }}
        >
          Bubble Sort
        </button>
        <br />
        <label>{`Sorting the Array took ${
          BubbleSortSecond / 1000
        } second.`}</label>
      </Container>
      {/* <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            //
            setTimeout(() => {
              //     const x = Store.bubbleSort();
              //   setSortSecond(x);
              InsertionSort();
            }, 1000);
          }}
        >
          Insertion Sort
        </button>
        <br />
        <label>{`Sorting the Array took ${
          InsertionSortSecond / 1000
        } second.`}</label>
      </Container> */}
      {spinner ? <Spinner /> : <></>}
    </div>
  );
};

export default PageSorting;

{
  /* <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={spinner}
      /> */
}
