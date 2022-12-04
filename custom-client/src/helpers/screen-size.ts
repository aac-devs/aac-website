type TypeOrientation = 'portrait-primary' | 'landscape-primary';

export default function getScreenSize(): { height: number; width: number; orientation: string; device: string } {
  const { clientWidth: width, clientHeight: height } = window.document.documentElement;
  const orientation = <TypeOrientation>window.screen.orientation.type;
  const userAgent = navigator.userAgent || navigator.vendor;
  const regexp = /mobile/i;
  const matches = <RegExpMatchArray>userAgent.match(regexp);
  return { height, width, orientation, device: matches ? 'mobile' : 'desktop' };
}
