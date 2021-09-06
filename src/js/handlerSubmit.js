import refs from './refs.js';
import { URL, getApi}  from './apiService.js';
import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import {
    renderGallery,
    clearInfo,
    scrollPage,
    hideBtn,
  } from './createGallery.js';


const handlerSubmit = (e) => {
    e.preventDefault();
       const form = e.currentTarget;
       URL.search = refs.input.value;

     clearInfo();

    getApi(form)
     .then (data => {
       if (data.hits.length === 0)
       {
         error({text: (`For your request "${URL.search}" found ${data.hits.length} images. Please enter query parameters!`),
         hide:true,
         delay:2000})
             hideBtn();
             return
       }
      alert({
        text:(`Your request "${URL.search}" has been successfully processed!
        Found ${data.total} images.`),
        hide:true,
        delay:1000,
      })

       renderGallery(data)
       form.reset();
       if (data.hits.length < 12) {
           hideBtn();
          }

      })
}

export default handlerSubmit;
