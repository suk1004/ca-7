$(document).ready(function(){

  /* Gnb-input */
  $(".fa-magnifying-glass").click(function(){
    $(".searchbtn").toggleClass("srch");
  });

  /* Sub Menu */
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  /* Main */
  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  //이미지와 활성화버튼이 바뀌는 함수
  function changeImg(idx){

    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };


  //자동함수 생성
  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000);

  //하단버튼
  $btn.click(function(){
    clearInterval(timer);
    idx = $(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });


  //좌우버튼
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx < 0){
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  /* SECTION_________________________ */
  /* NOW */
  $(".back a:last-child").click(function(){
    $(this).toggleClass("fill");
  });


  /* YKA */


  /* Review */
  //탭메뉴 클릭
  $(".tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");

    $(".panel li").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();

  });

  //gallery1
  //탭메뉴별 이미지 갤러리
  let goldidxA=0;
  let gidxA=0;

  function galleryImgA(gidxA){
    if(goldidxA != gidxA){
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300);
      $(".gallery1 .thumbs ul li").eq(goldidxA).css({"opacity":0.3});
      $(".gallery1 .thumbs ul li").eq(gidxA).css({"opacity":1});
    };
    goldidxA = gidxA;
  };

    //썸네일버튼 클릭시
  $(".gallery1 .thumbs ul li").click(function(){
    gidxA=$(this).index(); //불러올 클릭한 이미지에 번호 매기기
    galleryImgA(gidxA); //동작(함수) 적용하기
  });

  let bnumA=0;

  /* 다음보기 */
  $(".right_btn").click(function(){
    if(bnumA<4){
      $(".thumbs ul").stop().animate({left:"-=168px"},500);
      bnumA++;
    };

  });


  /* 이전보기 */
  $(".left_btn").click(function(){

    if(bnumA>0){
      $(".thumbs ul").stop().animate({left:"+=168px"},500);
      bnumA--;

    };

  });
  
    //gallery2
  //탭메뉴별 이미지 갤러리
  let goldidxB=0;
  let gidxB=0;

  function galleryImgB(gidxB){
    if(goldidxB != gidxB){
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300);
      $(".gallery2 .thumbs ul li").eq(goldidxB).css({"opacity":0.3});
      $(".gallery2 .thumbs ul li").eq(gidxB).css({"opacity":1});
    };
    goldidxB = gidxB;
  };

    //썸네일버튼 클릭시
  $(".gallery2 .thumbs ul li").click(function(){
    gidxB=$(this).index(); //불러올 클릭한 이미지에 번호 매기기
    galleryImgB(gidxB); //동작(함수) 적용하기
  });

  let bnumB=0;

  /* 다음보기 */
  $(".right_btn").click(function(){
    if(bnumB<4){
      $(".thumbs ul").stop().animate({left:"-=168px"},500);
      bnumB++;
    };

  });


  /* 이전보기 */
  $(".left_btn").click(function(){

    if(bnumB>0){
      $(".thumbs ul").stop().animate({left:"+=168px"},500);
      bnumB--;

    };

  });
  
  

  /* Community */
  let x=0;
  let s=-1;  //흘러가는 방향을 의미

  function comSlide(){
    x = x + s;
    if ( x < -1140 ) { x = 0 };  /* 전체폭의 반(즉 1개의 총너비) */
		if ( x > 0 ) { x = -1140 };

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