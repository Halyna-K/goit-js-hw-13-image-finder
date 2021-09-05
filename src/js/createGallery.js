import refs from './refs.js';
import createGalleryTpl from '../templates/imageGallery.hbs';

const renderGallery = (data) => {
    const markup = createGalleryTpl(data);
    refs.gallery.insertAdjacentHTML('afterbegin', markup);
    showBtn();
}
const showBtn = () => {
    refs.buttonLoadMore.classList.remove('not_visible');
  }
const hideBtn = ()=> {
    refs.buttonLoadMore.classList.add('not_visible');
  }

const clearInfo = () => {
    refs.gallery.innerHTML = '';
  }

  const  scrollPage = (top,width)=> {
    window.scrollTo({
      top: top + window.pageYOffset,
      width: width + window.pageXOffset,
      behavior: "smooth",
    });
  }

export {
    renderGallery,
    clearInfo,
    scrollPage,
    hideBtn,
  }
