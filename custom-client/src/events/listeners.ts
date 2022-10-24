import touchEvent, { showHideNav } from './small-size-menu/menu-events.js';

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
  const type: string = ev.type;
  if (type === 'touchmove') touchEvent(ev);
  if (type === 'click') showHideNav(null);
}
