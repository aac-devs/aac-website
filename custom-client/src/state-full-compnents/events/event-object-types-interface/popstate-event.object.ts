// ###############################################################################################################
// ###############################################################################################################
// POP STATE EVENT OBJECT: (For changes in the history entry)

// Events:
type PopStateEventType =
  | EventType
  // The event occurs when the window's history changes
  | 'popstate';

// Properties:
interface PopStateEventProps {
  // Returns an object containing a copy of the history entries
  state: any;
}

/*
Technical Details
  none
*/
