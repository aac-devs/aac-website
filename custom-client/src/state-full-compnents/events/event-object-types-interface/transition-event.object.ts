// ###############################################################################################################
// ###############################################################################################################
// TRANSITION EVENT OBJECT: (For CSS transitions)

// Events:
type TransitionEventType =
  | EventType
  // The event occurs when a CSS transition has completed
  | 'transitionend';

// Properties:
interface TransitionEventProps {
  // Returns the name of the transition
  readonly propertyName: string;
  // Returns the number of seconds a transition has been running
  readonly elapsedTime: number;
  // Returns the name of the pseudo-element of the transition
  readonly pseudoElement: string;
}

/*
Technical Details
  none
*/
