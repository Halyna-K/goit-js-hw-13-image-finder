import './sass/main.scss';
import refs from './js/refs.js';
import { alert, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import { infoBox} from './js/pnotify.js'
// import { URL, fetchApi} from './js/apiService.js';
import handlerSubmit from './js/handlerSubmit.js';

// export const url = new URL;

refs.form.addEventListener('submit', handlerSubmit);

// refs.buttonLoadMore.addEventListener('click', () => fetchAndRenderImages(refs, pN));

// refs.imgList.addEventListener('click', e => openModalClick(e, refs));
// refs.modalCloser.addEventListener('click', () => closeModalOn(refs));
// refs.modalOverlay.addEventListener('click', e => onCloseModalOverlay(e, refs));
