// Lightbox
$(".lightgallery").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

// 버튼 클릭 시 전체 메뉴 가시화
$(".tit .btn").click(function(e){
    e.preventDefault();
    // $("#cont_nav").css("display", "block");
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
});

// 배너
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

// 탭 메뉴
var $tabList = $(".tab_menu");
$tabList.find("ul ul").hide();
$tabList.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$tabList.find("ul>li>a").click(tabMenu).focus(tabMenu);

// 갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});

$(".play").click(function(){
  $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function(){
  $(".gallery_img").slick("slickPause");
});

$(".prev").click(function(){
  $(".gallery_img").slick("slickPrev");
});

$(".next").click(function(){
  $(".gallery_img").slick("slickNext");
});

/* Layer Popup */
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").slideDown();
});

$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").slideUp();
});

/* Window Popup */
$(".window").click(function(e){
   e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    // 옵션: left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("samplePopup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0. menubar=0");
});