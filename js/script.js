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
	// init();
	fillPage();
})