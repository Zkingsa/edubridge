let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      Clickable: true,
    },
    loop:true,
    grabCursor:true,
  });


  var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

  const CACHE_NAME = 'bhebhe-fast-food-cache-v1';
const urlsToCache = [
  '/',
  '/login.css',
  '/boxicons.min.css',
  '/handler.php',
  '/Register.html'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
