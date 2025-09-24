$(function () {
  // page1
  setInterval(function () {
    $(".change ul")
      .stop()
      .animate({ "margin-top": "-50px" }, function () {
        $(".change ul li:first-child").appendTo(".change ul");
        $(".change ul").css({ "margin-top": "0px" });
      });
  }, 1000);

  // page2
  $("header li").on("click", function () {
    let i = $(this).index();
    console.log(i);

    // let page1 = $("#container .page1").offset().top;
    // console.log(page1);
    // let page2 = $("#container .page2").offset().top;
    // console.log(page2);
    // let page3 = $("#container .page3").offset().top;
    // console.log(page3);
    // let page4 = $("#container .page4").offset().top;
    // console.log(page4);

    let target = $("#container section").eq(i).offset().top;
    console.log(target);
    $("html").stop().animate({ scrollTop: target });

    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });

  let page2 = $("section.page2").offset().top;
  console.log(page2);

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);

    if (sc >= page2) {
      $("section.page2 li").addClass("active");
    } else {
      $("section.page2 li").removeClass("active");
    }
  });

  // page3
  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);
    $(".con1").text();

    if (sc >= 900 && sc <= 1600) {
      $(".con1 img").fadeIn(1000);
    } else {
      $(".con1 img").fadeOut(1000);
    }
    if (sc >= 1100 && sc <= 1700) {
      $(".con2 img").fadeIn(1000);
    } else {
      $(".con2 img").fadeOut(1000);
    }
    if (sc >= 1300 && sc <= 1800) {
      $(".con3 img").fadeIn(1000);
    } else {
      $(".con3 img").fadeOut(1000);
    }
    if (sc >= 1500 && sc <= 1900) {
      $(".con4 img").fadeIn(1000);
    } else {
      $(".con4 img").fadeOut(1000);
    }
  });

  // con04
  $(".small li").on("click", function () {
    $(".small li").css({ opacity: "0.5", border: "10px solid transparent" });
    $(this).css({ opacity: "1", border: "10px solid #ddd" });

    i = $(this).index();
    console.log(i);

    $(".big li").hide();
    $(".big li").eq(i).show();
  });
});
