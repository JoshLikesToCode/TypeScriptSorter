"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorters_1 = require("./Sorters");
/* Both node and LinkedList class are in this file,
normally node class would get it's own file */
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        /* by default, next is null */
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* by default, head is null */
        _this.head = null;
        return _this;
    }
    /* we now need to implement the methods required by
    our sortable interface */
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        /* check for head */
        if (!this.head) {
            this.head = node;
            return;
        }
        /* tail will reference last element in list */
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        /* node just created is now tail.next and inserted
        into the end of the linked list */
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            /* empty list */
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    /* get the node at a specific index */
    LinkedList.prototype.at = function (index) {
        /* empty list */
        if (!this.head) {
            throw new Error('Index is out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                /* found the node */
                return node;
            }
            counter++;
            node = node.next;
        }
        /* index doesn't exist in linked list */
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('Empty list');
        }
        return (this.at(leftIndex).data > this.at(rightIndex).data);
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        /* this doesn't swap nodes, but their values */
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            throw new Error('Empty list');
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorters_1.Sorter));
exports.LinkedList = LinkedList;
