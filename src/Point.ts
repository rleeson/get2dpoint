export default class Point {
    protected pointer_event: PointerEvent;

    /**
     * Timestamp of event
     */
    time(): number {
        return this.pointer_event.timeStamp;
    }

    /**
     * Offset X coordinate of point
     */
    x(): number {
        return this.pointer_event.offsetX;
    }

    /**
     * Offset Y coordinate of point
     */
    y(): number {
        return this.pointer_event.offsetY;
    }

    constructor(event: PointerEvent) {
        this.pointer_event = event;
    }
}