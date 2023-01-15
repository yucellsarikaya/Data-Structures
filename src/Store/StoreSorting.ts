import Array from "../FakeArray.ts/FakeArray";
export class StoreSorting {
  public static show: boolean = false;

  public static bubbleSort() {
    const Array2 = [...Array, -1];
    let isSorted = false;
    const startTime = Date.now();
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < Array2.length - 1; i++) {
        if (Array2[i] > Array2[i + 1]) {
          [Array2[i], Array2[i + 1]] = [Array2[i + 1], Array2[i]];
          isSorted = false;
        }
      }
    }
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    return elapsedTime;
  }

  public static insertionSort() {
    const Array2 = [...Array, -1];
    const startTime = Date.now();
    let len = Array2.length;
    for (let i = 1; i < len; i++) {
      let key = Array2[i];
      let j = i - 1;
      while (j >= 0 && Array2[j] > key) {
        Array2[j + 1] = Array2[j];
        j = j - 1;
      }
      Array2[j + 1] = key;
    }
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    return elapsedTime;
  }

  public static selectionSort() {
    const Array2 = [...Array, -1];
    const startTime = Date.now();
    for (let i = 0; i < Array2.length; i++) {
      let min = i;
      for (let j = i + 1; j < Array2.length; j++) {
        if (Array2[j] < Array2[min]) {
          min = j;
        }
      }
      if (i !== min) {
        [Array2[i], Array2[min]] = [Array2[min], Array2[i]];
      }
    }
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    return elapsedTime;
  }

  public static mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return StoreSorting.merge(
      StoreSorting.mergeSort(left),
      StoreSorting.mergeSort(right)
    );
  }

  public static merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}

export function MergeSort() {
  const Array2 = [...Array, -1];
  const startTime = Date.now();
  const sortArray = StoreSorting.mergeSort(Array2);
  console.log(Array2[0])
  console.log(sortArray[0])
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;
  return elapsedTime;
}

// Bubble Sort +
// Insertion Sort +
// Selection Sort +
// Merge Sort +
// Quick Sort
