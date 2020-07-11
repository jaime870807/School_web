
		$(function() {
		  $(".eng").hide();
		  $("#btn1").prop("disabled", true);

		  $("#btn1").click(function() {
		    $(".chn").show();
		    $(".eng").hide();
		    $("#container").height('980px');
		    $("#content1").height('650px');
		    $("#content2").height('650px');
		    $("#content3").height('650px');
		    $("#btn1").prop("disabled", true);
		    $("#btn2").removeAttr('disabled');

		  });

		  $("#btn2").click(function() {
		    $(".eng").show();
		    $(".chn").hide();
		    $("#container").height('1200px');
		    $("#content1").height('840px');
		    $("#content2").height('840px');
		    $("#content3").height('840px');
		    $("#btn2").prop("disabled", true);
		    $("#btn1").removeAttr('disabled');
		  });
		});
