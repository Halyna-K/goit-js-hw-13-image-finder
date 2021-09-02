 import * as basicLightbox from 'basiclightbox';
 import '../node_modules/basiclightbox/dist/basicLightbox.min.css'
 // const basicLightbox = require('basiclightbox');

 const instance = basicLightbox.create(`
      <div class="modal">
          <p>
              Your first lightbox with just a few lines of code.
              Yes, it's really that simple.
          </p>
      </div>
  `);
   instance.show();


// export default instance
