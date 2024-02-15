$(document).ready(function(){

  let x=0;
  let s=-1;  //흘러가는 방향을 의미

  function comSlide(){
    x = x + s;
    if ( x < -1110 ) { x = 0 };  /* 전체폭의 반(즉 1개의 총너비) */
		if ( x > 0 ) { x = -1110 };

    $(".com_items").css({left:x});
  };

  bauto = setInterval(comSlide,30);

  //오버시 멈춤
  $(".com_items").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(comSlide,30);
  });

});