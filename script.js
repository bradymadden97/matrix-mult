function creatematrix(arow, acol, brow, bcol){
	$(".amatrix").append("<table>");
	for(var i = 0; i < arow; i++){
		$(".amatrix table").append("<tr>");
		for(var j = 0; j < acol; j++){
			if(i == 0 && j == 0){
				$(".amatrix table").children().last().append("<td rowspan='"+arow+"'><span id='amatrixspan' style='font-size:36px'>[A]=</span></td>");
			}
			$(".amatrix table").children().last().append("<td class='m'><input class='mat' type='number' id='a"+i+"-"+j+"' /></td>");
		}
	}
	$(".bmatrix").append("<table>");
	for(var i = 0; i < brow; i++){
		$(".bmatrix table").append("<tr>");
		for(var j = 0; j < bcol; j++){
			if(i == 0 && j == 0){
				$(".bmatrix table").children().last().append("<td rowspan='"+brow+"'><span id='bmatrixspan' style='font-size:36px'>[B]=</span></td>");
			}
			$(".bmatrix table").children().last().append("<td class='m'><input class='mat' type='number' id='b"+i+"-"+j+"' /></td>");
		}
	}
	$("#setup").css('display','none');
	$("#aandb").css('display','block');
	$("#a0-0").focus();
}

function computematrix(arow, acol, brow, bcol){
	var matrix = [];
	for(var i = 0; i < arow; i++){
		var inner = [];
		matrix.push(inner);
	}
	for(var h = 0; h < arow; h++){
		for(var j = 0; j < bcol; j++){
			var sum = 0;
			for(var k = 0; k < acol; k++){
				sum += $("#a"+h+"-"+k).val() * $("#b"+k+"-"+j).val()
			}
			matrix[h][j] = sum;
		}
	}
	printmatrix(matrix);	
}

function printmatrix(matrix){
	var r = matrix.length;
	var c = matrix[0].length;
	$(".cmatrix").append("<table align='center'>");
	for(var i = 0; i < r; i++){
		$(".cmatrix table").append("<tr>");
		for(var j = 0; j < c; j++){
			if(i == 0 && j == 0){
				$(".cmatrix table").children().last().append("<td rowspan='"+r+"'><span id='cmatrixspan' style='font-size:36px'>[C]=</span></td>");
			}
			$(".cmatrix table").children().last().append("<td class='m'><span style='font-size:20px'>"+matrix[i][j]+"</span></td>");
		}
	}
	$("#ansc").css("display","block");
}