<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE HTML >
<html>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
  <meta charset="UTF-8">
  <meta name="description" content="">
  <meta name="keywords" content="">

  <title>Login</title>

  <link rel="shortcut icon" href="favicon.ico">
  <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/grid.css" media="screen" rel="stylesheet" type="text/css">
 
  <script src="js/jquery-1.7.2.min.js" ></script>
  <script src="js/html5.js" ></script>
  <script src="js/jflow.plus.js"></script>
  <script src="js/jquery.carouFredSel-5.2.2-packed.js"></script>
  <script src="js/checkbox.js"></script>
  <script src="js/radio.js"></script>
  <script src="js/selectBox.js"></script>

  <script>
	$(document).ready(function() {
		$("select").selectBox();
	});
  </script>

  <script>
	$(document).ready(function(){
		$("#myController").jFlow({
			controller: ".control", // must be class, use . sign
			slideWrapper : "#jFlowSlider", // must be id, use # sign
			slides: "#slider",  // the div where all your sliding divs are nested in
			selectedWrapper: "jFlowSelected",  // just pure text, no sign
			width: "984px",  // this is the width for the content-slider
			height: "480px",  // this is the height for the content-slider
			duration: 400,  // time in miliseconds to transition one slide
			prev: ".slidprev", // must be class, use . sign
			next: ".slidnext", // must be class, use . sign
			auto: true	
		});
	});
  </script>
  <script>
	$(function() {
	  $('#list_product').carouFredSel({
		prev: '#prev_c1',
		next: '#next_c1',
		auto: false
	  });
          $('#list_product2').carouFredSel({
		prev: '#prev_c2',
		next: '#next_c2',
		auto: false
	  });
	  $('#list_banners').carouFredSel({
		prev: '#ban_prev',
		next: '#ban_next',
		scroll: 1,
		auto: false
	  });
	  $(window).resize();
	});
  </script>
  <script>
       $(document).ready(function(){
	      $("button").click(function(){
		     $(this).addClass('click')
	      });             
       })
  </script>
    <script type="text/javascript">
		var msg="${requestScope.tipMessage}";
		if(msg!=""){
		alert(msg);
		}
	</script>
	<script type="text/javascript">
	function isLogin() {
	var userName = document.getElementById("showName").value;
	if(userName == "") {
	document.getElementById("user_name").style.display = "none";
	document.getElementById("unlogin").style.display = "block";
	} else {
	document.getElementById("user_name").style.display = "block";
	document.getElementById("unlogin").style.display = "none";
	}
	}
	
	function inCart() {
	var username = document.getElementById("showName").value;
	var goods_id = document.getElementById("showGoods_id").value;
	if(username != "") {
	var url = "addToCartAction?goods_id="+goods_id+"&count=1";
	window.location.href=url;
	} else {
	alert("请先登录!");
	window.location.href="/E-Mall/login.jsp";
	}
	}
	
	function inWishlist() {
	var username = document.getElementById("showName").value;
	if(username != "") {
	var url = "addToWishlistAction?goods_id="+goods_id;
	window.location.href=url;
	} else {
	alert("请先登录!");
	window.location.href="/E-Mall/login.jsp";
	}
	}
	
	function inUserCenter() {
	var username = document.getElementById("showName").value;
	if(username != "") {
	var url = "/E-Mall/user_center.jsp";
	window.location.href=url;
	} else {
	alert("请先登录!");
	window.location.href="/E-Mall/login.jsp";
	}
	}
	function regist(){
	window.location.href="/E-Mall/regist.jsp";
	}
	
	
	</script>
