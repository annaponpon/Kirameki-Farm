// ハンバーガーメニュー
var hamburger = $('.header__hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.header__hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('header__hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('header__hamburger-menu-active');
});


// スリック
$('.gallery__slick').slick({
  dots: true, //ドットのナビ表示
  arrows: false, // 前・次のスライド切り替える矢印表示
  slidesToShow: 1, //表示するスライド枚数
  slidesToScroll: 1, //1回で動くスライド数
  swipe: true, //スワイプ操作を有効
  infinite: true, // 無限再生
  autoplay: true, // 自動再生
  autoplaySpeed: 3000, // 自動再生のスピード
});


// アコーディオンメニュー
$(function(){
  //クリックで動く
  $('.faq__accordion-box--q').click(function(){
    $(this).toggleClass('active');
    $(this).next('faq__accordion-box--a').slideToggle();
  });
});


// Accordion button
$(function () {
  $('.js-accordionButton').click(function () {
    $(this).next('.accordion__content').slideToggle(); // アコーディオンボタン要素の次にあるコンテンツを開閉する
    $(this).toggleClass('is-open'); // アコーディオンボタン要素にclassを追加する
  });
});