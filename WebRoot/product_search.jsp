<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>商品搜索</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="shortcut icon" href="images/favicon.ico">
  <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/grid.css" media="screen" rel="stylesheet" type="text/css">

  <script src="js/jquery-1.7.2.min.js" ></script>
  <script src="js/html5.js" ></script>
  <script src="js/jflow.plus.js" ></script>
  <script src="js/jquery.carouFredSel-5.2.2-packed.js"></script>

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
          <h1 id="site_logo" ><a href="index.jsp" title=""><img src="images/logo.png" alt="E-Mall Logo"/></a></h1>
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
            <li><a href="javascript:void(0)" onclick="inUserCenter()" >我的E-Mall</a></li>
		    <li class="separator">|</li>
            <li><a href="showWishlistAction">我的收藏</a></li>
		    <li class="separator">|</li>
          </ul>
        </nav><!-- .private -->
      </div><!-- .grid_6 -->
    </header><!-- #branding -->
  </div><!-- .container_12 -->
    
    <div class="container_12">
    <div class="grid_product">
       <h2 class="page_title">搜索结果</h2>
	       <c:forEach items="${goodsList}" var="goods">
	         <div class="grid_3 product">
			    <div class="prev">
				<s:url var="url" action="searchGoodsByIdAction">
					<s:param name="goods_id"  />
				</s:url>
				<!--使用上面定义的url-->
				<a href="searchGoodsByIdAction?goods_id=${goods.goods_id}">
                   <img src="images/goods-image/w-clothes/dress/${goods.goods_image}" alt="" title="" />
				</a>         
				</div><!-- .prev -->
				
			    <h3 class="title">${goods.goods_name}</h3>
			    <div class="cart">
				   <div class="price">
					  <div class="vert">
						 <div class="price_new"><fmt:formatNumber pattern="￥ #.#" type="number" value="${goods.goods_price*goods.discount_rate}"/></div>
						 <div class="price_old">￥ ${goods.goods_price}</div>
					  </div>
				   </div>
				   
				   <a href="#" class="obn"></a>
				   <a href="#" class="like"></a>
				   <a href="javascript:void(0)" class="bay" onclick="inCart('${goods.goods_id}')"></a>
			    </div><!-- .cart -->
		     </div><!-- .grid_3 -->
	      </c:forEach>

	      <div class="clear"></div>
	      </div><!-- .grid_product -->
    </div>
    
    <div id="footer" align="center">
	        <p style="height:50px"></p>
			<div>Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
	</div>
  </body>
</html>
