"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharsCollection = /** @class */ (function () {
    function CharsCollection(str) {
        this.str = str;
    }
    Object.defineProperty(CharsCollection.prototype, "length", {
        get: function () {
            return this.str.length;
        },
        enumerable: true,
        configurable: true
    });
    CharsCollection.prototype.compare = function (leftIndex, rightIndex) {
    };
    CharsCollection.prototype.swap = function (leftIndex, rightIndex) {
    };
    return CharsCollection;
}());
exports.CharsCollection = CharsCollection;
