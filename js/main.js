var javascriptContent = function() {
	show_none();
	$('#javascript-tab').addClass('selected-tab');
	$('.javascript-content').css('display', 'inline-block');
};

var rubyContent = function() {
//	$('.portfolio-container-content').html('<div class="project"><h2>Chess</h2><img src="images/chess.png"><p>Users can play against each other or against the computer in this command line game of chess.  Chess will let players know when they are in check, and they can only make moves that will put them out of check.  Users are able to save/load their game via YAML. </p><p><a href="https:\/\/github.com/travisvesbach/chess">Click here to view the source code</a></p>Built using:<ul><li>Ruby</li><li>YAML</li></ul></div><div class="project"><h2>Connect Four</h2><img src="images/connect-four.png"><p>Users can play against each other or against the computer in this command line game of connect four. Connect four was built using Test Driven Development with RSpec.  </p><p><br><br><a href="https:\/\/github.com/travisvesbach/connect_four">Click here to view the source code</a></p>Built using:<ul><li>Ruby</li><li>RSpec</li></ul></div><div class="project"><h2>Tic Tac Toe</h2><img src="images/tic-tac-toe.png"><p>Users can play against each other or against the computer in this command line game of tic tac toe.  The computer AI is build to block potential wins and go for the win itself. </p><p><br><br><a href="https:\/\/github.com/travisvesbach/tic_tac_toe">Click here to view the source code</a></p>Built using:<ul><li>Ruby</li></ul></div><div class="project"><h2>Hangman</h2><img src="images/hangman.png"><p>This is classic hangman.  A user has so many chances to guess a word.  The program picks a random word between 5 and 12 letters long from a given word file.  Users are able to access the main menu in order to save/load their game via JSON.</p><p><a href="https:\/\/github.com/travisvesbach/hangman">Click here to view the source code</a></p>Built using:<ul><li>Ruby</li><li>JSON</li></ul></div>');
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