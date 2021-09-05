  import { alert, error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';

  const infoBox = ()=> {
  error ({ text: "You must enter query parameters!"});
  }
  export {infoBox};
