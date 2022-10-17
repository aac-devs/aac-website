import clickEvent from './small-size-menu/click-events.js';
import touchEvent from './small-size-menu/touch-events.js';

export type ListenerType = [element: HTMLElement, event: 'click' | 'touchmove'];

export function addListener(items: ListenerType[]) {
  if (!Array.isArray(items)) return;
  items.forEach((item) => {
    const [element, onEvent] = item;
    element.addEventListener(onEvent, listener, false);
  });
}

function listener(ev: Event) {
  if (!ev.target) return;
  const target = <HTMLElement>ev.target;
  const type: string = ev.type;
  if (type === 'touchmove') touchEvent(ev);
  if (type === 'click') clickEvent(ev);
}
