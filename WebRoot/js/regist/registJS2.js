var VIPSHOP = {};
VIPSHOP.cookie = {
	set : function(name, value, domain, path, hour) {
		var expire = new Date;
		if (hour) {
			var today = new Date;
			
			expire.setTime(today.getTime() + 36E5 * hour);
		}
		document.cookie = name + "=" + encodeURIComponent(escape(value)) + "; "
				+ (hour ? "expires=" + expire.toGMTString() + "; " : "")
				+ (path ? "path=" + path + "; " : "path=/; ")
				+ (domain ? "domain=" + domain + ";" : "");
		return true;
	},
	get : function(name) {
		var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
		var m = document.cookie.match(r);
		return unescape(decodeURIComponent(!m ? "" : m[1]));
	},
	del : function(name, domain, path) {
		document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "
				+ (path ? "path=" + path + "; " : "path=/; ")
				+ (domain ? "domain=" + domain + ";" : "");
	}
};


function checkEmail(strEmail) {
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	return emailReg.test(strEmail);
}
function checkPhone(strPhone) {
	var phoneReg = /^[1][3,4,5,8][0-9]{9}$/;
	return phoneReg.test(strPhone);
}
function checkQQ(strQQ) {
	var QQReg = /^[0-9a-zA-Z@\.\-_]+$/;
	return QQReg.test(strQQ);
}

function checkRegisterUserName(name){
	var result = new Object();
	result.result = true;
	if (!name) {
		result.result = false;
		result.tips = "璇疯緭鍏ョ櫥褰曞悕";
		return result;
	}
	if (!checkEmail(name) && !checkPhone(name)) {
		result.result = false;
		result.tips = "璇疯緭鍏ユ纭殑鎵嬫満鍙锋垨閭";
		return result;
	}
	$.ajax({
		type:'POST',
		url:ctx+'/register/ajaxCheckRegisterUserName', 
		data:{"loginName":name,"anticache":new Date().getTime()},
		async:false,
		success:function(data) {
			if(typeof(data.result)!='undefined' && data.result == 'haslogin'){
				redirect2Src();
				return;
			}
			if (data == 0) {
				result.result = true;
			}else if(data ==1){
				result.result = false;
				result.tips = "璇ョ敤鎴峰悕宸插瓨鍦�";
			}else{
				result.result = false;
				result.tips = "楠岃瘉澶辫触锛岃閲嶈瘯";
			}
	}});
	return result;
}

function checkCaptcha(captcha,vipc){
	
	var result = new Object();
	result.result = true;
	if(!captcha || !vipc){
		result.result = false;
		result.tips = "璇疯緭鍏ラ獙璇佺爜";
		return result;
	}
	$.ajax({
		url:ctx+'/captcha/ajaxCheckCaptcha', 
		data:{'captcha':captcha,'vipc':vipc,"anticache":new Date().getTime()},
		async:false,
		success:function(data) {
			if(typeof(data.result)!='undefined' && data.result == 'haslogin'){
				redirect2Src();
				return;
			}
			if (!data.result) {
				result.result = false;
				result.tips = "楠岃瘉鐮佹湁璇�";
				if(20203 == data.errorCode){
					result.tips = "楠岃瘉鐮佸凡杩囨湡";
				}
			}
	}});
	return result;
}

function checkPassword(psw){
	var result = new Object();
	result.result = true;
	if(!psw){
		result.result = false;
		result.tips = "璇疯緭鍏ュ瘑鐮�";
		return result;
	}
	if (psw.length < 6 || psw.length > 20) {
		result.result = false;
		result.tips = "璇疯緭鍏�6-20浣嶅瓧姣嶅拰鏁板瓧鐨勭粍鍚�";
		return result;
	}
	//鍏ㄦ暟瀛�
	if(/^[0-9]{6,20}$/.exec(psw)){
		result.result = false;
		result.tips = "璇蜂娇鐢ㄥ瓧姣嶅拰鏁板瓧缁勫悎";
		return result;
	}
	//鍏ㄥ瓧姣�
	if(/^[a-zA-Z]{6,20}$/.exec(psw)){
		result.result = false;
		result.tips = "璇蜂娇鐢ㄥ瓧姣嶅拰鏁板瓧缁勫悎";
		return result;
	}
	//闈炲瓧姣嶆垨鑰呮暟瀛�
	if (!/^[a-zA-Z0-9]{6,20}$/.exec(psw)) {
		result.result = false;
		result.tips = "璇蜂娇鐢ㄥ瓧姣嶅拰鏁板瓧缁勫悎";
		return result;
	}
	
	return result;
}

