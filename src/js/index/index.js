import styles from '../../less/index.less';

$(()=> {
  console.log('launched');

  $('.site-footer a').hover((e)=> {
    $(e.currentTarget).toggleClass('pulse');
  });

});
