<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
    
    <title>确认订单</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta charset="UTF-8">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  <link rel="shortcut icon" href="favicon.ico">
  <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/grid.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/order.css" rel="stylesheet" type="text/css">
  <link href="css/sureOrder.css" rel="stylesheet" type="text/css">

  <script src="js/jquery-1.7.2.min.js" ></script>
  <script src="js/html5.js" ></script>
  <script src="js/jflow.plus.js" ></script>
  <script src="js/jquery.carouFredSel-5.2.2-packed.js"></script>
  <script src="js/checkbox.js"></script>
  <script src="js/radio.js"></script>
  <script src="js/selectBox.js"></script>

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
  <script>
       $(document).ready(function() {
	      $("select").selectBox();
       });
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
		
		function inSubmitOrder() {
		var username = document.getElementById("showName").value;
		var address_id = getAddress();
		if(address_id==""){
		alert("请选择收货地址！");
		}else{
			if(username != "") {
			var url = "submitOrdersAction?address_id="+address_id;
			window.location.href=url;
			} else {
			alert("请先登录!");
			window.location.href="/E-Mall/login.jsp";
			}
		}
	}
	
	function getAddress(){
	  var value="";
	  var radio=document.getElementsByName("ra_address");
	  for(var i=0;i<radio.length;i++){
		if(radio[i].checked==true){
		  value=radio[i].value;
		  break;
		}
	  }
	  return value;
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

        <div class="lang">
          <ul>
            <li class="curent"><a href="#">EN</a></li>
            <li><a href="#">FR</a></li>
            <li><a href="#">GM</a></li>
          </ul>
        </div><!-- .lang -->
      </div><!-- .grid_3 -->   
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
		<a href="checkout.jsp" class="checkout" target="_blank">去结算</a>
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
  
 <div>
      <div id="div1">
       
       <aside id="community_poll">
		     <h3>确认收货地址:</h3>

		     <h4 style="align:right"><a href="#" >管理收货地址</a></h4>

		     <form action="#" class="poll">
			<ul>
			    <c:forEach items="${addressList}" var="address">
			    <li><input class="niceRadio" type="radio" name="ra_address" value="${address.address_id}" /> ${address.address_name}(收)</li>
			    </c:forEach>
			</ul>
		     </form>
	      </aside><!-- #community_poll -->
       
       
       
       
       </div>
 <!--div2--------------------------------------------------------->
	  

	<br><br><br><br>
	  
<!--divbodybottom--------------------------------------------------------->

	<div id="divbodybottom">
		
		<div id="div2">
	  	  <font>订单详情&nbsp;:</font>
	    </div>
        
        
        
		<table border="0" cellpadding="0" cellspacing="0" width="970px" align="center">
		<tr>
		<td width="490px" align="center" valign="bottom"><font>商品详情</font></td>
		<td width="140px" align="center" valign="bottom"><font>单价</font></td>
		<td width="100px" align="center" valign="bottom"><font>数量</font></td>
		<td width="140px" align="center" valign="bottom"><font>合计</font></td>
		</tr>
		<c:forEach items="${orderList_cmf}" var="goods_order">
			<tr>
				<td align="left"><a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}" style="font-size:18px;align:middle"><img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" height="80px" width="70px" align="top">${goods_order.goods.goods_name}</a></td>
				<td id="divbodybottom03" align="center"><font><fmt:formatNumber pattern="￥ #.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></font></td>
				<td id="divbodybottom04" align="center"><font>${goods_order.order.count} </font></td>
				<td id="divbodybottom05" align="center">
				    <font><fmt:formatNumber pattern="￥ #.#" type="number" value="${goods_order.order.total_price}"/></font>
				</td>
			</tr>
		</c:forEach>
		</table>
		
		<p align=right style="font-size:14px;font-weight:bold">实付款：<font><fmt:formatNumber pattern="#.#" type="number" value="${total_sum}"/></font></p>

		<p align=right><input type=button id="btn_sub" style="background-image:url(images/tijiao.png);width:100px;height:35px" align=right onclick="inSubmitOrder()" /></p>
	
	
	<div id="footer" align="center">
	        <p style="height:50px"></p>
			<div>Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
	</div>
	
	
	</div>
  </div>
 </div><!-- .container_12 -->

      <div class="clear"></div>
  </body>
</html>
