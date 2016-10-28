import styles from '../../less/index.less';
require('fancybox')($);

$(()=> {
  $('.site-footer a').hover((e)=> {
    $(e.currentTarget).toggleClass('pulse');
  });

  $('.fancybox').fancybox({
    scrolling: 'hidden',
    helpers: {
     overlay: {
       locked: true
     }
    }
  });
});
