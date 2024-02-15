$(document).ready(function(){

  let cbanner_w= $(".com_items>ul>li").width()+20;  //배너간 오른쪽여백이 있는 겨우 여백만큼(20px) 더해줌
  
  // $(".com_items>ul>li:last").prependTo(".com_items>ul");
  //목록 마지막 이미지를 목록 안의 가장 앞으로 배치
  $(".ban ul").css({ left:-banner_w});
  //첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기


  //자동으로 슬라이드 함수생성
  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); 
			$(this).css({left:-banner_w}); 
		});
  };

  bauto = setInterval(bannerAuto,4000);

  //다음보기
  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
			$(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
		});	
    bauto = setInterval(bannerAuto,4000);
  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop().animate({left:"+="+banner_w+"px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지가 맨앞로 이동
			$(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
		});	
    bauto = setInterval(bannerAuto,4000);
  });

  //마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....
  $(".ban").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(bannerAuto,4000);
  });

});