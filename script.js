
    let ul = document.querySelector('.list');
    let list = document.querySelector('.listBtn');
    let closeBtn = document.querySelector('.close')
    let liels = document.querySelectorAll('.lin')
    list.addEventListener('click',  () =>{
        ul.classList.add('show-animae')
        ul.classList.add('open')
    })
    closeBtn.addEventListener('click',  () =>{
        ul.classList.remove('show-animae')
        ul.classList.remove('open')
        ul.classList.add('hide')
    });
     
   
    

    const lazyLoadImages = document.querySelectorAll('.lazy-loader');

  
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
    const image = entry.target;
    if (!image.classList.contains('loaded')) {
    image.src = image.dataset.src;
    image.classList.add('loaded');
    observer.unobserve(image);
    }
    image.style.opacity = 0;
    image.style.transform = 'scale(0.9)';
    setTimeout(() => {
    image.style.opacity = 1;
    image.style.transform = 'scale(1)';
    }, 100);
    }
    });
    }, {
    threshold: 1.0,
    });
    
    lazyLoadImages.forEach((image) => {
    observer.observe(image);
    });
    



    liels.forEach((liel)=> {
        liel.addEventListener(('click', () => {
            ul.classList.remove('show-animae')
           ul.classList.remove('open')
           ul.classList.add('hide')
       }))
      })