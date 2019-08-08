'use strict';

$(function () {

  // theaMsForm($('.sign-in'));

  /*author:tangxue*/
  /* 滑动切换
     *   togBox:整个切换的盒子
     *   tagBox：切换按钮的盒子
     *   conBox：需要切换的div
     *   addClasses ：给切换按钮加上的class类名
  */
  function toggleTag(togBox, tagBox, conBox, addClasses) {
    $(togBox).each(function () {
      $(this).find(tagBox).children().hover(function () {
        var index = $(this).index();
        $(this).addClass(addClasses).siblings().removeClass(addClasses);
        $(this).parents(togBox).find(conBox).children().eq(index).show().siblings().hide();
      });
    });
  }

  /* 硕士、博士、研修班 tab */
  toggleTag('.txToggleBox', '.txTagBox', '.txConBox', 'active');
  /* 首页-推荐 */
  toggleTag('.recommend', '.tab-head', '.tab-body', 'active');
  /* 首页-友情链接 */
  toggleTag('.yjs-link', '.tab-head', '.tab-body', 'active');
  /* 院校终端-首页 招生简章 */
  toggleTag('.tx-module5', '.title-tag', '.txPulicList1', 'active');
  /* 首页 全国/国际 */
  toggleTag('.yjs-types', '.type-left', '.type-detail', 'active');

  /* author: QiLiangpu */
  $(".txt h4").hover(function () {
    var $this = $(this);
    $this.parent().parent().find('h4').removeClass("active");
    $this.addClass("active");
    $this.parents('.c').find('.list').removeClass("active");
    $this.parents('.c').find('.list').eq($this.index()).addClass("active");
  });

  /* author: HongBaojin */
  /*
    tabBox: 要切换的按钮盒子
  */
  function clickHandle(tagBox, addClass) {
    $(tagBox).each(function () {
      $(this).click(function () {
        $(this).addClass(addClass).siblings().removeClass(addClass);
        $("#type > a").each(function () {
          if ($(this).hasClass('active')) {
            $('#selected span:first-child').text($(this).text());
          }
        });
        $("#area > a").each(function () {
          if ($(this).hasClass('active')) {
            $('#selected span:nth-child(2)').text($(this).text());
          }
        });
        $("#school > a").each(function () {
          if ($(this).hasClass('active')) {
            $('#selected span:nth-child(3)').text($(this).text());
          }
        });
      });
    });
  }
  /* 院校库 */
  clickHandle('.types-r a', 'active');

  /* 回到顶部 */
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });

  /* 右侧悬浮 */
  $('.right-nav li').each(function () {
    var that = $(this);
    that.mouseenter(function () {
      $('.right-nav li').each(function () {
        $(this).find('.hide-content').hide();
      });
      that.find('.hide-content').show();
    });
  });

  /* 首页 全国/国际 更多> */
  $('#moreTypes1').click(function () {
    $(this).find('.provinces').css('display', 'block');
  });
  $('#moreTypes2').click(function () {
    $(this).find('.provinces').css('display', 'block');
  });

  // wap
  if ($(document).width() <= 750) {
    /* 首页 头部右上角 */
    $('.show-nav').click(function () {
      $(this).toggleClass('show');
      $('.wap-head-nav').toggleClass('show');
      $('.mark').toggleClass('show');
    });

    /* 首页 头部右上角 搜索 */
    $('.show-form').click(function () {
      $(this).toggleClass('show');
      $('.r-search').toggleClass('show');
      $('.mark').toggleClass('show');
      $('.head-l').toggleClass('hide');
    });

    /* 首页 头部隐藏的选择 */
    $('.wap-head-nav a').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }
});

var mySwiper = new Swiper('.swiper-container', {
  // 如果需要分页器
  pagination: '.swiper-pagination'

  // autoplay: 2000,
});

function CheckForm() {
  if (document.search_one.text_one.value == "") {
    alert("请输入需要搜索的关键词");
    document.search_one.text_one.focus();
    return false;
  } else {
    var urlstr = encodeURI(document.search_one.text_one.value);
    //var city = document.search_one.citymk.value;
    var urlx = 'http://zhannei.baidu.com/cse/search?s=6924920297305690263&entry=1&q=' + urlstr;
    //document.search_one.action = urlx;
    //document.search_one.submit();
    window.open(urlx);
  }
  return false;
}