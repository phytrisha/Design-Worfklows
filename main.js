var itemCounter = 0;

$(document).ready(function() {
	$('.item.add').on('click', function(){
		var currentCounter = itemCounter;
		$('.content').append('<div class="rect" id="item'+itemCounter+'"style="opacity:0;"></div>');
		$('#item' + currentCounter).animate({
			opacity: 1
		}, 100);
		itemCounter++;
		$('.rect').on('mousedown', function(){
			$(this).animate({
				top: '75%',
				left: (110*itemCounter)+'px'
			}, 250);
		});
	});
	
});



