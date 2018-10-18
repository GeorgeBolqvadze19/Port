$(document).ready(function(){
new WOW().init();
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
parallaxInstance.friction(0.1, 0.1);


var scenee = document.getElementById('depth');
var parallaxInstancee = new Parallax(scenee);
parallaxInstancee.friction(0.2, 0.2);

$(".content").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 10,
  touchpadSupport: true,
  fixedBackground: true
});

var $main_arrow = $('.main-arrow-box');
var aboutText = $('.about_us').attr('data-aboutUs');

var scroll = 0;

$(window).on('mousewheel',function(e){
  scroll++;
  if (scroll < 2) {
    $('#scene').addClass('active')
    $main_arrow.fadeOut(200);
    $('.stick').addClass('active')
    $('body').addClass('active')
    var text = new Typed('.about_us',{
      strings: [aboutText],
      typeSpeed: 0.01,
      startDelay: 900
    })
  }
})
$main_arrow.on('click',function(){
	$('#scene').addClass('active')
  $(this).fadeOut(200);
  $('.stick').addClass('active')
  $('body').addClass('active')
  var text = new Typed('.about_us',{
    strings: [aboutText],
    typeSpeed: 0.01,
    startDelay: 900
  })
})


var rebeccapurple;

var a = document.querySelectorAll('.hi span');

for (var i = 0; i < a.length; i++) {
  a[i].style.animationDelay = '.4' + (i) + 's';
}


})