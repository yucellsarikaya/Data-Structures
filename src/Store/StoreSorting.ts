import Array from "../FakeArray.ts/FakeArray";
export class StoreSorting {
  public static show: boolean = false;

  public static bubbleSort() {
    let isSorted = false;
    const startTime = Date.now();
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < Array.length - 1; i++) {
        if (Array[i] > Array[i + 1]) {
          [Array[i], Array[i + 1]] = [Array[i + 1], Array[i]];
          isSorted = false;
        }
      }
    }
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    return elapsedTime;
  }

  // public static insertionSort() {
  //   const Array2 = Array;
  //   const startTime = Date.now();
  //   let len = Array2.length;
  //   for (let i = 1; i < len; i++) {
  //     let key = Array2[i];
  //     let j = i - 1;
  //     while (j >= 0 && Array2[j] > key) {
  //       Array2[j + 1] = Array2[j];
  //       j = j - 1;
  //     }
  //     Array2[j + 1] = key;
  //   }
  //   const endTime = Date.now();
  //   const elapsedTime = endTime - startTime;
  //   return elapsedTime;
  // }
}

// Bubble Sort +
// Insertion Sort
// Selection Sort
// Merge Sort
// Quick Sort
