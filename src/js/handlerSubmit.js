import refs from './refs.js';
import { URL, fetchApi}  from './apiService.js';
import {
    renderGallery,
    clearInfo,
    scrollPage,
    hideBtn,
  } from './createGallery.js';
// import showModal from './basicLightbox.js';


const handlerSubmit = (e) => {
    e.preventDefault();
       const form = e.currentTarget;
       URL.search = form.elements.query.value;
   clearInfo();
   //  form.reset();
   fetchApi(form)
   .then ((data) => {
      renderGallery(data);
    //   showModal
     //  form.reset();
     })
     .catch ( err => {
       // infoBox(err) })
       const quantityEl = data.hits.length;
       if (quantityEl === 0)
       // const mach = data.hits.length
       // if(mach === 0)
       {
          error({text: `На Ваш запрос
          ${URL.search}
          найдено ${quantityEl}
          картинок`})
          hideBtn();
          return
        }

        alert({
          text:(`Ваш запрос ${URL.search}
          обработан успешно!
          Найдено
          ${data.total} картинок`),
          hide:true,
          delay:3500,
        });


        if(quantityEl < 12){
         hideBtn();
        }
      })

}


export default handlerSubmit;
