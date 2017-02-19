<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
  <meta charset="UTF-8">

  <meta name="description" content="">
  <meta name="keywords" content="">

  <title>个人中心</title>

  <link rel="shortcut icon" href="favicon.ico">
  <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/grid.css" media="screen" rel="stylesheet" type="text/css">

  <script src="js/jquery-1.7.2.min.js" ></script>
  <script src="js/html5.js" ></script>
  <script src="js/jflow.plus.js" ></script>
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
		function isLogin() {
		var userName = document.getElementById("showName").value;
		if(userName == "") {
		alert("请先登录!");
		window.location.href="/E-Mall/login.jsp";
		} else {
		document.getElementById("user_name").style.display = "block";
		}
		}
		
		function inCart() {
		var username = document.getElementById("showName").value;
		var goods_id = document.getElementById("showGoods_id").value;
		
		alert("goods_id = "+goods_id);//为什么返回的还是第一个goods_id???
		
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
		
	</script>
	
<script type="text/javascript">   
function iFrameHeight() {   
var ifm= document.getElementById("inside");   
var subWeb = document.frames ? document.frames["inside"].document : ifm.contentDocument;   
if(ifm != null && subWeb != null) {
   ifm.height = subWeb.body.scrollHeight;
   ifm.width = subWeb.body.scrollWidth;
}   
}   
</script>
</head>
<body  onload="isLogin()">
  <div class="container_12">
    <div id="top">
      <div class="grid_3">
        <div class="phone_top">
          Call Us +777 (100) 1234
        </div><!-- .phone_top -->
      </div><!-- .grid_3 -->

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
          <h1 id="site_logo"><a href="index.jsp" title=""><img src="images/logo.png" alt="E-Mall Logo"/></a></h1>
          <h2 id="site_description">E-Mall</h2>
        </hgroup>
      </div><!-- .grid_3 -->

      <div class="grid_3">
        <form class="search" action="searchGoodsByNameAction" method="post">
          <input type="text" name="goods_name" class="entry_form" value="" placeholder="连衣裙..."/>
          <input type="submit" name="btn_findGoods" value="搜索"  style="width:45px"/>
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
  <div class="container_12">
	    <div class="grid_12">
	       <div class="breadcrumbs">
		      <a href="index.jsp">首页</a><span>&#8250;</span><a href="#">个人中心</a>
	       </div><!-- .breadcrumbs -->
	    </div><!-- .grid_12 -->
	  </div><!-- .container_12 -->
	  
	  <div class="clear"></div>

  <section id="main" >
    <div class="container_12">
       <div id="sidebar" class="grid_3" >

	      <aside id="categories_nav">
		     <h4>个人中心</h4>
		     <nav class="left_menu">
			    <ul>
				   <li><a href="showOrdersListAction" target="inside">我的订单 <span> (27)</span></a></li>
				   <li><a href="shopping_cart.jsp" target="_blank">我的购物车 <span>(21)</span></a></li>
				   <li><a href="showWishlistAction" target="_blank">我的收藏 <span>(33)</span></a></li>
				   <li><a href="/E-Mall/sellor/index_${user.role_id}.jsp" target="_blank">卖家中心 </a></li>
				   <li><a href="/E-Mall/user_info.jsp" target="inside">个人资料</a></li>
				   <li><a href="#" target="inside">我的账户</a></li>
				   <li><a href="#">我的等级</a></li>
				   <li><a href="#">我要反馈</a></li>
			    </ul>
		     </nav><!-- .left_menu -->
	      </aside><!-- #categories_nav -->

	      <aside id="community_poll">
		     <h3>投票专区</h3>

		     <h4>您的年龄?</h4>

		     <form action="#" class="poll">
			<ul>
			    <li><input class="niceRadio" type="radio" name="" value="" /> ≤ 18 </li>
			    <li><input class="niceRadio" type="radio" name="" value="" /> 18-24 </li>
			    <li><input class="niceRadio" type="radio" name="" value="" /> 24-30 </li>
			    <li><input class="niceRadio" type="radio" name="" value="" /> 30-40 </li>
			    <li><input class="niceRadio" type="radio" name="" value="" /> ≥ 40 </li>
			</ul>

			<input class="vote" type="submit" name="" value="投票" />
		     </form>
	      </aside><!-- #community_poll -->

	      <aside id="compare_products">
			<h3>商品对比</h3>

			<ul>
			    <li><a title="close" class="close" href="#"></a>韩国东大门黑白双色连衣裙</li>
			    <li><a title="close" class="close" href="#"></a>复古条纹拼接网纱中长款连衣裙</li>
			    <li><a title="close" class="close" href="#"></a>森女风 透气收腰连衣裙</li>
			</ul>

			<button class="compare">对比</button>
			<a class="clear_all" href="#">清除</a>

			<div class="clear"></div>
	      </aside><!-- #compare_products -->

	      <aside id="banners">
		<a id="ban_next" class="next arows" href="#"><span>Next</span></a>
		<a id="ban_prev" class="prev arows" href="#"><span>Prev</span></a>
	      </aside><!-- #banners -->
       </div><!-- .sidebar -->

       <div id="content" class="grid_9_1">
         <br/> <br/>
		 <iframe name="inside" id="inside" src="showOrdersListAction"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" onLoad="iFrameHeight()" >
		 </iframe>
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
