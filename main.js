var elemCounter = 0;
var styleCounter = 0;
var movingElem = false;
var offset = {
	x: 0,
	y: 0
};

$(document).ready(function() {
	// scale window elements
	$('.contentView').css('height', window.innerHeight - 40 + 'px');
	var contentWidth = window.innerWidth - 200;
	$('.content').css('width', contentWidth + 'px');

	// add button functionality
	$('#addButtonStyle').on('click', function() {
		data.styles.push(new ButtonStyle(styleCounter));
		data.elements.push(new ButtonElem(elemCounter));
		
		data.styles[styleCounter].apply(data.elements[elemCounter].obj);

		styleCounter++;
		elemCounter++;
	})
});



