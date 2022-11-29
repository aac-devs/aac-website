// ###############################################################################################################
// ###############################################################################################################
// UiEVENT OBJECT
type UiEventType = EventType | 'abort' | 'beforeunload' | 'resize' | 'scroll' | 'select' | 'load' | 'unload';

interface UiEVENTProps {
  readonly detail: number;
  readonly view: unknown;
}

// ###############################################################################################################
// ###############################################################################################################
// ANIMATION EVENT OBJECT
type AnimationEventType = EventType | 'animationend' | 'animationiteration' | 'animationstart';

interface AnimationEventProps {
  readonly propertyName: string;
  readonly elapsedTime: number;
  readonly pseudoElement: string;
}

// ###############################################################################################################
// ###############################################################################################################
//
type FocusEventType = UiEventType | 'blur' | 'focus' | 'focusin' | 'focusout';

interface FocusEventProps {
  readonly relatedTarget: HTMLElement | null;
}

// ###############################################################################################################
// ###############################################################################################################
// MOUSE EVENT OBJECT:
type MouseEventType =
  | UiEventType
  | 'click'
  | 'contextmenu'
  | 'dblclick'
  | 'mousedown'
  | 'mouseenter'
  | 'mouseleave'
  | 'mousemove'
  | 'mouseover'
  | 'mouseout'
  | 'mouseup';

type ModifierKey = 'Alt' | 'AltGraph' | 'CapsLock' | 'Control' | 'Meta' | 'NumLocK' | 'ScrollLock' | 'Shift';

interface MouseEventProps {
  readonly altKey: boolean;
  readonly ctrlKey: boolean;
  readonly metaKey: boolean;
  readonly shiftKey: boolean;
  readonly clientX: number;
  readonly clientY: number;
  readonly movementX: number;
  readonly movementY: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly pageX: number;
  readonly pageY: number;
  readonly screenX: number;
  readonly screenY: number;
  readonly button: 0 | 1 | 2;
  readonly buttons: 1 | 2 | 4 | 8 | 16;
  readonly which: 0 | 1 | 2 | 3;
  getModifierState: (modKey: ModifierKey) => boolean;
  readonly relatedTarget: HTMLElement;
  region: unknown;
}

// ###############################################################################################################
// ###############################################################################################################
// CLIPBOARD EVENT OBJECT:
type ClipboardEventType = EventType | 'copy' | 'cut' | 'paste';

interface ClipboardEventProps {
  readonly clipboardData: unknown;
}

// ###############################################################################################################
// ###############################################################################################################
// DRAG EVENT OBJECT:
type DragEventType =
  | MouseEventType
  | 'drag'
  | 'dragend'
  | 'dragenter'
  | 'dragleave'
  | 'dragover'
  | 'dragstart'
  | 'drop';

interface DragEventProps {
  readonly dataTransfer: unknown;
}

// ###############################################################################################################
// ###############################################################################################################
// TOUCH EVENT OBJECT:
type TouchEventType = UiEventType | 'touchcancel' | 'touchend' | 'touchmove' | 'touchstart';

interface TouchEventProps {
  readonly altKey: boolean;
  readonly ctrlKey: boolean;
  readonly metaKey: boolean;
  readonly shiftKey: boolean;
  readonly changedTouches: unknown;
  readonly targetTouches: HTMLElement[];
  readonly touches: HTMLElement[];
}

// ###############################################################################################################
// ###############################################################################################################
// KEYBOARD EVENT OBJECT:
type KeyboardEventType = UiEventType | 'keydown' | 'keypress' | 'keyup';

interface KeyboardEventProps {}

// ###############################################################################################################
// ###############################################################################################################
// PROGRESS EVENT OBJECT: (For the progress of loading external resources)

// Events:
type ProgressEventType = EventType | 'error' | 'loadstart';

// Properties:
interface ProgressEventProps {
  readonly lengthComputable: boolean;
  readonly loaded: number;
  readonly total: number;
}

// ###############################################################################################################
// ###############################################################################################################
// HASH CHANGE EVENT OBJECT: (For changes in the anchor part of the URL)

// Events:
type HashChangeEventType = EventType | 'hashchange';

// Properties:
interface HashChangeEventProps {
  readonly newURL: string;
  readonly oldURL: string;
}

// ###############################################################################################################
// ###############################################################################################################
//
type PageTransitionEventType = EventType | 'pagehide' | 'pageshow';

/*
Technical Details

*/
