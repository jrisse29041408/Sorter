"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var numCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
// const charCollection = new CharsCollection('Xabay');
// const linkedList = new LinkedList();
// linkedList.add(12312);
// linkedList.add(3234);
// linkedList.add(1231254324);
// linkedList.add(123123112372);
// linkedList.print();
numCollection.sort();
console.log(numCollection);
