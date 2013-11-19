var content = [];
function init() {
  Tabletop.init({ 
  	key: '0ArcRX35HpjojdGlZRlBibkRsZ2lFTGVzNXJmOGFwdlE',
  	callback: function(data, tabletop) { 
  		content = data;
  		fillPage();
  	},
  	simpleSheet: true } )
}

function fillPage() {
	for (var i = 0; i < 3; i++) {
		$('#fun .row:first').append('<div class="span4"><a href="' + content[i].link + '" target="_blank"><h2>' + content[i].title + '</h2></a><a href="' + content[i].link + '" target="_blank"><img src="' + content[i].imglink + '"></a><p>' + content[i].description + '</p></div>');
	}
	for (var i = 3; i < content.length; i++) {
		row = Math.floor(i/3) + 1;
		$('#fun .row:nth-child(' + row + ')').append('<div class="span4"><a href="' + content[i].link + '" target="_blank"><h2>' + content[i].title + '</h2></a><a href="' + content[i].link + '" target="_blank"><img src="' + content[i].imglink + '"></a><p>' + conte	nt[i].description + '</p></div>');
	}
	footer();
}

function footer() {
	$('footer').append('<p>&copy; KK Rebecca Lai</p>');
}

$(document).ready(function(){
	init();
})