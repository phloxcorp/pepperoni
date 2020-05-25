setInterval(function(){
  var userWidth = $(window).width()
  console.log('userWidth is ' + userWidth);
  if(userWidth<768){
          $('#404 .app-open').show();
          $('#404 .body-download').hide();
          $('#404 .gnb-download').hide();

  }else{
    $('#404 .app-open').hide();
    $('#404 .body-download').show();
    $('#404 .gnb-download').show();
}
},128);
