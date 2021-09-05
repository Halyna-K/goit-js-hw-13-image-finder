import { infoBox } from './pnotify.js';
import { alert, error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';

const URL ={
BASE_URL: `https://pixabay.com/api/`,
API_KEY: '23194515-4229c06a71e7a36cb0b196559',
search: '',
image_type: 'photo',
orientation: 'horizontal',
page: 1,
perPage: 12
}

const fetchApi = async () => {
    try {
         const res = await fetch(`${URL.BASE_URL}?key=${URL.API_KEY}&q=${URL.search}
          &image_type=${URL.image_type}&orientation=${URL.orientation}&page=${URL.page}&per_page=${URL.perPage}
        `);
          // URl.page +=1;
        //  return res.data.hits;
          return await res.json();
        //    URl.page +=1;
        //   return res.data.hits;
    }
    catch (err) {
       (err=> {
        alert ({ text: "You must enter query parameters!"})}
        // error({ text: "You must enter query parameters!"})
        // error({text:(`Error ${URL.search} status${res.status}`),
            // hide:true,
            // delay:3000,
          )}
          // resetPage() {
          //   URL.page = 1;
          //   };
       }


export { URL, fetchApi};



// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

// export default {
//   page:1,
//   search: '',
//   per_page: 12,
//   APIkey: '23194515-4229c06a71e7a36cb0b196559',
//   baseURL: "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q",
//   async getResourse   ()  {
//     try{
//       const responce = await fetch(`${this.baseURL}=${this.search}&page=${this.page}&per_page=${this.per_page}&key=${this.APIkey}`);
//       this.page +=1;

//       return await  responce.json();
//     }
//     catch(err) {
//       throw error({
//          text:(`Ошибка по ${this.search} статус${responce.status}`),
//          hide:true,
//          delay:3000,
//        });

//     }
//   },
//   resetPage(){
//   this.page = 1;
//   },

// }
