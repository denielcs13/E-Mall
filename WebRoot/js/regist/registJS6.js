;(function(){
	window.Over = {
		'html' : function(){
			var body = $('body'), 
			txt = '<div class="over-cover" style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background:#000;z-index:10000;"></div>';
			txt += '<div class="over-wrapper" style="position:absolute;left:40%;top:30%;width:450px;height:357px;z-index:10001;">';
			txt += '<div class="over-opacity" style="position:absolute;left:0;top:0;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background:#FFF;"></div>';
			txt += '<div class="over-main" style="position:absolute;width:440px;height:347px;background:#FFF;margin:5px;">';
			txt += '<a href="javascript:;" class="over-closer" style="position:absolute;right:10px;top:10px;overflow:hidden;width:14px;height:14px;padding:0;background:url(../static/images/closer.jpg) no-repeat 0 0;display:block;"></a>';
			txt += '<div class="over-main-img" style="width:380px;height:213px;margin:35px auto;">';
			txt += '<img src="/static/images/over-tianya.gif" width="380" height="213" style="*margin-top:40px;" />';
			txt += '</div>';
			txt += '<a href="https://passport.vip.com/register" class="over-button" style="display:block;width:121px;height:32px;margin:0 auto;">';
			txt += '<img src="/static/images/over-button.gif" width="121" height="32" style="border:0;" />';
			txt += '</a>';
			txt += '</div>';
			txt += '</div>';

			body.append(txt);
			$('.over-cover').css({
				'width' : body.width() + 'px',
				'height' : $(window).height() + 'px'
			});
			$('.over-wrapper').css({
				'left' : body.width()/2 - 225 + 'px'
			});
			
			$('.over-closer').click(function(){
				$('.over-cover,.over-wrapper').hide();
			}).mouseover(function(){
				$(this).css('background','url(../static/images/closer.jpg) no-repeat 0 -14px');
			}).mouseout(function(){
				$(this).css('background','url(../static/images/closer.jpg) no-repeat 0 0');
			});
		},
		'tianya' : function(){
			$('.j-tianya-link').click(function(){
				Over.html();
			});
		}
	};
	Over.tianya();
})();