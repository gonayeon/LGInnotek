$(function() {
    $(".tab_menu_btn").click(function(){
        $(".tab_menu_btn").removeClass("on");
        $(this).addClass("on");
    });

    $(".tab_menu_btn1").click(function(){
        $(".tab_box").hide();
        $(".tab_box1").show();
    });

    $(".tab_menu_btn2").click(function(){
        $(".tab_box").hide();
        $(".tab_box2").show();
    });
    $(".tab_box1").show();
});