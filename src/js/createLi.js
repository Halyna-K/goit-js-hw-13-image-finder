import refs from './refs.js';
let n = 1

const createLi = () =>{
    li = document.createElement('li')
    li.innerHTML = `${++n} item`
    refs.gallery.append(li)
}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createLi()
        }
        observer.unobserve(entry.target)
        observer.observe(document.querySelector('li:last-child'))
    })
}, {
    threshold: 1
})

 observer.observe(document.querySelector('li'));

export {createLi};
