"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var LinkedList_1 = require("./LinkedList");
// const collection = new NumbersCollection([10, 3, -5, 0])
// const charCollection = new CharsCollection('Xabay');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(12312);
linkedList.add(3234);
linkedList.add(1231254324);
linkedList.add(123123112372);
var sorter = new sorter_1.Sorter(linkedList);
sorter.bubble();
linkedList.print();
