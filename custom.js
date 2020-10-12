var scores = {
	col1 : 0,
	col2 : 0,
	col3 : 0,
	col4 : 0,
	col5 : 0,
	col6 : 0,
	col7 : 0,
	col8 : 0,
	col9 : 0,
	col10 : 0,	
	var1 : {
		var2 : 1,
		var3: 2
	}
}

// JSON

$(document).ready(
	function(){

		$("#col1").click(
			function(){
				console.log("col1");
				scores.col1++;
				$("#p1vote").html("("+scores.col1+")");
			}
		);
		$("#col2").click(
			function(){
				console.log("col2");
				scores.col2++;
				$("#p2vote").html("("+scores.col2+")");
			}
		);
		$("#col3").click(
			function(){
				console.log("col3");
				scores.col3++;
				$("#p3vote").html("("+scores.col3+")");
			}
		);
		$("#col4").click(
			function(){
				console.log("col4");
				scores.col4++;
				$("#p4vote").html("("+scores.col4+")");
			}
		);
		$("#col5").click(
			function(){
				console.log("col5");
				scores.col5++;
				$("#p5vote").html("("+scores.col5+")");
			}
		);
		$("#col6").click(
			function(){
				console.log("col6");
				scores.col6++;
				$("#p6vote").html("("+scores.col6+")");
			}
		);
		$("#col7").click(
			function(){
				console.log("col7");
				scores.col7++;
				$("#p7vote").html("("+scores.col7+")");
			}
		);
		$("#col8").click(
			function(){
				console.log("col8");
				scores.col8++;
				$("#p8vote").html("("+scores.col8+")");
			}
		);
		$("#col9").click(
			function(){
				console.log("col9");
				scores.col9++;
				$("#p9vote").html("("+scores.col9+")");
			}
		);
		$("#col10").click(
			function(){
				console.log("col10");
				scores.col10++;
				$("#p10vote").html("("+scores.col10+")");
			}
		);

	}
);