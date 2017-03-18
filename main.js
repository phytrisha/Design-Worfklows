var itemCounter = 0;
var buttonStyle = 0;
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
		createButton();
		createButtonStyle();
	})
});

function createButton (style) {
	if (style == null) {
		var currentCounter = itemCounter;
		$('.content').append('<div class="buttonElem buttonStyle'+buttonStyle+'" id="item'+itemCounter+'"></div>');
		$('#item' + itemCounter).html('Label');
		$('#item' + itemCounter).css('border', '2px solid ' + buttonStyleColors[buttonStyle]);
		$('#item' + itemCounter).on('mousedown', function(e) {
			movingElem = true;
			offset.x = e.offsetX;
			offset.y = e.offsetY;
		})
		$('#item' + itemCounter).on('mousemove', function (e) {
			if (movingElem) {
				var currentElemPos = $(this).position();
				var targetPos = {
					top: e.clientY - parseInt($('.topbar').css('height')) - offset.y,
					left: e.clientX - parseInt($('.sidebar').css('width')) - offset.x
				}
				$(this).css('top', targetPos.top + 'px');
				$(this).css('left', targetPos.left + 'px');				
			}
		})
		$('#item' + itemCounter).on('mouseup', function() {
			movingElem = false;
			offset.x = 0;
			offset.y = 0;
		})
		$('#item' + itemCounter).on('mouseleave', function() {
			movingElem = false;
			offset.x = 0;
			offset.y = 0;
		})
		itemCounter++;
	} else {
		var currentCounter = itemCounter;
		$('.content').append('<div class="buttonElem buttonStyle'+style+'" id="item'+itemCounter+'"></div>');
		$('#item' + itemCounter).html('Label');
		$('#item' + itemCounter).css('border', '2px solid ' + buttonStyleColors[style]);
		$('#item' + itemCounter).on('mousedown', function(e) {
			movingElem = true;
			offset.x = e.offsetX;
			offset.y = e.offsetY;
		})
		$('#item' + itemCounter).on('mousemove', function (e) {
			if (movingElem) {
				var currentElemPos = $(this).position();
				var targetPos = {
					top: e.clientY - parseInt($('.topbar').css('height')) - offset.y,
					left: e.clientX - parseInt($('.sidebar').css('width')) - offset.x
				}
				$(this).css('top', targetPos.top + 'px');
				$(this).css('left', targetPos.left + 'px');				
			}
		})
		$('#item' + itemCounter).on('mouseup', function() {
			movingElem = false;
			offset.x = 0;
			offset.y = 0;
		})
		$('#item' + itemCounter).on('mouseleave', function() {
			movingElem = false;
			offset.x = 0;
			offset.y = 0;
		})
		itemCounter++;
	}
}

function createButtonStyle () {
	$('.buttonStyledropdownp').append('<div class="button" id="buttonStyle' + buttonStyle + '"><p>Add Button Style ' + (buttonStyle+1) + '</p></div>');
	$('#buttonStyle' + buttonStyle).on('click', function() {
		createButton(this.id[11]);
	})
	buttonStyle++;
}


