/* TRAQUEAMENTO */
function tihh_gets(){
    return window.location.search.substr(1);
}

$(document).ready(function(){

  $('a.link').each(function(){

    var link = $(this).attr('href');
    var gets = tihh_gets();

    if(gets.length > 0){
      $(this).attr('href', link + '?' + gets);
    }

  });

});


/*TIMER*/
$(document).ready(function(){

    var timer = (60 * 60); //1 hora em segundos

    var $timer_minutos = $('#timer_minutos');
    var $timer_segundos = $('#timer_segundos');

  setInterval(function(){

    var t_minutes = Math.floor(timer / 60);
    var t_seconds = Math.floor( timer - (t_minutes * 60));

    t_minutes = (timer < 0?0:t_minutes);
    t_seconds = (timer < 0?0:t_seconds);

    $timer_minutos.text((t_minutes < 10?'0'+t_minutes:t_minutes));
    $timer_segundos.text((t_seconds < 10?'0'+t_seconds:t_seconds));


    timer--;

    /*var d = new Date();
    d.setTime(d.getTime() + (60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = 'pv_timer=' + cvalue + ";" + expires + ";path=/";
    |*/

  }, 1000)





})

function timer_ajusta(){
  //se não for computador, calcula os números do TIMER...

  if($(window).width() < 900){

    $painel = $('img.preco');
    $timerNumeros = $('#timer_minutos,#timer_segundos');

    $painelH = 1040;
    $painelW = 900;
    $timerTop = 170;

    var painelPercH = Math.floor( ($painel.height() * 100) / $painelH );
    var painelPercW = Math.floor( ($painel.width() * 100) / $painelW );

    //TOP
    var novoTop = Math.floor( ($painel.height() * $timerTop) / $painelH);
    $timerNumeros.css('marginTop', novoTop);

    //HEIGHT/WIDHT
    var novoHeight = ( (painelPercH / 100) * 80);

    $timerNumeros
      .height(novoHeight)
      .width(novoHeight)
      .css('line-height', novoHeight + 'px');

    //FONT-SIZE
    var novoFontSize = Math.floor( (painelPercH / 100) * 40);
    $timerNumeros.css('fontSize', novoFontSize + 'px');

    //MARGINS
    var novoMarginMinuto = Math.floor( ( (painelPercW / 100) * 103));
    var novoMarginSegundo = Math.floor( ( (painelPercW / 100) * 23));
    $('#timer_minutos').css('marginLeft', '-' + novoMarginMinuto + 'px');
    $('#timer_segundos').css('marginLeft', novoMarginSegundo + 'px');
  }

}