$(document).ready(function () {



	var fixFullHeight = function(){
		var playerWidth = $('iframe').width();
		$('#players iframe').height(playerWidth / 16*9);
		$('#right_sidebar').height($(window).height());
	};
	fixFullHeight();



	$.ajax({
		type: "GET",
		url: "https://goodgame.ru/api/getchannelstatus?id=148836",
		dataType: "xml",
		success: function (xml) {
			$xml = $(xml);
			var streamTitle = $xml.find("title").text();
			var streamGame = $xml.find("games").text();
			var streamViewers = $xml.find("viewers").text()*1+1;
			var streamUsersinchat = $xml.find("usersinchat").text();
			$('#title').text('- ' + streamTitle);
			$('#game').text('Игра: ' + streamGame);
			$('#viewers').text('Зрителей: ' + streamViewers);
		}
	});



	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()){
			$('body').css('background-position', 'center 100%');
		} else {
			$('body').css('background-position', 'center 150%');
		}
	});



	var changePlayer = function(player){
		if(player === undefined){ player = 'goodgame' }
		localStorage.setItem('player', player);
		$('#players iframe').hide();
		$('#player_'+player).show();
		$('#player_goodgame').attr('src', '');
		$('#player_mixer').attr('src', '');
		$('#player_youtube').attr('src', '');
		if(player === 'goodgame'){
			$('#player_goodgame').attr('src', 'https://goodgame.ru/player?148836');
		} else if(player === 'mixer') {
			$('#player_mixer').attr('src', 'https://mixer.com/embed/player/i3aldram');
		} else if(player === 'youtube') {
			$('#player_youtube').attr('src', 'https://youtube.com/embed/live_stream?channel=UCLDNOUXbiutEIGSWy3d1UiQ');
		}
		// fixFullHeight();
	}
	$('.button_changePlayer').click(function() {
		changePlayer($(this).data('player'));
	});
	changePlayer(localStorage.getItem('player'));
	$('#refreshPlayer').click(function() {
		changePlayer(localStorage.getItem('player'));
	});



	var changeChat = function(chat){
		if(chat === ''){ chat = 'twitch' }
		localStorage.setItem('chat', chat);
		$('#right_sidebar iframe').hide();
		$('#chat_'+chat).show();
		// $('#chat_header').show();
		if(chat === 'twitch'){
			$('#chat_header').hide();
		}
		if(chat === 'twitch' && $('#chat_twitch').attr('src') === ''){
			$('#chat_twitch').attr('src', 'https://twitch.tv/embed/psychopaticclaymore/chat?darkpopout');
		} else if(chat === 'goodgame' && $('#chat_goodgame').attr('src') === '') {
			$('#chat_goodgame').attr('src', 'https://goodgame.ru/chat/148836');
		} else if(chat === 'mixer' && $('#chat_mixer').attr('src') === '') {
			$('#chat_mixer').attr('src', 'https://mixer.com/embed/chat/i3aldram');
		} else if(chat === 'youtube' && $('#chat_youtube').attr('src') === '') {
			$('#chat_youtube').attr('src', 'https://youtube.com/live_chat?is_popout=1&v=-1O2IaTCzqA&embed_domain=baldram.ru');
		}
		// fixFullHeight();
	}
	$('.button_changeChat').click(function() {
		changeChat($(this).data('chat'));
	});
	changeChat(localStorage.getItem('chat'));



	// localStorage.removeItem("player");
	// localStorage.removeItem("chat");
	// localStorage.clear();



	window.onload = function () {
		setTimeout(function(){
			$('#player_mixer').attr('src', 'https://mixer.com/embed/player/i3aldram');
			$('#player_youtube').attr('src', 'https://youtube.com/embed/live_stream?channel=UCLDNOUXbiutEIGSWy3d1UiQ');
			$('#chat_goodgame').attr('src', 'https://goodgame.ru/chat/148836');
			$('#chat_mixer').attr('src', 'https://mixer.com/embed/chat/i3aldram');
			$('#chat_youtube').attr('src', 'https://youtube.com/live_chat?is_popout=1&v=-1O2IaTCzqA&embed_domain=baldram.ru');
		}, 1);
	}
});










