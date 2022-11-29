// ###############################################################################################################
// ###############################################################################################################
// WHEEL EVENT OBJECT: (For mousewheel interaction)

// Events:
type WheelEventType =
  | MouseEventType
  // The event occurs when the mouse wheel rolls up or down over an element
  | 'wheel';

// Properties:
interface WheelEventProps {
  // Returns the horizontal scroll amount of a mouse wheel (x-axis)
  readonly deltaX: number;
  // Returns the vertical scroll amount of a mouse wheel (y-axis)
  readonly deltaY: number;
  // Returns the scroll amount of a mouse wheel for the z-axis
  readonly deltaZ: number;
  // Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)
  readonly deltaMode: 0 | 1 | 2;
}

/*
Technical Details
  Bubbles:	Yes
  Cancelable:	Yes
  Event type:	WheelEvent
  Supported HTML tags:	All HTML elements
  DOM Version:	Level 3 Events
*/
