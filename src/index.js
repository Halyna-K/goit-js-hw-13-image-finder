import './sass/main.scss';
import refs from './js/refs.js';
import handlerSubmit from './js/handlerSubmit.js';
import openLargeImage from './js/openLightbox.js';
import onLoadMore from './js/loadMore.js';


refs.form.addEventListener('submit', handlerSubmit);
refs.gallery.addEventListener('click',openLargeImage);
refs.more.addEventListener('click',onLoadMore);