function callb2c(signedApiUrl){
	
	$.ajax({
		url: signedApiUrl+"&callback=?", 
		cache:false,
		crossDomain:true,
		dataType: "jsonp",
		success: function(result) {
			if(result.status==1){
				redirect2Src();
				return;
			}
			alert('璇锋眰澶辫触锛岃鍒锋柊椤甸潰閲嶈瘯 ');
		},
		error:function(jqXHR, textStatus, errorThrown){
			redirect2Src();
			return;
		}
	});
}

function redirect2Src(){
	var redirectURLObj = $("#redirectURL");
	
	var src = redirectURLObj.length > 0 ?  (redirectURLObj.val() ? redirectURLObj.val() : VIPSHOP.cookie.get("vipshop_passport_src")) : VIPSHOP.cookie.get("vipshop_passport_src");
	window.location= src;
}

var ajaxSending = 0;
function sendAjax(url,data,successcallback,async,errorcallback){
	if(arguments.length <1){
		alert('url is needed');
	}
	if(url.indexOf('?') != -1){
		url = url +'&callback=?';
	}else{
		url = url +'?callback=?';
	}
	if(!data){
		data = {};
	}
	if(!async){
		async = true;
	}
	
	if(ajaxSending>0){
		return;
	}
	
	ajaxSending ++;
	$.ajax({
		type :'POST',
		url : url,
		data :data,
		async:async,
		success:function(result){
			ajaxSending = 0;
			if(typeof(data.result)!='undefined' && data.result == 'haslogin'){
				redirect2Src();
				return;
			}
			if(!successcallback){
				eval(successcallback+'(result)');
				return;
			}
		},
		error:function(jqXHR, textStatus, errorThrown){
			if(!errorcallback){
				eval(errorcallback);
				return;
			}
		}
	});
}

(function() {
	  // Private array of chars to use
	  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	 
	  Math.uuid = function (len, radix) {
	    var chars = CHARS, uuid = [], i;
	    radix = radix || chars.length;
	 
	    if (len) {
	      // Compact form
	      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
	    } else {
	      // rfc4122, version 4 form
	      var r;
	 
	      // rfc4122 requires these characters
	      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '';
	      uuid[14] = '4';
	 
	      // Fill in random data.  At i==19 set the high bits of clock sequence as
	      // per rfc4122, sec. 4.1.5
	      for (i = 0; i < 36; i++) {
	        if (!uuid[i]) {
	          r = 0 | Math.random()*16;
	          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
	        }
	      }
	    }
	 
	    return uuid.join('');
	  };
	 
	  // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
	  // by minimizing calls to random()
	  Math.uuidFast = function() {
	    var chars = CHARS, uuid = new Array(36), rnd=0, r;
	    for (var i = 0; i < 36; i++) {
	      if (i==8 || i==13 ||  i==18 || i==23) {
	        uuid[i] = '-';
	      } else if (i==14) {
	        uuid[i] = '4';
	      } else {
	        if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
	        r = rnd & 0xf;
	        rnd = rnd >> 4;
	        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
	      }
	    }
	    return uuid.join('');
	  };
	 
	  // A more compact, but less performant, RFC4122v4 solution:
	  Math.uuidCompact = function() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	      return v.toString(16);
	    });
	  };
	})();
