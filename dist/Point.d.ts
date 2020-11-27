export default class Point {
    protected pointer_event: PointerEvent;
    /**
     * Timestamp of event
     */
    time(): number;
    /**
     * Offset X coordinate of point
     */
    x(): number;
    /**
     * Offset Y coordinate of point
     */
    y(): number;
    constructor(event: PointerEvent);
}
