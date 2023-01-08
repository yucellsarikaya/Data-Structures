import Array from "../FakeArray.ts/FakeArray";
export class StoreSearching {
  public static linearSearch(data: number) {
    for (let i = 0; i < Array.length; i++) {
      if (Array[i] === data) {
        return i;
      }
    }
    return -1;
  }
  public static binarySearch(data: number) {
    const SortArray = Array.sort(function (a, b) {
      return a - b;
    });
    //Binary search algoritması, dizi (array) ve sıralı listeler (sorted lists) gibi veri yapılarında kullanılabilir.
    let start = 0;
    let end = SortArray.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (SortArray[middle] !== data && start <= end) {
      if (data < SortArray[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }

    return SortArray[middle] === data ? middle : -1;
  }
}