;(function($){
	// btn loading
	// eg: 	
	// 杩涘叆btn loading鐘舵€侊細$(".btnReg").btnLoading("on");
	// 閫€鍑篵tn loading鐘舵€侊細$(".btnReg").btnLoading("off");
	$.fn.btnLoading = function( flag ){
		var $body = $("body"),
			$this = $(this),
			$loading = $("<div class='btnLoading'></div>");
		if( flag == "on"){
			if ($body.find(".btnLoading").length) {
				$body.find(".btnLoading").remove();
				$body.find("[data-act='btnLoading']").removeClass("on").removeAttr("data-act");
			};
			$loading.appendTo("body").css({
				"top":$this.offset().top + 'px',
				"left":$this.offset().left + 'px'
			});
			$this.addClass("on").attr("data-act","btnLoading");
		}else{
			$body.find(".btnLoading").remove();
			$body.find("[data-act='btnLoading']").removeClass("on").removeAttr("data-act");
		}
	};
	//input 閿欒鎻愮ず
	$.fn.errorMsg = function(msg){
		var $this = $(this),
			interval,
			isRed = 0,
			toggle = function(ele){
				if(isRed % 2 !== 0){
					ele.removeClass('error');
				}else{
					ele.addClass('error');
				}
				if(isRed === 4){
					clearInterval(interval);
				}
			};
		//$this.next('label').addClass("hide");
		if( $this.closest("p.inputs").length ){
			var $parent = $this.closest("p.inputs");
			if ($parent.next("p.labels").length) {
				var $label = $parent.next("p.labels");
				interval = setInterval(function(){
					if(isRed === 0){
						$label.html("<span class='dred'>" + msg + "</span>");
					}
					toggle($this);
					isRed++;
				},100);
			};
		}
	};
	//input 涓€鑸彁绀�
	$.fn.tipMsg = function(msg){
		var $this = $(this),
			interval,tips,
			isRed = 0,
			toggle = function(ele){
				if(isRed % 2 !== 0){
					ele.removeClass('error');
				}else{
					ele.addClass('error');
				}
				if(isRed === 4){
					clearInterval(interval);
				}
			};
		//$this.next('label').addClass("hide");
		if( $this.closest("p.inputs").length ){
			var $parent = $this.closest("p.inputs");
			if ($parent.next("p.labels").length) {
				var $label = $parent.next("p.labels");
				interval = setInterval(function(){
//					if(isRed === 0){
//						$label.text(msg);
//					}
					toggle($this);
					isRed++;
				},100);
			};
		}
		$('.auth-tips').addClass('z-hide');
		tips = $('[for="tips_' + $this.attr("id") + '"]');
		if(tips.length > 0){
			tips.removeClass('z-hide').css({
				'top' : $this.offset().top + 'px',
				'left' : $this.offset().left + 280 + 'px'
			});
		}
	};
	//input 楠岃瘉姝ｇ‘
	$.fn.verified = function(){
		var $this = $(this);
		//$this.next('label').addClass("hide");
		$this.addClass("verified").removeClass("error");
		if( $this.closest("p.inputs").length ){
			var $parent = $this.closest("p.inputs");
			if ($parent.next("p.labels").length) {
				var $label = $parent.next("p.labels");
				$label.text("");
			};
		}
	};
	//input 鐘舵€侀噸缃�
	$.fn.iptReset = function(msg){
		var $this = $(this);
		$this.removeClass("verified").removeClass("error");
		if( $this.closest("p.inputs").length ){
			var $parent = $this.closest("p.inputs");
			if ($parent.next("p.labels").length) {
				var $label = $parent.next("p.labels");
				$label.text("");
			};
		}
	};
})(jQuery);

function changeCode(type) {
	var img_id;
	var vipc;
	if (type) {
		img_id = "verify_image1";
		vipc = $("#user_reg_form").find(':input[name="vipc"]').val();
	} else {
		img_id="verify_image";
		vipc = $("#J_L_vipc").val();
	}
	
	$("#"+img_id).attr('src',ctx+'/captcha/getCaptcha?vipc='+vipc+'&v=' + new Date().getTime());
	$("#"+img_id).onload=function(){$("#"+img_id).attr('src',staticHost+'/images/reg_loading.gif');};
	$("#"+img_id).error=function(){$("#"+img_id).attr('src',staticHost+'/images/reg_loading.gif');};
	
	
}

function check_reg_name($input) {
	$input.iptReset();
	var check_result = checkRegisterUserName($input.val());
	if(!check_result.result){
		$input.errorMsg(check_result.tips);
	}else{
		$input.verified();
	}
	return check_result.result;
}

function check_reg_gender($input) {
	if(!$input.val()){
		$input.errorMsg('璇烽€夋嫨鎬у埆');
		return false;
	}
	return true;
}

function check_reg_pwd($input,type){
	$input.iptReset();
	if(1 == type){
		var pwd = $("#J_R_psw").val();
		if($input.val() != pwd){
			$input.errorMsg('涓ゆ杈撳叆鐨勫瘑鐮佷笉涓€鑷�');
			return false;
		}
		$input.verified();
		return true;
	}
	var check_result = checkPassword($input.val());
	if(!check_result.result){
		$input.errorMsg(check_result.tips);
	}else{
		$input.verified();
	}
	return check_result.result;
}

function check_captcha($captcha,$vipc,type){
	$captcha.iptReset();
	if(!$captcha.val() || !$vipc.val()){
		$captcha.errorMsg('璇疯緭鍏ラ獙璇佺爜');
		return false;
	}
	var check_result = checkCaptcha($captcha.val(),$vipc.val());
	if(!check_result.result){
		$captcha.errorMsg(check_result.tips);
		changeCode(type);
		$captcha.val();
	}else{
		$captcha.verified();
	}
	return check_result.result;
}

function check_agreed($input){
	if("1" != $input.val()){
		$input.errorMsg('鎺ュ彈鏈嶅姟鏉℃鎵嶈兘娉ㄥ唽');
		return false;
	}
	return true;
}

