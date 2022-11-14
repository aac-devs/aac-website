import { createLiElement } from '../customElement/custom-element.js';
import { createCustomGraphicLinkedComponent as createGrapEl, GrapLkdType } from './custom-graphic-linked-component.js';

type RequiredLiComponentParams = Required<Pick<CustomElementParams, 'href' | 'evTp' | 'evFn' | 'id'>>;
type OptionalLiComponentParams = Partial<Pick<CustomElementParams, 'clas' | 'src' | 'text'>>;
type LiComponentParams = RequiredLiComponentParams & OptionalLiComponentParams;

export function createCustomListItemComponent(params: LiComponentParams): CustomCompReturn<HTMLElType> {
  const { clas: className, src, ...rest } = params;
  const [liElement, liStFn] = createLiElement();

  let source = className ? className : src;
  let graphicType: GrapLkdType = className ? 'icon' : 'img';

  const [grapElement, grapStFn] = createGrapEl({ src: source!, grTp: graphicType, ...rest });
  liElement.appendChild(grapElement);

  function setStyles(st: ElementStyles) {
    liStFn(st['main-header-nav-ul-li']!);
    grapStFn({
      anch: st['main-header-nav-ul-li-anchor']!,
      cont: st['main-header-nav-ul-li-anchor-icon']!,
      img: ''.cssProperties(['height', '100%'], ['width', '100%']),
    });
  }
  return [liElement, setStyles];
}
