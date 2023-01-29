$(window).on('load', function() {
	$("#loading").fadeOut(700);
  })

var humburgerIcon = document.querySelector('.mobile-menu-humburger');
var mobileMenu = document.querySelector('.nav-menu-mobile');
var closeBtn = document.querySelector('.close-btn');

humburgerIcon.addEventListener('click', function(){
	mobileMenu.style.right = '0px';
})

closeBtn.addEventListener('click', function(){
	mobileMenu.style.right = '-350px';
})

new WOW().init()

var containerEl = document.querySelector('.gallery-item');
var mixer = mixitup(containerEl);

 const swiper = new Swiper('.testimonial-slides', {

 direction: 'horizontal',
 loop: true,
 slidesPerView: 3,
 spaceBetween: 30,
 pagination: {
 el: ".swiper-pagination",
 clickable: true,
},

});

 $(window).on('load', function() {
   $("#loading").fadeOut(700);
 })
 
 