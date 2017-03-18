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
		// createButtonStyle();
		data.styles.push(new ButtonStyle(styleCounter));
		data.elements.push(new ButtonElem(elemCounter));
		styleCounter++;
		elemCounter++;
		console.log(data);
	})
});

function createButtonStyle () {
	$('.buttonStyledropdownp').append('<div class="button" id="buttonStyle' + buttonStyle + '"><p>Add Button Style ' + (buttonStyle+1) + '</p></div>');
	$('#buttonStyle' + buttonStyle).on('click', function() {
		createButton(this.id[11]);
	})
	buttonStyle++;
}



