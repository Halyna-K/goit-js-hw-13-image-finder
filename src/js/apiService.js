import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import axios from 'axios'

const URL ={
BASE_URL: `https://pixabay.com/api/`,
API_KEY: '23194515-4229c06a71e7a36cb0b196559',
search: '',
image_type: 'photo',
orientation: 'horizontal',
perPage: 12
}
let currentPage = 1
const getApi = async () => {
    try {
         const res = await axios.get(`${URL.BASE_URL}?key=${URL.API_KEY}&q=${URL.search}&image_type=${URL.image_type}&orientation=${URL.orientation}&page=${currentPage}&per_page=${URL.perPage}
        `)
        currentPage++;
        return await res.data;
    }
    catch (err) {
         error({text: (`Your request "${URL.search}" cannot be processed by the server and have status ${res.status}. Please enter query parameters!`),
         hide:true,
         delay:2000})}
       }


export { URL, getApi};
