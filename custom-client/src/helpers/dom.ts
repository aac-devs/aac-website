import ThemeColor from './colors.js';
import CSSStyles from './css.js';
import getScreenSize from './sizes.js';

export function dom(action: 'init' | 'update') {
  const html = <HTMLElement>window.document.getElementsByTagName('html')[0];
  const body = <HTMLElement>window.document.getElementsByTagName('body')[0];
  const mainHeader = <HTMLElement>window.document.querySelector('.main-header');
  const menuNav = <HTMLElement>window.document.querySelector('.menu-nav');
  const menuListItems = <HTMLElement>window.document.querySelector('.list-items');

  const screenWidth = getScreenSize().width;
  let screenSize: 'small' | 'large';

  function initHtml() {
    console.log('init html');
    html.setAttribute(
      'style',
      CSSStyles.start()
        .boxSizing('border-box')
        // .fontFamily('Poppins')
        .height('100%')
        .margin('0rem')
        .padding('0rem')
        // .backgroundColor('wheat')
        .toString()
    );
    // console.log(html.getAttribute('style'));
  }

  function initBody() {
    console.log('init body');
    body.setAttribute(
      'style',
      CSSStyles.start()
        .boxSizing('border-box')
        .padding('0rem')
        .margin('0rem')
        .backgroundColor(ThemeColor.colorGreyLighter)
        .minHeight('100%')
        .toString()
    );
    // console.log(body.getAttribute('style'));
  }

  function initHeader() {
    console.log('init header');
    mainHeader.setAttribute(
      'style',
      `${
        screenSize === 'small'
          ? CSSStyles.start()
              .boxSizing('border-box')
              // .parentFlex('row-reverse', 'space-between', 'center')
              .backgroundColor(ThemeColor.colorMainDark)
              .position('relative')
              .padding('0rem', '2rem')
              .zIndex(1)
              .toString()
          : CSSStyles.start()
              .boxSizing('border-box')
              // .parentFlex('row', 'space-between', 'center')
              .backgroundColor(ThemeColor.colorMainDark)
              .position('relative')
              .padding('0rem', '2rem')
              .toString()
      }`
    );
    // console.log(mainHeader.getAttribute('style'));
  }

  function initMenuNav() {
    const navStyles =
      screenSize === 'small'
        ? CSSStyles.start()
            .boxSizing('border-box')
            // .parentFlex('column', 'center', 'stretch')
            .backgroundColor(ThemeColor.colorMainDark)
            .padding('0rem', '4rem')
            .position('absolute')
            // .left(screenWidth * 0, 'px')
            // .width(screenWidth * 0.4, 'px')
            .toString()
        : `${CSSStyles.start()
            .boxSizing('border-box')
            .position('static')
            .height('auto')
            .padding('0rem')
            .width('auto')
            .backgroundColor(ThemeColor.colorMainDark)
            .toString()}border:none;box-shadow:none`;

    // `box-sizing:border-box;position:static;height:auto;padding:0;border:none;box-shadow:none;width:auto;background-color:${ThemeColor.colorMainDark};overflow-y:visible`

    menuNav.setAttribute('style', navStyles);

    if (screenSize === 'small') {
      menuNav.style.setProperty('height', `calc(${getScreenSize().height}px - ${mainHeader.style.height})`);
      menuNav.style.setProperty('top', mainHeader.style.height);
    }

    console.log('nav');
    console.log(menuNav.getAttribute('style'));
  }

  function initListItems() {
    console.log('init menu-list-items');
    menuListItems.setAttribute(
      'style',
      `${
        screenSize === 'small'
          ? `${CSSStyles.start()
              .boxSizing('border-box')
              // .parentFlex('column', 'center', 'stretch', '2.5rem')
              .toString()}list-style:none;padding:0;margin-block-start:0px;margin-block-end:0px;`
          : `${CSSStyles.start()
              .boxSizing('border-box')
              // .parentFlex('row', 'center', 'center', '2rem')
              .toString()}list-style:none;padding:0;margin-block-start:0px;margin-block-end:0px;`
      }`
    );
    console.log(menuListItems.getAttribute('style'));
  }

  function initAnchors() {
    console.log('init anchors');
  }

  function updateHeaderHeight(orientation: string, height: number, width: number) {
    if (mainHeader) {
      const heightValue = 6;
      const unit = orientation === 'portrait-primary' ? 'vh' : 'vw';
      mainHeader.setAttribute(
        'style',
        CSSStyles.insert(mainHeader.getAttribute('style'))
          // .height(heightValue, unit)
          // .minHeight(heightValue, unit)
          // .maxWeight(heightValue, unit)
          .toString()
      );
    }
  }

  function adjustScreenSize() {
    const { clientHeight, clientWidth } = window.document.documentElement;
    window.document.getElementsByTagName('html')[0].style.fontSize = `${clientWidth / 16}%`;
    const orientation = window.screen.orientation.type;
    // console.clear();
    // console.log({ orientation, clientHeight, clientWidth });
    console.log('adj');
    updateHeaderHeight(orientation, clientHeight, clientWidth);
  }

  screenSize = screenWidth > 944 ? 'large' : 'small';

  if (action === 'init') {
    initHtml();
    initBody();
    initHeader();
    adjustScreenSize();
    initMenuNav();
    initListItems();
  } else {
  }

  adjustScreenSize();
}
