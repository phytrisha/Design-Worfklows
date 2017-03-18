function ButtonElem(id) {
	this.id = id;
	this.name = 'Button';
	this.content = 'Label';
	this.x = 200;
	this.y = 200;
	this.width = 120;
	this.height = 60;
	this.moving = false;
	this.create(this);
}

ButtonElem.prototype.moveElement = function(elem, target) {
	elem.css('top', target.top + 'px');
	elem.css('left', target.left + 'px');
	this.updatePosition(target.left, target.top);
}

ButtonElem.prototype.updatePosition = function(x, y) {
	this.x = x;
	this.y = y;
}

ButtonElem.prototype.create = function(obj) {
	// define local var for this button
	var offset = {
		x: 0,
		y: 0
	}

	// append element to dom
	$('.content').append('<div class="buttonElem" id="e'+this.id+'"></div>');

	// define movement of element
	// and update values in object
	$('#e' + this.id).on('mousedown', function(e) {
		this.moving = true;
		offset.x = e.offsetX;
		offset.y = e.offsetY;
	})
	$('#e' + this.id).on('mousemove', function(e) {
		if (this.moving) {
			var currentElemPos = $(this).position();
			var targetPos = {
				top: e.clientY - parseInt($('.topbar').css('height')) - offset.y,
				left: e.clientX - parseInt($('.sidebar').css('width')) - offset.x
			}
			obj.moveElement($(this), targetPos);
		}
	})
	$('#e' + this.id).on('mouseup mouseleave', function(e) {
		this.moving = false;
		offset.x = 0;
		offset.y = 0;
	})
}

function ButtonStyle(id) {
	this.id = id;
	this.name = 'style' + this.id;
	this.color = '#ff0000';
	this.border = '1px solid #000000';
}