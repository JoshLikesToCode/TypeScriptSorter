import { Sorter } from "./Sorters"

/* Both node and LinkedList class are in this file,
normally node class would get it's own file */
class Node 
{
    /* by default, next is null */
    next: Node | null = null

    constructor(public data: number) {}
}

export class LinkedList extends Sorter
{
    /* by default, head is null */
    head: Node | null = null

    /* we now need to implement the methods required by
    our sortable interface */
    add(data: number) : void 
    {
        const node = new Node(data)
        /* check for head */
        if(!this.head)
        {
            this.head = node;
            return;
        }

        /* tail will reference last element in list */
        let tail = this.head
        while(tail.next)
        {
            tail = tail.next
        }
        /* node just created is now tail.next and inserted
        into the end of the linked list */
        tail.next = node
    }

    get length() : number
    {
        /* empty list */
        if(!this.head)
        {
            return 0
        }

        let length = 1
        let node = this.head
        while(node.next)
        {
            length++
            node = node.next
        }
        return length
    }

    /* get the node at a specific index */
    at(index: number) : Node
    {
        /* empty list */
        if(!this.head)
        {
            throw new Error('Index is out of bounds')
        }
        
        let counter = 0
        let node: Node | null = this.head
        while(node)
        {
            if(counter === index)
            {
                /* found the node */
                return node
            }
            counter++;
            node = node.next
        }
        /* index doesn't exist in linked list */
        throw new Error('Index out of bounds')
    }

    compare(leftIndex: number, rightIndex: number) : boolean
    {
        if(!this.head)
        {
            throw new Error('Empty list')
        }
        return (this.at(leftIndex).data > this.at(rightIndex).data)
    }

    swap(leftIndex: number, rightIndex: number) : void
    {
        /* this doesn't swap nodes, but their values */
        const leftNode = this.at(leftIndex)
        const rightNode = this.at(rightIndex)

        const leftHand = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = leftHand
    }

    print() : void
    {
        if(!this.head)
        {
            throw new Error('Empty list')
        }
        let node : Node | null = this.head;
        while(node)
        {
            console.log(node.data)
            node = node.next
        }
    }
}