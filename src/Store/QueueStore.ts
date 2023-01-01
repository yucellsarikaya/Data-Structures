import { Node } from "../Classes/Node";
export class QueueStore {
  private front: Node | null | any;
  private rear: Node | null | any;
  constructor() {
    this.front = null;
    this.rear = null;
  }

  IsEmpty() {
    return this.rear === null && this.rear === null;
  }

  InsertQueue(data: number) {
    const newNode = new Node(data);
    if (this.IsEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
  }

  RemoveQueue() {
    if (this.IsEmpty()) {
      return;
    }
    this.front = this.front?.next;

    if (!this.front) {
      this.rear = null;
    }
  }

  PeekFront() {
    if (this.IsEmpty()) {
      return -404;
    }
    return this.front?.data;
  }

  PeekRear() {
    if (this.IsEmpty()) {
      return -404;
    }
    return this.rear?.data;
  }

  public static QueueListArray: any[] = [];
  ListQueue() {
    if (this.IsEmpty()) {
      return;
    }
    QueueStore.QueueListArray = [];
    let current: null | Node = this.front;
    while (current?.next) {
      QueueStore.QueueListArray.push(current?.data);
      current = current?.next;
    }
    QueueStore.QueueListArray.push(this.rear?.data);
  }
}

const queue = new QueueStore();

export function arrayToQuenList() {
  queue.ListQueue();
}

export function insertQueue() {
  queue.InsertQueue(Math.floor(Math.random() * 1000) + 1);
}

export function removeQueue() {
  queue.RemoveQueue();
}

export function peekFront() {
  return queue.PeekFront();
}

export function peekRear() {
  return queue.PeekRear();
}
