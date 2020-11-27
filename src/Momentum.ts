import Point from "@/Point";

export default class Momentum {
    location_end: Point;
    location_start: Point;

    constructor(start: Point, end: Point) {
        this.location_end = end;
        this.location_start = start;
    }
}