export class StackStore {
  public static Array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public static Push = () => {
    StackStore.Array.push(Math.floor(Math.random() * 1000) + 1);
  };

  public static Pop = () => {
    StackStore.Array.pop();
  };
}
