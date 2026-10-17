class Queue<T> {
    private items: Map<number, T>;
    private front: number;
    private rear: number;

    constructor() {
        this.items = new Map<number, T>();
        this.front = 0;
        this.rear = 0;
    }

    isEmpty() {
        return this.rear === this.front;
    }

    size() {
        return this.rear - this.front + 1;
    }

    enqueue(item: T) {
        this.items.set(this.rear++, item);
    }

    dequeue(): T | null {
        if(this.isEmpty()) return null;

        let node = this.items.get(this.front)!;
        this.items.delete(this.front++);

        if(this.isEmpty()) {
            this.front = this.rear = 0;
        }

        return node;
    }

    peek(): T | null {
        return this.items.get(this.front) ?? null;
    }
}