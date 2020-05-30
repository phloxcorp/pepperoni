function playHls(id, path) {
  if (Hls.isSupported()) {
    var video = document.getElementById(id);
    var hls = new Hls();
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      hls.loadSource(path);
    });
  }
}

playHls('ads000', './hls/ads001.m3u8')
playHls('ads001', './hls/ads001.m3u8')
playHls('ads002', './hls/ads002.m3u8')
playHls('ads003', './hls/ads003.m3u8')
playHls('ads004', './hls/ads004.m3u8')
playHls('ads005', './hls/ads005.m3u8')
playHls('ads006', './hls/ads006.m3u8')
playHls('creator001', './hls/creator001.m3u8')
playHls('creator002', './hls/creator002.m3u8')
playHls('creator003', './hls/creator003.m3u8')
playHls('creator004', './hls/creator004.m3u8')
playHls('creator005', './hls/creator005.m3u8')

var userWidth = $(window).width();
//var userHeight = $(window).height();
var isWeb = new Boolean(true);
var isLandscape = new Boolean(true);

if(userWidth<=767){ // || userWidth/userHeight < 1
  mobilesize();
  isWeb = false;
}else{
  $('#main .mobile').hide();
  $('#main .webHide').hide();
  isWeb = true;
//404관련
$('#404 .app-open').hide();
$('#404 .body-download, #404 .gnb-download').show();
}
if(window.matchMedia("(orientation: landscape)").matches){
  isLandscape = true;
}else if(window.matchMedia("(orientation: portrait)").matches && isWeb){
  tabletsize();
  isLandscape = false;
}else{
  isLandscape = false;
}

/*
WEB true
userWidth>767
window.matchMedia("(orientation: landscape)").matches

Tablet true
userWidth>767
window.matchMedia("(orientation: portrait)").matches

Mobile true
userWidth<=767

*/

window.onresize = resizeEvent;
function resizeEvent() {
    userWidth = $(window).width();
    console.log('userWidth is ' + userWidth);
    if(userWidth<=767 && isWeb){
      mobilesize();
      isWeb = false;
    }else if(userWidth>767 && !isWeb){
      websize();
      isWeb = true;
    }
    if(isWeb){
      if(window.matchMedia("(orientation: landscape)").matches && !isLandscape)
    { websize();
      isLandscape = true;
    }else if(window.matchMedia("(orientation: portrait)").matches && isLandscape)
    { /*세로형 웹, 타블렛인 경*/
      tabletsize();
      isLandscape = false;
    }}
}

//responsive

function websize(){
  location.reload();
  $('#main .mobile').hide();
  $('#main .webHide').hide();
  //404 관련
  $('#404 .app-open').show();
  $('#404 .body-download, .#404 .gnb-download').hide();
};

function mobilesize(){
  $('#main .web, #main .mobileHide').hide();
  $('#main .mobile').show();
  $("#main .mobile-unwrap > .body-left").unwrap();
  $("#main .mobile-swiper").addClass('swiper-slide');
//404관련
$('#404 .app-open').hide();
$('#404 .body-download, #404 .gnb-download').show();

};

function tabletsize(){
  $('#main .tabletHide').hide();
  $('#main .tablet').show();
};

// swiper1
var mySwiper = new Swiper('.swiper1', {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  shortSwipes: true,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  updateOnWindowResize: true, // 리사이즈할 때 스와잎 페이지 수를 다시 세어야 함
});

// swiper2
new Swiper ('.swiper2', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
