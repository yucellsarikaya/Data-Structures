export class ArrayStore {
  public static IsArrayPush = () => {
    ArrayStore.PushArray.push(Math.floor(Math.random() * 1000) + 1);
  };

  public static IsArrayDelete = () => {
    ArrayStore.DeleteArray.pop();
  };

  public static IsArraySearch = (key: number | undefined) => {
    if (key === undefined) {
      ArrayStore.SetSearch = "";
      return false
    }
    const Isthere = ArrayStore.Array.indexOf(key);
    if (Isthere !== -1) {
      ArrayStore.SetSearch =
        "The data you entered is in the " + Isthere + ".index";
    } else {
      ArrayStore.SetSearch = "The data you entered is not in the array";
    }
  };

  public static IsArrayUpdate = (key: number | undefined) => {
    if (key === undefined) {
      return false
    }
    ArrayStore.UpdateArray[2] = key
  };

  public static Array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public static PushArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public static DeleteArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public static UpdateArray: any[] = [1, 2, 3, 4];
  public static SetSearch: string | number | undefined = "";
}
