var btnStyle = 0;

function ButtonElem(id) {
	this.id = id;
	this.name = 'Button';
	this.content = 'Label';
	this.x = 200;
	this.y = 200;
	this.width = 120;
	this.height = 60;
	this.moving = false;
	this.moveInit = false;
	this.obj = this.create(this);
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

	// add label to button
	$('#e' + this.id).html('<input id="label' + this.id + '" value="Label"></input>');
	$('#label' + this.id).attr('disabled', true);

	// define movement of element
	// and update values in object
	$('#e' + this.id).on('mousedown', function(e) {
		this.moveInit = true;
		offset.x = e.offsetX;
		offset.y = e.offsetY;
	})

	$('#e' + this.id).on('mousemove', function(e) {
		if (this.moveInit) {
			this.moving = true;
			var currentElemPos = $(this).position();
			var targetPos = {
				top: e.clientY - parseInt($('.topbar').css('height')) - offset.y,
				left: e.clientX - parseInt($('.sidebar').css('width')) - offset.x
			}
			obj.moveElement($(this), targetPos);
		}
	})

	$('#e' + this.id).on('mouseup', function(e) {
		if (!this.moving) {
			if ($('#label' + this.id[1]).prop('disabled')) {
				$('#label' + this.id[1]).attr('disabled', false);
				$('#label' + this.id[1]).focus();
			} else {
				$('#label' + this.id[1]).attr('disabled', true);
			}
		}
		this.moving = false;
		this.moveInit = false;
		offset.x = 0;
		offset.y = 0;
	})

	$('#e' + this.id).on('mouseleave', function(e) {
		this.moving = false;
		this.moveInit = false;
		offset.x = 0;
		offset.y = 0;
	})

	// trigger selection of item
	// $('#e' + this.id).on('click', function(e) {
	// 	if (!this.moving) {
			
	// 	}
	// })

	return '#e' + this.id;
}

function ButtonStyle(id) {
	this.id = id;
	this.border = '2px solid ' + buttonStyleColors[this.id];
	this.appendToDropdown();
}

ButtonStyle.prototype.appendToDropdown = function() {
	$('.buttonStyleDropdown').append('<div class="button" id="btnStyle'+btnStyle+'"></div>');
	$('#btnStyle' + btnStyle).html('<p>Add Button Style ' + (btnStyle+1) + '</p>');
	$('#btnStyle' + btnStyle).on('click', function() {
		data.elements.push(new ButtonElem(elemCounter));
		data.styles[this.id[8]].apply(data.elements[elemCounter].obj);
		elemCounter++;
	})
	btnStyle++;
}

ButtonStyle.prototype.apply = function(obj) {
	var border = this.border;
	$(obj).css('border', border);
}














