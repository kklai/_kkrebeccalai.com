function fillPage() {
	for (var i = 0; i < 3; i++) {
		$('#fun .row:first').append('<div class="span4"><a href="' + notwork[i].link + '" target="_blank"><h2>' + notwork[i].title + '</h2></a><a href="' + notwork[i].link + '" target="_blank"><img src="' + notwork[i].imglink + '"></a><p>' + notwork[i].description + '</p></div>');
	}
	for (var i = 3; i < notwork.length; i++) {
		row = Math.floor(i/3) + 1;
		$('#fun .row:nth-child(' + row + ')').append('<div class="span4"><a href="' + notwork[i].link + '" target="_blank"><h2>' + notwork[i].title + '</h2></a><a href="' + notwork[i].link + '" target="_blank"><img src="' + notwork[i].imglink + '"></a><p>' + notwork[i].description + '</p></div>');
	}
	footer();
}

function footer() {
	$('footer').append('<p>&copy; KK Rebecca Lai</p>');
}

$(document).ready(function(){
	fillPage();
})