$(document).ready(function(){

  let bnum=0;

  /* 다음보기 */
  $(".right_btn").click(function(){
    if(bnum<4){
      $(".thumbs ul").stop().animate({left:"-=168px"},500);
      bnum++;
    };

  });


  /* 이전보기 */
  $(".left_btn").click(function(){

    if(bnum>0){
      $(".thumbs ul").stop().animate({left:"+=168px"},500);
      bnum--;

    };

  });


});