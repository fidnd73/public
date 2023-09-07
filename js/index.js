$(document).ready(function (){


  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();

  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();

  },);

  //주 메뉴 오버시 해당하는 서브 박스의 전체 배경색과 왼쪽 이미지 나오도록

  $(".main").hover(function(){

    let oldimg = 0; //기존에 보이는 이미지
    let newimg = $(this).index(); //새로 바뀌는 이미지

    $(this).find(".sub_all").css({"background":"#eee"});

    $(".subBoxImg ul li").eq(oldimg).stop().hide("slow");
    $(".subBoxImg ul li").eq(newimg).stop().show("slow");
    oldimg = newimg;

  },function(){
    $(this).find(".sub_all").css({"background":"#fff"});
    $(".subBoxImg ul li").stop().hide();

  });

  //sub1 배너

  function bannerAuto(){

    $(".ban ul").stop(true,true).animate({marginLeft:"-=378px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });

  };

  bauto = setInterval(bannerAuto,4000);

  /* 탭메뉴 */

  $(".tab li").click(function(){

    let num = $(this).index();
    let move = 130*num;

    $(".tab-header .tab-highlight").animate({left:move});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents .tab-txt").removeClass("active");
    $("#" + result).addClass("active");

  });

  
  //sub3_________________

  $(".main").hover(function(){

    $(this).find(".sub").stop().show("slow");
    $(".sub_box").stop().animate({right:"-200px"},300);
    $(".trigger").stop().animate({right:"185px"},300);
  },function(){
    $(this).find(".sub").stop().hide("fast");

  });

  //배너__________

  let foldidx=0;
  let fidx=0;

  function sub3Banner(){

    fidx++;
    if(fidx>3){
      fidx=0;
    }

    $("#gallery img").eq(fidx).stop().fadeIn(300);
    $("#gallery img").eq(foldidx).stop().fadeOut(300);
    foldidx=fidx;

  };

  setInterval(sub3Banner,4000)

  /* 스크롤 페이드인 */

  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll('.sa');

  const saFunc = function() {
    for (const element of saElementList) {
      if (!element.classList.contains('show')) {
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.add('show');
        }
      }
    }
  }

  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);


});

