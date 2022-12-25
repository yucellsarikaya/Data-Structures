import { Node } from "../Classes/Node";
export class LinkedListStore {
  private head: Node | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert node
  InsertNode(data: number) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  InsertLastNode(data: number) {
    let node = new Node(data);
    let current: any;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //Insert at index
  InsertAt(data: number, index: number) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node: Node | null = new Node(data);

    let current: Node | null;
    let previous: Node | null = null;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current !== null ? current.next : null;
    }
    node.next = current;
    if (previous && previous.next) {
      previous.next = node;
    }
    this.size++;
  }

  //Get at index
  public static SetSearch: string | number | undefined = "";
  GetAt(index: string | number | undefined) {
    let current: null | Node = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        LinkedListStore.SetSearch = current.data;
        return;
      }
      count++;
      current = current.next;
    }
    LinkedListStore.SetSearch = "The data you entered is not in the array";
    return null;
  }

  //Remove at index
  RemoveAt(index: number) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current: Node | null = this.head;
    let previous: Node | null | undefined = null;
    let count = 0;
    if (index === 0 && current) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        if (current) {
          current = current.next;
        }
      }
      if (previous !== null && previous.next && current) {
        previous.next = current?.next;
      }
    }
    this.size--;
  }

  //Clear list
  ClearList() {
    this.head = null;
    this.size=0
  }

  //Print list data
  public static LinkListArray: any[] = [];
  PrintListData() {
    LinkedListStore.LinkListArray = [];
    let current = this.head;
    while (current) {
      LinkedListStore.LinkListArray.push(current.data);
      current = current.next;
    }
  }

  public static Load = () => {
    LinkedListStore.LinkListArray = [];
    clearList();
  };
}

const ll = new LinkedListStore();

export function insertNode() {
  ll.InsertNode(Math.floor(Math.random() * 1000) + 1);
}

export function arrayToLinkedList() {
  ll.PrintListData();
}

export function insertLastNode() {
  ll.InsertLastNode(Math.floor(Math.random() * 1000) + 1);
}

export function getIndex(index: number | undefined) {
  if (index !== undefined) {
    ll.GetAt(index);
  }
}

export function removeIndex(index: number | undefined) {
  if (index !== undefined) {
    ll.RemoveAt(index);
  }
}

export function clearList() {
  ll.ClearList();
}
