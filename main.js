$(document).ready(function(){
  var sLow=$("p.session.low");
  var bLow=$("p.break.low");
  $session=parseInt(sLow.text());
  $breaks=parseInt(bLow.text());
  $arr=$("#clock").text().split(':');
  $minute=parseInt($arr[0]);
  $second=parseInt($arr[1]);
  var clock=$("#clock");
  $tickTuck=false;
  $totalTime=($minute *60)+$second;


  $(".plus.session").on("click",function(){
    if ($tickTuck==false) {
        $session++;
        sLow.text($session);
        $minute=$session;
        clockFace($minute, 0);
    }
  });

  $(".minor.session").on("click",function(){
    if ($tickTuck==false) {
      if ($session > 1){
           $session--;
           sLow.text($session);
           $minute=$session;
           clockFace($minute, 0);}
   }
  });

  $(".plus.break").on("click",function(){
    if ($tickTuck==false) {
    $breaks++;
    bLow.text($breaks);
    }
  });

  $(".minor.break").on("click",function(){
    if ($tickTuck==false) {
      if ($breaks >1){
        $breaks--;
        bLow.text($breaks);
      }
     }
  });

  $(".manu").mousedown(function(){
    $(this).addClass('push');
    $(this).animate({
      left:'2.5px',
      top:'2.5px'},100);
  });

  $(".manu").mouseup(function(){
    $(this).removeClass('push');
    $(this).animate({
      left:'0',
      top:'0'},100);
  });

  $('.reset').on('click',function(){
    clockFace(25,0);
    sLow.text(25);
    bLow.text(5);
    $('#clock').css('color','white');
    $('#big').text('Session');
  });

  $('.start').on('click',function(){
    $tickTuck=true;
    $arr=$("#clock").text().split(':');
    $minute=parseInt($arr[0]);
    $second=parseInt($arr[1]);
    $intervalId=setInterval(startClock, 1000);




    $('.pause').on('click',function(){
      clearInterval($intervalId);
    });

    $('.stop').on("click",function(){
      clearInterval($intervalId);
      clockFace($session, 0);
      $tickTuck=false;
      $('#clock').css('color','white');
      $('#big').text('Session');
    });

    $('.reset').on('click',function(){
      clearInterval($intervalId);
      clockFace(25,0);
      $minute=25;
      $tickTuck=false;
    });

    $('.pause').on('click',function(){
      clearInterval($intervalId);
    });

  });

  function clockFace (minute, second){
     if (second<10){ second='0' + second}
     else {second=second }
     time=minute + ':' + second;
     $("#clock").text(time);
  };

  function startClock (){
      if ($totalTime==0 && $('#big').text()=='Session'){
        $('#big').text('Break');
        $totalTime=$breaks *60;
        clockFace($breaks, 0);
        $minute=$breaks;
      }
       else if ($totalTime==0 && $('#big').text()=='Break') {
         $('#big').text('Session');
         $totalTime=$Session *60;
         clockFace($Session, 0);
         $minute=$Session;
       }
      else { timePass();
        if ( $totalTime >10){
          $('#clock').css('color','green');
        }
        if ($totalTime <=10){
          $('#clock').css('color','red');
        }
       }
  }

  function timePass(){
    $totalTime=($minute *60)+$second;
    $totalTime=$totalTime-1;
    $minute=parseInt($totalTime /60);
    $second=$totalTime %60;
    clockFace($minute, $second);
    return $totalTime;
  }

});
