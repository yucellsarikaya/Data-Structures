export class Node {
  private _data: number;
  private _next: Node | null ;
  constructor(data: number, next: Node | null = null) {
    this._data = data;
    this._next = next;
  }
  public get next() {
    return this._next!;
  }
  public set next(node: Node | null) {
    this._next = node;
  }
  public get data() {
    return this._data!;
  }
  public set data(data: number) {
    this._data = data;
  }
}
