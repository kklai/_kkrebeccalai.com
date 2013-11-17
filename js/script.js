var content = [];
function init() {
  Tabletop.init({ 
  	key: '0ArcRX35HpjojdHIwMmppa0QtY2cyaE1qay1INWJucHc',
  	callback: function(data, tabletop) { 
  		content = data;
  		fillPage();
  	},
  	simpleSheet: true } )
}

// var rowNumber;
// var row;
// function drawRows() {
// 	if (content.length%3 === 0) {
// 		rowNumber = content.length / 3;
// 	} else if (content.length%3 != 0) {
// 		rowNumber = Math.floor(content.length / 3) + 1;
// 	};
// 	for (var i = 0; i < rowNumber.length; i++) {
// 		$('#work').append('<div class="row"></div>');
// 	}
// }

function fillPage() {
	for (var i = 0; i < 3; i++) {
		$('#work .row:first').append('<div class="span4"><a href="' + content[i].link + '" target="_blank"><h2>' + content[i].title + '</h2></a><a href="' + content[i].link + '" target="_blank"><img src="' + content[i].imglink + '"></a><p><span class="pub">' + content[i].pub + '</span>' + content[i].description + '</p></div>');
	}
	for (var i = 3; i < content.length; i++) {
		row = Math.floor(i/3) + 1;
		$('#work .row:nth-child(' + row + ')').append('<div class="span4"><a href="' + content[i].link + '" target="_blank"><h2>' + content[i].title + '</h2></a><a href="' + content[i].link + '" target="_blank"><img src="' + content[i].imglink + '"></a><p><span class="pub">' + content[i].pub + '</span>' + content[i].description + '</p></div>');
	}
	footer();
}

function footer() {
	$('footer').append('<p>&copy; KK Rebecca Lai</p>');
}

$(document).ready(function(){
	init();
})