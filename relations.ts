interface RelationParams {
  parent: HTMLElement;
  children: (HTMLElement | undefined)[];
}

export default function setChildrenRelation(params: RelationParams): HTMLElement {
  const { parent, children } = params;
  if (!Array.isArray(children)) {
    parent.appendChild(children);
    return parent;
  }
  if (children.length === 0) return parent;
  children.forEach((child) => {
    if (child) parent.appendChild(child);
  });
  return parent;
}
