import ThemeColor from './colors.js';
import CSSStyles from './css.js';

const styles = {
  _html: CSSStyles.start()
    .boxSizing('border-box')
    .fontFamily('Poppins')
    .height(100, '%')
    .margin('0')
    .padding('0')
    .backgroundColor('wheat')
    .toString(),

  // body: `min-height:100%;padding:0;margin:0;background-color:${ThemeColor.colorGreyLighter}`,
  _body: CSSStyles.start()
    .boxSizing('border-box')
    .padding('0')
    .margin('0')
    .backgroundColor(ThemeColor.colorGreyLighter)
    .minHeight(100, '%')
    .toString(),

  // anchor: `font-weight:400;font-size:1.8rem;padding:0;margin:0;margin-block-start:0px;margin-block-end:0px;text-decoration:none`,

  _anchor: CSSStyles.start()
    .fontWeight('400')
    .fontSize('1.8rem')
    .padding('0')
    .margin('0')
    .marginBlockStart(0, 'px')
    .marginBlockEnd(0, 'px')
    .textDecorationLine('none')
    .toString(),

  // touchArea: `box-sizing:border-box;background-color:white;opacity:0.5;position:fixed;top:0;left:0;width:10vw;height:100vh;`,

  _touchArea: {
    on: CSSStyles.start()
      .boxSizing('border-box')
      .backgroundColor('#fff')
      .opacity(0.5)
      .position('fixed')
      .top(0, 'px')
      .left(0, 'px')
      .width(10, 'vw')
      .height(100, 'vh')
      .toString(),
    off: CSSStyles.start().boxSizing('border-box').display('none').toString(),
  },

  _header: {
    // small: `${CSSStyles.parentFlex('row-reverse', 'space-between', 'center').toString()}background-color:${
    //   ThemeColor.colorMainDark
    // };position:relative;padding:0 2rem;z-index:10`,
    small: CSSStyles.start()
      .boxSizing('border-box')
      .parentFlex('row-reverse', 'space-between', 'center')
      .backgroundColor(ThemeColor.colorMainDark)
      .position('relative')
      .padding('0 2rem')
      .zIndex(1)
      .toString(),
    // large: `${CSSStyles.parentFlex('row', 'space-between', 'center').toString()}background-color:${
    //   ThemeColor.colorMainDark
    // };position:relative;padding:0 2rem`,
    large: CSSStyles.start()
      .boxSizing('border-box')
      .parentFlex('row', 'space-between', 'center')
      .backgroundColor(ThemeColor.colorMainDark)
      .position('relative')
      .padding('0 2rem')
      .toString(),
  },

  _menuButton: {
    small: ``,
    large: `display:none`,
  },

  _ul: {
    small: `${CSSStyles.start()
      .boxSizing('border-box')
      .parentFlex('column', 'center', 'stretch', '2.5rem')
      .toString()}list-style:none;padding:0;margin-block-start:0px;margin-block-end:0px;`,
    large: `${CSSStyles.start()
      .boxSizing('border-box')
      .parentFlex('row', 'center', 'center', '2rem')
      .toString()}list-style:none;padding:0;margin-block-start:0px;margin-block-end:0px;`,
  },

  _nav: {
    small: `${CSSStyles.start()
      .boxSizing('border-box')
      .parentFlex('column', 'center', 'stretch')
      .toString()}border-top:${`1px solid ${ThemeColor.colorMainLight}`};padding:0 4rem;position:absolute;background-color:${`${ThemeColor.colorMainDark}`};box-shadow:none;overflow-y:scroll;transition:left 0.5s ease-in-out`,
    large: `box-sizing:border-box;position:static;height:auto;padding:0;border:none;box-shadow:none;width:auto;background-color:${ThemeColor.colorMainDark};overflow-y:visible`,
  },

  _menuItem: {
    small: `font-weight:400;margin:0;text-decoration:none;margin-block-start:0px;margin-block-end:0px;font-size:3rem;border-radius:5px;display:block;text-align:center;padding:0.5rem;border:1px solid ${ThemeColor.colorMainLight};background-color:${ThemeColor.colorMainDarker}`,
    large: `font-weight:400;margin:0;text-decoration:none;margin-block-start:0px;margin-block-end:0px;font-size:1.8rem;border-radius:0;display:inline;text-align:center;padding:0;border:none;background-color:${ThemeColor.colorMainDark}`,
  },
};
