var javascriptContent = function() {
	show_none();
	$('#javascript-tab').addClass('selected-tab');
	$('.javascript-content').css('display', 'inline-block');
};

var rubyContent = function() {
	show_none();
	$('#ruby-tab').addClass('selected-tab');
	$('.ruby-content').css('display', 'inline-block');

};

var railsContent = function() {
	show_none();
	$('#rails-tab').addClass('selected-tab');
	$('.rails-content').css('display', 'inline-block');
};

function show_none(){
	$('#javascript-tab').removeClass('selected-tab');
	$('#ruby-tab').removeClass('selected-tab');
	$('#rails-tab').removeClass('selected-tab');
	$('.rails-content').css('display', 'none');
	$('.ruby-content').css('display', 'none');
	$('.javascript-content').css('display', 'none');
}

$(document).ready(function(){
	railsContent();
	$('#javascript-tab').on('click', javascriptContent);
	$('#ruby-tab').on('click', rubyContent);
	$('#rails-tab').on('click', railsContent);

});