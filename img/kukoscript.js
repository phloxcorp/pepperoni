function draw() {
//  var userHeight1 = $(window).height()
//  var userWidth1 = $(window).width()
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var bg01 = canvas.getContext('2d');
    bg01.fillStyle = '#7B3AFF';
    bg01.beginPath();
    bg01.moveTo(-750, 0);
    bg01.lineTo(990, 0);
    bg01.lineTo(170,1375);
    bg01.closePath();
    bg01.fill();

    var bg02 = canvas.getContext('2d');
    bg02.fillStyle = '#6E2AF6';
    bg02.beginPath();
    bg02.moveTo(0, 260);
    bg02.lineTo(0,1375);
    bg02.lineTo(750,1375);
    bg02.closePath();
    bg02.fill();
  }

}

var main = $('.main-01')[0];  //added [0]
var footer = $('.footer')[0];

setInterval(function(){
    var scroll = document.body.scrollTop;
    console.log('scroll is'+ scroll);
    if(scroll>15){
      $('.gnb-bar').addClass('addbg');
    }else{
      $('.gnb-bar').removeClass('addbg');
    }
    var userWidth = $(window).width()
    var mainHeight = main.clientHeight;
    console.log('mainHeight is ' + mainHeight);
    var userHeight = $(window).height()
    var footerHeight = footer.clientHeight*1.5;

    if(userHeight<(mainHeight+footerHeight)){//user 윈도우 높이가 main 보다 작은경우
      //footer를 박스 아래 relative로 고정해야함
      $('.footer').addClass('footerposition');
    }
    else{
      $('.footer').removeClass('footerposition');
    }

    // if max width가 430px 보다 작으면, main-02에 사진을 넣자!
    if(userWidth<430){
      $('.mobilebackground').addClass('backgroundbasic');
    }
    else{
      $('.mobilebackground').removeClass('backgroundbasic');
    }

},128);
