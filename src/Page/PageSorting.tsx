import {
  StoreSorting as Store,
  MergeSort as mergeSort,
  QuickSort as quickSort,
} from "../Store/StoreSorting";
import Array from "../FakeArray.ts/FakeArray";
import { useEffect, useState } from "react";
import * as React from "react";
import Spinner from "../Components/Spinner";
import Container from "react-bootstrap/Container";

const PageSorting = () => {
  let [index, setIndex] = useState([1]);

  let [BubbleSortSecond, setBubbleSort] = React.useState<number>(0);

  let [InsertionSortSecond, setInsertionSort] = React.useState<number>(0);

  let [SelectionSortSecond, setSelectionSort] = React.useState<number>(0);

  let [MergeSortSecond, setMergeSort] = React.useState<number>(0);

  let [QuickSortSecond, setQuickSort] = React.useState<number>(0);

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

  const InsertionSort = () =>
    new Promise((resolve, reject) => {
      const x = Store.insertionSort();
      resolve(InsertionSortReflesh(x));
    });

  const InsertionSortReflesh = (data: any) => {
    setInsertionSort(data);
    Store.show = false;
    setSpinner(Store.show);
  };

  const SelectionSort = () =>
    new Promise((resolve, reject) => {
      const x = Store.selectionSort();
      resolve(SelectionSortReflesh(x));
    });

  const SelectionSortReflesh = (data: any) => {
    setSelectionSort(data);
    Store.show = false;
    setSpinner(Store.show);
  };

  const MergeSort = () =>
    new Promise((resolve, reject) => {
      const x = mergeSort();
      resolve(MergeSortReflesh(x));
    });

  const MergeSortReflesh = (data: any) => {
    setMergeSort(data);
    Store.show = false;
    setSpinner(Store.show);
  };

  const QuickSort = () =>
    new Promise((resolve, reject) => {
      const x = quickSort();
      resolve(QuickSortReflesh(x));
    });

  const QuickSortReflesh = (data: any) => {
    setQuickSort(data);
    Store.show = false;
    setSpinner(Store.show);
  };

  return (
    <div>
      <label>Array length: {Array.length}</label>
      <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            setTimeout(() => {
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
      <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            setTimeout(() => {
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
      </Container>
      <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            setTimeout(() => {
              SelectionSort();
            }, 1000);
          }}
        >
          Selection Sort
        </button>
        <br />
        <label>{`Sorting the Array took ${
          SelectionSortSecond / 1000
        } second.`}</label>
      </Container>
      <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            setTimeout(() => {
              MergeSort();
            }, 1000);
          }}
        >
          Merge Sort
        </button>
        <br />
        <label>{`Sorting the Array took ${
          MergeSortSecond / 1000
        } second.`}</label>
      </Container>
      <Container>
        <button
          onClick={async () => {
            Reflesh();
            Store.show = true;
            setSpinner(Store.show);
            setTimeout(() => {
              QuickSort();
            }, 1000);
          }}
        >
          Quick Sort
        </button>
        <br />
        <label>{`Sorting the Array took ${
          QuickSortSecond / 1000
        } second.`}</label>
      </Container>
      {spinner ? <Spinner /> : <></>}
    </div>
  );
};

export default PageSorting;
