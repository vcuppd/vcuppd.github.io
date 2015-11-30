//Change font sizes on the site//

$(function(){
	//this function will change the size of the text.
	//you have to call it like this, changeSize("sm") or changeSize("m")
	function changeSize(size){
		switch(size){
			case "s":
				console.log("changing to small size");
				var fontSize = "10px";		
			break;
			case "m":
				console.log("changing to medium size");
				var fontSize = "14px";
			break;
			case "l":
				console.log("changing to large size");
				var fontSize = "18px";
			break;
		}

		//change the body
		$(document.body).css({"font-size": fontSize });

		//change .btn styles
		$('.btn').css({"font-size": fontSize});

		
	}


	$('.tsize').on("click", function(evt){
		evt.preventDefault();
		var size = $(this).html().toLowerCase();
		changeSize(size);
	});
});
