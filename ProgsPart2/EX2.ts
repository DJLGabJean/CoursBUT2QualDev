export class Stack<T> implements IStack<T> {
    private data: T[] = [];

    public push(element: T): void {
        this.data.push(element);
    }

    public pop(): T | undefined {
        return this.data.pop();
    }

    public peek(): T | undefined {
        return this.data[this.data.length - 1];
    }

    public isEmpty(): boolean {
        return this.data.length === 0;
    }

    public size(): number {
        return this.data.length;
    }

}



export interface IStack <T> {
    push(element: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

let stack1 = new Stack<string>()
