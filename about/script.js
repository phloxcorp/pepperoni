
var userWidth = $(window).width();
var isWeb = new Boolean(true);

// reset

if(userWidth<=800){
  mobilesize();
  isWeb = false;
}else{
  websize();
  isWeb = true;
}

//resize 시에만 디텍팅 해야함 아니면 튕김요

window.onresize = resizeEvent;
function resizeEvent() {
    userWidth = $(window).width();
    console.log('userWidth is ' + userWidth);
    if(userWidth<=800 && isWeb){
      mobilesize();
      isWeb = false;
    }else if(userWidth>800 && !isWeb){
      websize();
      isWeb = true;
    }
}

//responsive시 리로드

function websize(){
  $('#main .webHide, #home .webHide').hide();
  $('#main .mobileHide, #home .mobileHide').show();
};

function mobilesize(){
  $('#main .mobileHide, #home .mobileHide').hide();
  $('#main .webHide, #home .webHide').show();
  //$("#main .mobile-unwrap").unwrap();
};
