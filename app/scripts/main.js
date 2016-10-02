$(function ($) {

  $('#section_1').particleground({
    height: 'auto',
    dotColor: '#999',
    lineColor: '#999'
  });

  $('#wrapper').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '#menu',
    css3: true,
    scrollingSpeed: 600,
    easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function(anchorLink,index) {
      switch(index) {
        case 1:
          $('#section_1 h1').css({
            'opacity':'1'
          })
          $('#section_1 .intro-text').css({
            'margin-top':'20px'
          })
          break;
        case 2:
          $('#section_2 .section-title h1').css({
            'margin-left':'0px',
            'opacity':'1'
          });
          $('#section_2 .section-title p').css({
            'margin-right':'0px',
            'opacity':'1'
          });
          $('#section_2 .row').css({
            'opacity':'1'
          });
          break;
        case 3:
          $('#section_3 .section-title h1').css({
            'margin-left':'0px',
            'opacity':'1'
          });
          $('#section_3 .section-title p').css({
            'margin-right':'0px',
            'opacity':'1'
          });
          break;
        case 4:
          break;
        case 5:
          break;
      }
    },
    onLeave:function(index){
      switch(index) {
        case 1:
          $('#section_1 h1').css({
            'opacity':'0.1'
          })
          $('#section_1 .intro-text').css({
            'margin-top':'800px'
          })
          break;
        case 2:
          $('#section_2 .section-title h1').css({
            'margin-left':'1200px',
            'opacity':'0.1'
          });
          $('#section_2 .section-title p').css({
            'margin-right':'1200px',
            'opacity':'0.1'
          });
          $('#section_2 .row').css({
            'opacity':'0.1'
          });
          break;
        case 3:
          $('#section_3 .section-title h1').css({
            'margin-left':'1200px',
            'opacity':'0.1'
          });
          $('#section_3 .section-title p').css({
            'margin-right':'1200px',
            'opacity':'0.1'
          });
          break;
        case 4:
          break;
        case 5:
          break;
      }
    },
    afterResize: function() {

    }
  });

  

});
