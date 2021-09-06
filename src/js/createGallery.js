import refs from './refs.js';
import createItemTpl from '../templates/imageItem.hbs';

const renderGallery = (data) => {
    const markup = createItemTpl(data);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    showBtn();
}
const showBtn = () => {
    refs.more.classList.remove('not_visible');
  }
const hideBtn = ()=> {
    refs.more.classList.add('not_visible');
  }

const clearInfo = () => {
    refs.gallery.innerHTML = '';
  }

const  scrollPage = ()=> {
   more.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  // window.scrollTo({
  //   top: top + window.pageYOffset,
  //   width: width + window.pageXOffset,
  //   behavior: "smooth",
  //   block: 'end',
  // });
  }

export {
    renderGallery,
    clearInfo,
    scrollPage,
    hideBtn,
  }