function show_error(errorMsg) {
	if (!errorMsg) {
		return false;
	}
	if (!errorMsg['type']) {
		return false;
	}
	var errorStatus = errorMsg['status'];
	var loginError;
	if (errorMsg['type'] == 1) {
		loginError = {
			0 : [ 'J_L_code', 2, '楠岃瘉鐮佹湁璇�' ],
			1 : [ 'J_L_name', 0, '鐧诲綍鍚嶅拰瀵嗙爜涓嶈兘涓虹┖' ],
			2 : [ 'J_L_name', 0, '鐧诲綍鍚嶆湁璇�' ],
			3 : [
					'J_L_name',
					0,
					'璇ョ櫥褰曞悕涓嶅瓨鍦�<a href="'+ctx+'/register" class="wrong_link" title="鍏嶈垂娉ㄥ唽">鍏嶈垂娉ㄥ唽</a>?' ],
			4 : [
					'J_L_psw',
					1,
					'鐧诲綍鍚嶆垨瀵嗙爜鏈夎<a href="http://www.vipshop.com/account/password.php" class="wrong_link" title="鎵惧洖瀵嗙爜">鎵惧洖瀵嗙爜</a>?' ],
			5 : [ 'J_L_name', 0, 'union false' ],
			6 : [ 'J_L_name', 0, '鎮ㄧ殑璐︽埛鍙兘瀛樺湪寮傚父锛屾湰娆＄櫥褰曞け璐ャ€傚鏈夐渶瑕侊紝璇疯仈绯诲鏈嶏細400-6789-888' ]
		};
		if (errorStatus == 6) {
			alert(loginError[errorStatus][2]);
			return true;
		}
		if (errorStatus == 1 || errorStatus == 3 || errorStatus == 4) {
			len = 1;
		}
	} else {
		loginError = {
			0 : [ 'J_R_code', 2, '楠岃瘉鐮佹湁璇�' ],
			1 : [ 'saveagree', 3, '鎺ュ彈鏈嶅姟鏉℃鎵嶈兘娉ㄥ唽' ],
			2 : [ 'J_R_name', 0, '鐧诲綍鍚嶄笉鑳戒负绌�' ],
			3 : [ 'J_R_name', 0, '璇疯緭鍏ユ纭殑鎵嬫満鍙锋垨閭' ],
			4 : [ 'gender', 4, '璇烽€夋嫨鎬у埆' ],
			5 : [ 'J_R_psw', 1, '瀵嗙爜涓嶈兘涓虹┖' ],
			6 : [ 'J_R_psw', 1, '瀵嗙爜鏈夎' ],
			7 : [ 'J_R_psw', 1, '涓嶈兘鍏ㄤ负鏁板瓧锛岃浣跨敤瀛楁瘝鍜屾暟瀛楃粍鍚�' ],
			8 : [ 'J_R_psw', 1, '涓嶈兘鍏ㄤ负瀛楁瘝锛岃浣跨敤瀛楁瘝鍜屾暟瀛楃粍鍚�' ],
			9 : [ 'J_R_name', 0, '鐧诲綍鍚嶅凡瀛樺湪' ],
			10 : [ 'J_R_name', 0, '璇锋眰澶辫触锛岃鍒锋柊椤甸潰閲嶈瘯' ],
			11 : [ 'J_R_name', 0, '宸茶秴杩囨敞鍐岄檺鍒讹紝璇风◢绛夌墖鍒�' ]
		};
		if (errorStatus == 1 || errorStatus == 3 || errorStatus == 8) {
			len = 1;
		}
	}
	if (!loginError[errorStatus])
		return false;
	$input = jQuery("#" + loginError[errorStatus][0]);
	$input.errorMsg(loginError[errorStatus][2]);
	return true;
}

function check_login_name($input){
	$input.iptReset();
	if(!$input.val()){
		$input.errorMsg('璇疯緭鍏ョ櫥褰曞悕');
		return false;
	}
	if (!checkQQ($input.val())) {
		$input.errorMsg('鐧诲綍鍚嶆湁璇�');
		return false;
	}
	return true;
}

function check_login_pwd($input){
	$input.iptReset();
	if(!$input.val()){
		$input.errorMsg('璇疯緭鍏ュ瘑鐮�');
		return false;
	}
	return true;
}
function ajaxCheckLoginNeedCaptcha(loginName){
	var checkLoginName = loginName;
	if(!loginName){
		checkLoginName = VIPSHOP.cookie.get("login_username");
	}
	if(!checkLoginName){
		checkLoginName = "";
	}
	$.ajax({
		url:ctx+'/login/ajaxCheckNeedCaptcha', 
		data:{"loginName":checkLoginName,"anticache":new Date().getTime()},
		async:true,
		success:function(data) {
			if(typeof(data.result)!='undefined' && data.result == 'haslogin'){
				redirect2Src();
				return;
			}
			if (data == 1) {
				var $vipc = $("#J_L_vipc");
				if(!$vipc.val()){
					vipc = Math.uuid(32);
					$vipc.val(vipc);
				}
				changeCode(0);
				$(".captcha").removeClass('hide');
				$("#login_code_li").attr('nocheck','false');
				return;
			}
			$("#login_code_li").attr('nocheck','true');
	}});
}