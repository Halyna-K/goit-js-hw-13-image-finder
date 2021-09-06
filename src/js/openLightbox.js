import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

const openLargeImage = (e) => {
    if (e.target.nodeName !== "img")
    {
        openLightbox(e.target.dataset.source);
        return
    }
}


const openLightbox = (url) => {
      basicLightbox.create(`<img src="${url}" width="1600" height="900">`).show();
  }

export default openLargeImage;
