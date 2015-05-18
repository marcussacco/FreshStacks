var weekDay = new Date();
var today = weekDay.getDay();
var dayName = $(".weekCell .day p").eq(today).text().toUpperCase();
$(".weekCell").eq(today).addClass("current");
$("#workIt h1:nth-child(2)").text("AN OFF");

$(function () {
  //draggable blocks from your stack
  $(".stackCell").draggable({
    snap: ".weekCell",
    snapMode: "inner",
    snapTolerance: 10,
    revert: true,
    //when dragging starts...
    start: function(){
      $(".weekCell").addClass("current");
    },
    //when dragging stops...
    stop: function(){
      $(".weekCell").removeClass("current");
      $(".weekCell").eq(today).addClass("current");
    }
  });
  
  //droppable day of the week
  $(".weekCell").droppable({
    drop: function (event, ui) {
      $(this).css("background-color" , "#655A45")
             .addClass("dropped")
             .hover(function(){
               $(this).addClass('flip');
             },function(){
               $(this).removeClass('flip');
             });
      
      //pass value of .stackCell to .task
      var str = ui.draggable.text();
      $(".task p",this).text(str);
      var todaysTask = $(".weekCell .task p").eq(today).text();
      
      //Update the BIG text
      if(todaysTask.length < 1){
        $("#workIt h1:nth-child(2)").text("AN OFF");
      }else{
        $("#workIt h1:nth-child(2)").text(todaysTask);
      };
    }
  });
});
