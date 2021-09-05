// import refs from './refs.js';
// import * as basicLightbox from 'basiclightbox';
// import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
// const basicLightbox = require('basiclightbox');

// const onOpenLightbox = (url) => {
//      basicLightbox.create(`<img src="${url}" width="1600" height="900">`).show();

//  }
// //  modalForm.show();

// const largeImage = (e) => {
//        if(e.target.nodeName !== "img"){
//            return
//        }
//        const largeImageURL = e.target.dataset.source;
//        modalForm(largeImageURL);
// }

// const showModal = refs.gallery.addEventListener('click', largeImage);

// export default showModal;


// export function onOpenModal({lightbox, lightboxImage}) {
//   lightbox.classList.add('is-open');
//   lightboxImage.src = document.activeElement.parentNode.dataset.url;
//     stopScroll();
//   };

//   export function openModalClick(e, { lightbox, modalImage }) {
//     if (e.target.classList.contains('main-img')) {
//       lightbox.classList.add('is-open');
//       lightboxImage.src = e.target.parentNode.parentNode.dataset.url;
//     stopScroll();
//     } else {
//       return
//     }

//   };

//   export function closeModalOn({lightbox, lightboxImage}) {
//     lightbox.classList.remove('is-open');
//     lightboxImage.src = "";
//     startScroll();
//   };

//   export function onCloseModalOverlay(e, ref) {
//     if (e.target === e.currentTarget) {
//       closeModalOn(ref);
//     }
//   };
