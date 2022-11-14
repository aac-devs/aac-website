globalThis.document.addEventListener('element', interceptEvent);

function interceptEvent(e: Event) {
  const ev = <CustomEvent>e;
  console.log('evento::', ev.detail);
}
