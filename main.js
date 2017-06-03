$(document).ready(function(){
  var sLow=$("p.session.low");
  var bLow=$("p.break.low");
  var session=parseInt(sLow.text());
  var breaks=parseInt(bLow.text());
  var arr=$("#clock").text().split(':')
  var hour=parseInt(arr[0]);
  var minute=parseInt(arr[1]);
  var clock=$("#clock");


  $(".plus.session").on("click",function(){
    session=session+1
    sLow.text(session);

  });

  $(".minor.session").on("click",function(){
     session=session-1;
     sLow.text(session);
  });

  $(".plus.break").on("click",function(){
    breaks=breaks+1;
    bLow.text(breaks);
  });

  $(".minor.break").on("click",function(){
     breaks=breaks-1;
     bLow.text(breaks);
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

});