</head>
<body onload="isLogin()">
  <div class="container_12">
    <div id="top">
      <div class="grid_3">
        <div class="phone_top">
          Call Us +777 (100) 1234
        </div><!-- .phone_top -->
      </div><!-- .grid_3 -->
   
      <div class="grid_6" id="unlogin">
        <div class="welcome">
           <a href="login.jsp">请登录</a> &nbsp;&nbsp;&nbsp;<a href="regist.jsp">免费注册</a>
        </div><!-- .welcome -->
      </div><!-- .grid_6 -->
      
      <div class="grid_6" id="user_name">
        <div class="welcome">
          Hi! &nbsp;<a href="/E-Mall/user_center.jsp">${user.user_name}</a> &nbsp;&nbsp;&nbsp;<a href="exitAction">退出</a>
          <button id="showName" value="${user.user_name }" style="display: none"></button>
        </div><!-- .welcome -->
      </div><!-- .grid_6 -->
   
      <div class="grid_3">
        <div class="valuta">
          <ul>
            <li class="curent"><a href="#">$</a></li>
            <li><a href="#">&#8364;</a></li>
            <li><a href="#">&#163;</a></li>
          </ul>
        </div><!-- .valuta -->
    
        <div class="lang">
          <ul>
            <li class="curent"><a href="#">EN</a></li>
            <li><a href="#">FR</a></li>
            <li><a href="#">GM</a></li>
          </ul>
        </div><!-- .lang -->
      </div><!-- .grid_3 -->
    </div><!-- #top -->
  
    <div class="clear"></div>
   
    <header id="branding">
      <div class="grid_3">
        <hgroup>
          <h1 id="site_logo"><a href="index.jsp" title=""><img src="images/logo.png" alt="Online Store Theme Logo"/></a></h1>
          <h2 id="site_description">E-Mall</h2>
        </hgroup>
      </div><!-- .grid_3 -->
      
      <div class="grid_3">
        <form class="search" action="searchGoodsByNameAction" method="post">
          <input type="text" name="goods_name" class="entry_form" placeholder="输入商品名称..."/>
          <input type="submit" name="btn_findGoods" value="搜索" style="width:45px"/>
	    </form>
      </div><!-- .grid_3 -->
      
      <div class="grid_6">
        <ul id="cart_nav">
          <li>
            <a class="cart_li" href="showCartListAction">购物车</a>
            <ul class="cart_cont">
              <li class="no_border"><p>最近添加的商品</p></li>
              <c:forEach items="${cartList_R}" var="goods_order">
	              <li>
	                <a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}" class="prev_cart"><div class="cart_vert"><img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" /></div></a>
	                <div class="cont_cart">
	                  <h4>${goods_order.goods.goods_name}</h4>
	                  <div class="price">${goods_order.order.count} x ${goods_order.goods.goods_price}</div>
	                </div>
	                <a title="close" class="close" href="#"></a>
	                <div class="clear"></div>
	              </li>
              </c:forEach>
	      <li class="no_border">
		<a href="shopping_cart.jsp" class="view_cart">查看购物车</a>
		<a href="checkout.jsp" class="checkout">去结算</a>
	      </li>
            </ul>
          </li>
        </ul>
        
        <nav class="private">
          <ul>
            <li><a href="javascript:void(0)" onclick="inUserCenter()">我的E-Mall</a></li>
		<li class="separator">|</li>
            <li><a href="showWishlistAction">我的收藏</a></li>
		<li class="separator">|</li>
          </ul>
        </nav><!-- .private -->        
      </div><!-- .grid_6 -->
    </header><!-- #branding -->
  </div><!-- .container_12 -->
  
  <div class="clear"></div>
  
  <div class="clear"></div>
  
  <section id="main" class="entire_width">
    <div class="container_12">      
       <div id="content">
		<div class="grid_12">
			<h1 class="page_title">登录.注册</h1>
		</div><!-- .grid_12 -->
		
		<div class="grid_6 new_customers">
			<h2>新用户</h2>
			<p>创建E-Mall新用户，让我么更加了解你！</p>
			<div class="clear"></div>
			<button class="account" onclick="regist()">注册新用户</button>
			
		       
                </div><!-- .grid_6 -->
		
		
		
		
		<div class="grid_6">
			<form class="registed" action="loginAction" method="post" >
				<h2>E-Mall会员</h2>
							
				<p>已有账号？请登录。</p>
							
				<div class="email">
					<strong>账号</strong><sup class="surely">*</sup><br/>
					<input type="text" name="user_name" class="" value="" />
				</div><!-- .email -->
							
				<div class="password">
					<strong>密码</strong><sup class="surely">*</sup><br/>
					<input type="password" name="password"  value="" style="width:280px;height:35px"/>
					<a class="forgot" href="#">忘记密码？</a>
				</div><!-- .password -->
				
				<div class="remember">
					<input class="niceCheck" type="checkbox" name="Remember_password" />
					<span class="rem">记住密码</span>
				</div><!-- .remember -->
				
				<div class="submit" >										
					<input type="submit" value="登录" />
					<br/><br/>
					<input type="submit" value="提交评论" />
					<br><br>
					<sup class="surely">*</sup><span>必填字段</span>
				</div><!-- .submit -->
			</form><!-- .registed -->
                </div><!-- .grid_6 -->
       </div><!-- #content -->
       
      <div class="clear"></div>
    </div><!-- .container_12 -->
  </section><!-- #main -->
  
  <div class="clear"></div>
    
  <div id="footer" align="center">
	        <p style="height:50px"></p>
			<div>Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
	</div>
 
</body>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
</html>