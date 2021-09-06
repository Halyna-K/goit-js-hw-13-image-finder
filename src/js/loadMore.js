import { URL, getApi}  from './apiService.js';
import { alert, error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import {
    renderGallery,
    clearInfo,
    scrollPage,
    hideBtn,
  } from './createGallery.js';

const onLoadMore = () => {
    // const top = e.target.getBoundingClientRect().top;
    // const width = e.target.getBoundingClientRect().width;
    getApi()
    .then(data => {
      renderGallery(data)
      scrollPage ()
      // scrollPage (top, width)
      if (data.hits.length < 12) {
        error({
          text:(`For your request "${URL.search}" no more images found.`),
          hide:true,
          delay:1500,
        });
      hideBtn();
      } else  {alert({
        text:(`View next ${URL.perPage} images`),
        hide:true,
        delay:600,
      })}

    })
  }

  export default onLoadMore;
