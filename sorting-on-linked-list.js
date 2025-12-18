class ListNode {
    constructor(val, next) {
        this.data = val;
        this.next = next;
    }
}

function print(head) {
    let curr = head;
    let s = "head->";
    while(curr) {
        s += (curr.data + "->");
        curr = curr.next;
    }

    console.log(s + "null");
}



function _findMiddle(head) {
    let slow = head, fast = head.next;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function mergeSort(head) {
    if(!head || !head.next) {
        return head;
    }

    let mid = _findMiddle(head);

    let right = mid.next;
    mid.next = null;

    let leftSorted = mergeSort(head);
    let rightSorted = mergeSort(right);
    return _merge(leftSorted, rightSorted);
}

function _merge(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while(list1 && list2) {
        if(list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if(list1){
        current.next = list1;
    } else if(list2) {
        current.next = list2;
    }

    return dummy.next;
}

function bubbleSort(head) {
    if(!head || !head.next) {
        return head;
    }

    let counter = head, curr = null, last = null;
    while(counter) {
        curr = head;
        while(curr.next && curr.next !== last) {
            let next = curr.next;

            if(curr.data > next.data) {
                [curr.data, next.data] = [next.data, curr.data];
            }

            curr = curr.next;
        }

        last = curr;
        counter = counter.next;
    }

    return head;
}

function selectionSort(head) {
    // Base case: Empty list or single node
    if (!head || !head.next) {
        return head;
    }

    let temp = head;

    // Outer loop: Iterate through the list
    while (temp) {
        let minNode = temp;
        let r = temp.next;

        // Inner loop: Find the minimum element in the remaining unsorted list
        while (r) {
            if (r.data < minNode.data) {
                minNode = r;
            }
            r = r.next;
        }

        // Swap Data: If a smaller node was found, swap values
        if (minNode !== temp) {
            [minNode.data, temp.data] = [temp.data, minNode.data];
        }

        // Move to the next node
        temp = temp.next;
    }

    return head;
}

function insertionSort(head) {
    if(!head || !head.next) {
        return head;
    }

    let dummy = new ListNode(-1);
    let curr = head;
    
    while(curr) {
        let forward = curr.next;
        let prev = dummy;

        while(prev.next && prev.next.data < curr.data) {
            prev = prev.next;
        }

        curr.next = prev.next;
        prev.next = curr;
        
        curr = forward;
    }

    return dummy.next;
}

let head = new ListNode(4, new ListNode(19, new ListNode(3, new ListNode(5, new ListNode(7, null)))));
print(head);

// head = mergeSort(head);
// head = bubbleSort(head);
// head = selectionSort(head);
head = insertionSort(head);
print(head);