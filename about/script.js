
var userWidth = $(window).width();
var isWeb = new Boolean(true);

// reset

if(userWidth<=800){
  mobilesize();
  isWeb = false;
}else{
  $('#main .mobile').hide();
  $('#main .webHide').hide();
  isWeb = true;
}

//resize 시에만 디텍팅

window.onresize = resizeEvent;
function resizeEvent() {
    userWidth = $(window).width();
    console.log('userWidth is ' + userWidth);
    if(userWidth<=800){
      mobilesize();
      isWeb = false;
    }else{
      websize();
      isWeb = true;
    }
}

//responsive시 리로드

function websize(){
  location.reload();
  $('#main .mobile').hide();
};

function mobilesize(){
  $('#main .mobileHide').hide();
  $('#main .mobile').show();
  $("#main .mobile-unwrap").unwrap();
};
