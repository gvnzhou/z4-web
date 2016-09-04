$(function ($) {

  $('#section_1').particleground({
    height: "auto",
    dotColor: '#999',
    lineColor: '#999'
  });

  $('#wrapper').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '#menu',
    css3: 'true',
    scrollingSpeed: 500,
    easingcss3: 'cubic-bezier(0.47, 0, 0.75, 0.72)',
    afterLoad: function(anchorLink,index) {
      if(index===2) {
        // $(".service-item").css('margin-top','20px');
        // console.log($(".service-item"))
      }
    }
  });


});
