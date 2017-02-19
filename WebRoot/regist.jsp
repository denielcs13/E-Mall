<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=8">
<link href="/E-Mall/css/passport_login.css" type="text/css" rel="stylesheet" />  
<link rel="shortcut icon" href="favicon.ico"> 
<style>
		.regSingle .content{background:url('/E-Mall/images/login_banner20130929_1.jpg') no-repeat;}
.z-hide {
	display:none;
}
.auth-tips {
	position: absolute;
    background-color: #D6EDF4;
    border: 1px solid #9CBFEF;
    padding: 3px;
    width: 100px;
    z-index: 100;
    font: 12px '宋体';
}
.auth-tips .tips-arrow {
	position: absolute;
	background: url('/E-Mall/images/sprite-icons.png') no-repeat 0 -378px;
    height: 5px;
    left: -5px;
    top: 45%;
    width: 5px;
}
.auth-tips b {
	font-weight:bold;
}
</style>
<script type="text/javascript">
  function check(){
  	var pw1 = document.getElementById("J_R_psw").value;
	var pw2 = document.getElementById("J_R_pswa").value;
	var email = document.getElementById("J_R_name").value;
    var username = document.getElementById("userName").value;
    if((email=="")||(username=="")||(pw1=="")||(pw2=="")){
       alert("每个空都要填哦~");
    }else{
		if(pw1==pw2){	
			document.user_reg_form.submit();
		}else{
		   alert("两次输入的密码不一致！");	
		}
	}
  }
  
</script>
<script type="text/javascript">
		var msg="${requestScope.tipMessage}";
		if(msg!=""){
		alert(msg);
		}
	</script>
<title>E-Mall注册</title>
</head>
<body class="regSingle">
<div class="layout">
<div class="header">
		<a href="http://www.vip.com"  id="for-cascade-login-link" title="E-Mall" style="margin-left:400px"><img alt="LV Louis Vuitton 路易威登" src="/E-Mall/images/logo.png" border=0/></a>
		<div class="bannerHeader sprite"></div>
</div>	<div class="content clear">
		<div class="regForm">
			<input type="hidden" name="vipc" value="d6cda754da9f422ea15f21340f29aecb" />
			<div class="regHeaderTip">
				<span class="fl">
				没有账号？请注册
				</span>
				<span class="fr f12">已注册？<a href="index.jsp" class="red hvLine" style="color:#4D8AB3">登录</a></span>
			</div>	
			<form id="user_reg_form" action="registerAction" method="post" autocomplete="off" name="user_reg_form">
			<input type="hidden" name="vipc" value="d6cda754da9f422ea15f21340f29aecb" />
			
			
			<p style="height:5px"></p>
			<p class="inputs">
				<input id="userName" type="text" class="ipt" name="user_name">
				<label for="">用户名</label>
			</p>		
				
			<p style="height:25px"></p>	
			<p class="inputs">
				<input id="J_R_psw" type="password" class="ipt" name="password">
				<label for="">密码</label>
			</p>
			<p  style="height:25px"></p>
			<div class="auth-tips z-hide" for="tips_J_R_psw">
			<div class="tips-arrow"></div>请输入6-20位<b>字母</b>和<b>数字</b>的组合
			</div>
			<p class="inputs">
			 
				<input id="J_R_pswa" type="password" class="ipt" name="password2">
				<label for="">确认密码</label>
			</p>
			<p  style="height:25px"></p>
			
			<p class="inputs">
				<input id="J_R_name" type="text" class="ipt" name="email">
				<label for="">邮箱/手机号</label>
			</p>
			<p style="height:25px"></p>
			<div class="auth-tips z-hide" for="tips_J_R_name">
				<div class="tips-arrow"></div>请输入邮箱或手机号
			</div>
			
			<p class="inputs">
				<input id="J_R_code" type="text" class="ipt iptSmall" name="captcha" maxlength="4">
				<label for="">验证码</label>
				<a class="verifyCode"><img src="/E-Mall/images/getCaptcha.png" width="49" height="35"/></a>
				<a class="changeCode">换一张</a>
			</p>
			<p  style="height:25px"></p>
			<p class="mb30">
				<input type="button" name="btn_submit" value="" onclick="check()" class="btn btnReg"  style=background-image:url(images/button_regist.png) />
			</p>
			<p class="inputs">
				<span class="checkbox" data-for="agree"><i class="checked"></i> 我已阅读并接受<a href="http://support.vipshop.com/clause/"  style="color:#4D8AB3" target="_blank">E-Mall服务条款</a>。</span>
				<input id="J_R_agree" name="agree" type="hidden" value="1" data-type="checkbox"/>
			</p>
			</form>	
		</div>
	</div>    
<div class="footer">
		<div class="copyright">Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
</div></div>
<!-- 只允许引入两个js文件 -->

<script type="text/javascript">
    var staticHost='https://passport.vip.com/static',domainHost='https://passport.vip.com',imageHost='https://passport.vip.com/static',ctx='';
</script>
<script type="text/javascript" src="js/regist/registJS1.js"></script>
<script type="text/javascript" src="js/regist/registJS2.js"></script><script type="text/javascript">
    var errorMsg=[];
</script>
<script type="text/javascript" src="js/regist/registJS3.js"></script>
<!-- SiteCatalyst code version: H.24.1.
Copyright 1996-2011 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com -->
<script src="js/regist/registJS4.js" type="text/javascript"></script>
<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script><noscript><img src="http://vipshop.d2.sc.omtrdc.net/b/ss/vipshop-prd/1/H.24.1--NS/0"
height="1" width="1" border="0" alt="" /></noscript><!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.24.1. -->
<script src="js/regist/registJS5.js"></script>
<noscript><img src="http://mar.vipshop.com/n" height="1" width="1" border="0" alt="" /></noscript>


<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-8505670-3']);
  _gaq.push(['_setDomainName', 'vipshop.com']);
  _gaq.push(['_addOrganic', 'baidu', 'word']);
  _gaq.push(['_addOrganic', 'baidu', 'wd']);
  _gaq.push(['_addOrganic', 'baidu', 'q1']);
  _gaq.push(['_addOrganic', 'opendata.baidu', 'wd']);
  _gaq.push(['_addOrganic', 'm.baidu', 'word']);
  _gaq.push(['_addOrganic', 'wap.baidu', 'word']);
  _gaq.push(['_addOrganic', '360sou', 'q']); 
  _gaq.push(['_addOrganic', '360', 'q']); 
  _gaq.push(['_addOrganic', 'soso', 'w']);
  _gaq.push(['_addOrganic', 'youdao', 'q']);
  _gaq.push(['_addOrganic', 'sogou', 'query']);
  _gaq.push(['_addOrganic', '3721', 'name']);
  _gaq.push(['_addOrganic', 'vent', 'kw']);
  _gaq.push(['_addOrganic', 'ucweb', 'keyword']);
  _gaq.push(['_addOrganic', 'ucweb', 'word']);
  _gaq.push(['_addOrganic', '114so', 'kw']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

<div id="footer" align="center">
	        <p style="height:50px"></p>
			<div>Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
	</div>
</body>
</html>
