import ThemeColor from '../../../../helpers/colors.js';

export default function projectCard(item: ProjectType): HTMLElement {
  const card: HTMLElement = globalThis.document.createElement('li');
  const title: HTMLElement = globalThis.document.createElement('h1');
  const filter: HTMLElement = globalThis.document.createElement('div');
  const elementsContainer: HTMLElement = globalThis.document.createElement('div');

  title.innerHTML = item.projectTitle;

  title.setAllStyles(
    ''
      //
      .css('text-shadow', '0 0 1rem rgba(255, 255, 255, 1)')
      .css('margin-block-start', '0')
      .css('letter-spacing', '0.2rem')
      .css('margin-block-end', '0')
      .css('font-weight', '500')
      .css('font-size', '5vw')
      .css('color', '#fff')
      // .css('height', '5vh')
      .css('z-index', '10')
      .css('padding', '2vw 0')
      .css('border-bottom', '1px solid #fff')
      .css('border-top-left-radius', '3vw')
      .css('border-top-right-radius', '3vw')
      .css('text-align', 'center')
      .css('backdrop-filter', 'blur(10px)')
    // .css('background-color', 'rgba(255, 255, 255, 0.1)')
  );

  elementsContainer.setAllStyles(
    ''
      .css('position', 'absolute')
      //
      .css('z-index', '0')
      .css('border-radius', '3vw')
      .css('top', '0')
      .css('left', '0')
      .css('height', '100%')
      .css('width', '100%')
      .css('background-color', 'transparent')
  );

  filter.setAllStyles(
    ''
      .css('position', 'absolute')
      //
      .css('border-radius', '3vw')
      .css('z-index', '0')
      .css('top', '0')
      .css('left', '0')
      .css('opacity', '0.7')
      .css('height', '100%')
      .css('width', '100%')
      .css('background-color', '#000')
  );

  elementsContainer.append(title);
  card.append(filter, elementsContainer);

  card.setAllStyles(
    ''
      .css('position', 'relative')
      .css('box-sizing', 'border-box')
      .css('width', '70vw')
      .css('min-width', '90vw')
      .css('aspect-ratio', '1')
      // .css('z-index', '10')
      .css('opacity', '1')
      .css('box-shadow', '0 2.4rem 4.8rem rgba(0, 0, 0, 0.5)')
      // .css('outline', `1px solid ${ThemeColor.colorGreyLight}`)
      .css('background-color', `${ThemeColor.colorMainDarker}`)
      .css('background-color', `#fff`)
      .css('background-image', `url(${item.projectImage})`)
      .css('background-size', 'cover')
      .css('background-repeat', 'no-repeat')
      .css('background-position-y', 'top')
      .css('background-position-x', 'center')

      .css('border-radius', '3vw')
    // .css('padding', '2vw 0')
    // .css('width', '100vw')
    // .css('min-width', '280px')
    // .css('max-width', '500px')
    // .css('align-self', 'end')
  );

  console.log(item);

  return card;
}
