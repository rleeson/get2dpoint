import Point from "../src/Point";

describe('Map pointer events to a 2D point', () => {
	let mock_pointer_event: PointerEvent = <PointerEvent>{
		offsetX: 40,
		offsetY: 68,
		timeStamp: 21376417
	};

	let test_point: Point = new Point(mock_pointer_event);

	test('Point time is the timestamp of the pointer event', () => {
		expect(test_point.time()).toBe(mock_pointer_event.timeStamp);
	});

	test('Point X is the offsetX from the current element', () => {
		expect(test_point.x()).toBe(mock_pointer_event.offsetX);
	});

	test('Point Y is the offsetY from the current element', () => {
		expect(test_point.y()).toBe(mock_pointer_event.offsetY);
	});
});