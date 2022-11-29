// ###############################################################################################################
// ###############################################################################################################
// EVENT OBJECT: (The parent of all event objects)

// Events:
type EventType =
  | 'abort'
  | 'afterprint'
  | 'beforeprint'
  | 'canplay'
  | 'canplaythrough'
  | 'change'
  | 'durationchange'
  | 'ended'
  | 'fullscreenchange'
  | 'fullscreenerror'
  | 'invalid'
  | 'loadeddata'
  | 'loadedmetadata'
  | 'message'
  | 'offline'
  | 'online'
  | 'open'
  | 'pause'
  | 'play'
  | 'playing'
  | 'progress'
  | 'ratechange'
  | 'reset'
  | 'search'
  | 'seeked'
  | 'seeking'
  | 'show'
  | 'stalled'
  | 'submit'
  | 'suspend'
  | 'timeupdate'
  | 'toggle'
  | 'volumechange'
  | 'waiting';

// The event occurs when the loading of a media is aborted
// The event occurs when a page has started printing
// The event occurs when a page is about to be printed
// The event occurs before the document is about to be unloaded
// The event occurs when the browser can start playing the media (when it has buffered enough to begin)
// The event occurs when the browser can play through the media without stopping for buffering
// The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
// The event occurs when an error occurs while loading an external file
// The event occurs when an element is displayed in fullscreen mode
// The event occurs when an element can not be displayed in fullscreen mode
// The event occurs when an element gets user input
// The event occurs when an element is invalid
// The event occurs when an object has loaded
// The event occurs when media data is loaded
// The event occurs when meta data (like dimensions and duration) are loaded
// The event occurs when a message is received through the event source
// The event occurs when the browser starts to work offline
// The event occurs when the browser starts to work online
// The event occurs when a connection with the event source is opened
// The event occurs when the media is paused either by the user or programmatically
// The event occurs when the media has been started or is no longer paused
// The event occurs when the media is playing after having been paused or stopped for buffering
// The event occurs when the browser is in the process of getting the media data (downloading the media)
// The event occurs when the playing speed of the media is changed
// The event occurs when the document view is resized
// The event occurs when a form is reset
// The event occurs when an element's scrollbar is being scrolled
// The event occurs when the user writes something in a search field (for <input="search">)
// The event occurs when the user is finished moving/skipping to a new position in the media
// The event occurs when the user starts moving/skipping to a new position in the media
// The event occurs after the user selects some text (for <input> and <textarea>)
// The event occurs when a <menu> element is shown as a context menu
// The event occurs when the browser is trying to get media data, but data is not available
// The event occurs when a form is submitted
// The event occurs when the browser is intentionally not getting media data
// The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)
// The event occurs when the user opens or closes the <details> element
// The event occurs once a page has unloaded (for <body>)
// The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)

// Properties:
interface EventProps {
  // Returns whether or not a specific event is a bubbling event
  readonly bubbles: boolean;
  // Sets or returns whether the event should propagate up the hierarchy or not
  cancelBubble: boolean;
  // Returns whether or not an event can have its default action prevented
  readonly cancelable: boolean;
  // Returns whether the event is composed or not
  readonly composed: boolean;
  // Creates a new event
  createEvent: (type: CreateEventType) => EventType;
  // Returns the event's path
  composedPath: () => HTMLElement[];
  // Returns the element whose event listeners triggered the event
  readonly currentTarget: HTMLElement;
  // Returns whether or not the preventDefault() method was called for the event
  readonly defaultPrevented: boolean;
  // Returns which phase of the event flow is currently being evaluated
  readonly eventPhase: 0 | 1 | 2 | 3; // 0: NONE, 1: CAPTURING PHASE, 2: AT_TARGET, 3: BUBBLING_PHASE
  // Returns whether or not an event is trusted
  readonly isTrusted: boolean;
  // Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
  preventDefault: () => void;
  // Prevents other listeners of the same event from being called
  stopImmediatePropagation: () => void;
  // Prevents further propagation of an event during event flow
  stopPropagation: () => void;
  // Returns the element that triggered the event
  readonly target: HTMLElement;
  // Returns the time (in milliseconds relative to the epoch) at which the event was created
  readonly timeStamp: number;
  // Returns the name of the event
  readonly type: string;
}

type CreateEventType =
  | 'AnimationEvent'
  | 'ClipboardEvent'
  | 'DragEvent'
  | 'FocusEvent'
  | 'HashChangeEvent'
  | 'InputEvent'
  | 'KeyboardEvent'
  | 'MouseEvent'
  | 'PageTransitionEvent'
  | 'PopStateEvent'
  | 'ProgressEvent'
  | 'StorageEvent'
  | 'TouchEvent'
  | 'TransitionEvent'
  | 'UiEvent'
  | 'WheelEvent';
