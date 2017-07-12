$(document).ready(function() {  
	
		// var movementStrength = 20;
		// var height = movementStrength / $(window).height();
		// var width = movementStrength / $(window).width();

		// $(".bgContainer2").mousemove(function(e){
  //           var pageX = e.pageX - ($(window).width() / 2);
  //           var pageY = e.pageY - ($(window).height() / 2);
  //           var newvalueX = width * pageX * -1 - 25;
  //           var newvalueY = height * pageY * -1 - 50;
  //           var newvalueX2 = width * pageX * 1 - 1;
  //           var newvalueY2 = height * pageY * 1 - 1;
  //           $('.bgContainer2').css("transform", "translate("+newvalueX+"px , "+newvalueY+"px)");
  //           $('.bgContainer3').css("transform", "translate("+newvalueX2+"px , "+newvalueY2+"px)");
		// });

      var movementStrength = 20;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();

      $(".bgContainer2").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            var newvalueX2 = width * pageX * 1 - 1;
            var newvalueY2 = height * pageY * 1 - 1;
            $('.bgContainer2').css("background-position", newvalueX +"% " + newvalueY +"%");
            $('.bgContainer3').css("background-position", newvalueX2 + "px " + newvalueY2 + "px");
      
      });

});