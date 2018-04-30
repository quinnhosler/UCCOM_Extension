// this is the code which will be injected into a given page...

(function() {
		
	function editSettings() {
		
		var video = $('video');	
		var settings = $('div.jw-icon-settings');
		if (settings.length == 0)
			setTimeout(editSettings, 500)
		 
		settings.find('svg').remove()
		var rate = parseInt(video[0].playbackRate*10)/10.
		settings.text(rate+"x")

		if (video.html().length != 0)
			video = $('video')
		video[0].onratechange = function () {rateChange()};
	}
	$(document).ready(editSettings())


	$(document).on('keydown', function (e) {
		
		var video = $('video');	
			
		var button = e.which;
		if (button == 75 || button == 32) {					// 'k' or space(32)
			if (button == 32 && ( document.activeElement.classList.contains('jwplayer') || document.activeElement.classList.contains('jw-icon-playback') ) )
				console.log()
			else if (video[0].paused)
				video[0].play() 
			else 
				video[0].pause()
		}
		else if (button == 74 || button == 37) {			// 'j' or left arrow
			video[0].currentTime -= 10;
			for (var i = 1; i < video.length; i++) {
				video[i].currentTime = video[0].currentTime;
			}
		}
		else if (button == 190 || button == 38) {			// Shift+> or up arrow
			video[0].playbackRate += 0.1;
			for (var i = 1; i < video.length; i++) {
				video[i].playbackRate = video[0].playbackRate;
			}
		}
		else if (button == 188 || button == 40)	 {			// Shift+< or down arrow
			video[0].playbackRate -= 0.1;
			for (var i = 1; i < video.length; i++) {
				video[i].playbackRate = video[0].playbackRate;
			}
		}
		else if (button == 39) {
			video[0].currentTime += 10;
			for (var i = 1; i < video.length; i++) {
				video[i].currentTime = video[0].currentTime;
			}
		}
		else if (button == 70) {							// 'f'
			if (document.fullscreenElement) {
//				document.webkitExitFullscreen();
//				document.mozCancelFullScreen();
//				document.msExitFullscreen();
//				document.exitFullscreen();
				$('svg.jw-svg-icon-fullscreen-on').click()
			} else {
				var div = $('div#azuremediaplayer')[0]
				div.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				div.mozRequestFullScreen();
				div.msRequestFullscreen();
				div.requestFullscreen(); // standard
			}f
		}
		else if (button == 77) {							// 'm'
			video[0].mute = !video[0].mute;
		}
		
		if ([32, 37, 38, 39, 40].includes(button))
			e.preventDefault();
		e.stopImmediatePropagation();
	});
	
	function pad(number) {
		number = parseInt(number);
		if (number < 10)
			return "0"+number;
		return number+"";
	}
	
	function rateChange() {
		var video = $('video');	
		var settings = $('div.jw-icon-settings');
		var rate = parseInt(video[0].playbackRate*10)/10.
		settings.text(rate+"x")
	}
})();

