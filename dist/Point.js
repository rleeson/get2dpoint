"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(event) {
        this.pointer_event = event;
    }
    /**
     * Timestamp of event
     */
    Point.prototype.time = function () {
        return this.pointer_event.timeStamp;
    };
    /**
     * Offset X coordinate of point
     */
    Point.prototype.x = function () {
        return this.pointer_event.offsetX;
    };
    /**
     * Offset Y coordinate of point
     */
    Point.prototype.y = function () {
        return this.pointer_event.offsetY;
    };
    return Point;
}());
exports.default = Point;
