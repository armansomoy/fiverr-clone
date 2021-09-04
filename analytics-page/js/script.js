$(function(){
$('#demo1').skdslider({
    slideSelector: '.slide',
    delay:5000,
    animationSpeed: 2000,
    showNextPrev:true,
    showPlayButton:true,
    autoSlide:true,
    animationType:'fading'
});


let gig_status = true;
let get_on = document.querySelector('.get-on');
let get_of = document.querySelector('.get-of');
let get_of2 = document.querySelector('.get-of2');
let get_onfo = document.querySelector('.gig-onof');

get_onfo.addEventListener('click', function() {
    if (gig_status === true) {
        gig_status = false;
        get_of.style.width = '25px'
        get_of.style.height = '15px'
        get_of2.style.display = 'block'
    }
    else{
        gig_status = true;;
        get_of.style.width = '15px'
        get_of.style.height = '13px'
        get_of2.style.display = 'none'
    }
})
if (gig_status === true) {
   
} else {
    get_of.style.width = '10px'
}






$('.tips_items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
});

}) 