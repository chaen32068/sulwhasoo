$(function () {
  const select_language = $(".select_language");
  const search_container = $(".search-container");
  const h_open_Btn = $(".h_open_search");
  const h_close = $(".sch_close");

  // nav
  const gnb = $(".gnb"); //Active
  const gnb_menu_list = $(".nav_d1.d1_over"); //selector
  const sub_menu = $(".sub_menu"); //On
  const sub_menu_list = $(".sub_menu>ul>li"); //현재 순서값에 Over

  gnb_menu_list.mouseenter(function () {
    const idx = $(this).index();
    console.log(idx);

    sub_menu_list.removeClass("over");
    sub_menu.addClass("on");
    sub_menu_list.eq(idx).addClass("over");
    gnb.addClass("active");
  });

  sub_menu_list.mouseleave(function () {
    setTimeout(pc_menu_reset, 1000);
  });

  function pc_menu_reset() {
    sub_menu_list.removeClass("over");
    sub_menu.removeClass("On");

    gnb.removeClass("active");
  }

  select_language.click(function () {
    $(this).toggleClass("show");
  });

  h_open_Btn.click(function () {
    search_container.addClass("show");
  });
  h_close.click(function () {
    search_container.removeClass("show");
  });
});
