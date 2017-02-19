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

  <title>商品详情</title>

  <link rel="shortcut icon" href="favicon.ico">
  <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/grid.css" media="screen" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/jquery.jqzoom.css" type="text/css">

  <script src="js/jquery-1.7.2.min.js" ></script>
  <script src="js/html5.js" ></script>
  <script src="js/jflow.plus.js" ></script>
  <script src="js/jquery.carouFredSel-5.2.2-packed.js"></script>
  <script src="js/checkbox.js"></script>
  <script src="js/radio.js"></script>
  <script src="js/selectBox.js"></script>
  <script src="js/jquery.jqzoom-core.js" ></script>

  <script>
	$(document).ready(function() {
		$('.jqzoom').jqzoom({
			zoomType: 'standard',
			lens:true,
			preloadImages: true,
			alwaysOn:false
		});
	});
  </script>

  <script>
	$(document).ready(function() {
		$("select").selectBox();
	});
  </script>

  <script>
	$(document).ready(function() {
		$('#wrapper_tab a').click(function() {
			if ($(this).attr('class') != $('#wrapper_tab').attr('class') ) {
				$('#wrapper_tab').attr('class',$(this).attr('class'));
			}
			return false;
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
          $('#list_banners').carouFredSel({
		prev: '#ban_prev',
		next: '#ban_next',
		scroll: 1,
		auto: false
	  });
	  $('#thumblist').carouFredSel({
		prev: '#img_prev',
		next: '#img_next',
		scroll: 1,
		auto: false,
		circular: false,
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

		 $.get(url,function(data,status){
				 if(data=="success"){
				 	 alert("添加成功");
				 }else{
				 	alert("购物车添加失败！");
				 }
			 }); 

	} else {
		alert("请先登录!");
		window.location.href="/E-Mall/login.jsp";
	}
	}
	
	function inCart_2() {
	var username = document.getElementById("showName").value;
	var goods_id = document.getElementById("showGoods_id").value;
	var count = document.getElementById("txt_count").value;
	if(username != "") {
		var url = "addToCartAction?goods_id="+goods_id+"&count="+count;
		//window.location.href=url;
		 $.get(url,function(data,status){
					 if(data=="success"){
					 	 alert("添加成功");
					 }else{
					 	alert("购物车添加失败！");
					 }
				 }); 

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
          <h1 id="site_logo"><a href="index.jsp" title=""><img src="images/logo.png" alt="E-Mall Logo"/></a></h1>
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

  <div class="container_12">
    <div class="grid_12">
       <div class="breadcrumbs">
	      <a href="index.jsp">首页</a><span>&#8250;</span><a href="#">${parent_type_name}</a><span>&#8250;</span><span class="current">${type_name}</span>
       </div><!-- .breadcrumbs -->
    </div><!-- .grid_12 -->
  </div><!-- .container_12 -->

  <div class="clear"></div>

  <section id="main">
    <div class="container_12">
       <div  id="content" class="grid_3">
	      <aside id="categories_nav">
		     <h3>分类</h3>

		     <nav class="left_menu">
			    <ul>
			    
				   <c:forEach items="${typeList}" var="type">
	                 <li>

						<s:url var="url" action="searchGoodsByTypeAction">
							<s:param name="goods_id" />
						</s:url> <!--使用上面定义的url--> 
						<a href="searchGoodsByTypeAction.action?type_id=${type.type_id}">${type.type_name} </a>
						
				    </li>
	              </c:forEach>
				   
			    </ul>
		     </nav><!-- .left_menu -->
	      </aside><!-- #categories_nav -->

       </div><!-- .sidebar -->

       <div id="content" class="grid_9">
	      <h1 class="page_title">${goods.goods_name}</h1>

		<div class="product_page">
			<div class="grid_4 img_slid" id="products">
				<img class="sale" src="images/sale.png" alt="Sale"/>
				
				<div class="preview slides_container" align=center>
					<div class="prev_bg">
						<a href="images/goods-image/w-clothes/dress/${goods.goods_image}" class="jqzoom" rel='gal1' title="" >
							<img src="images/goods-image/w-clothes/dress/${goods.goods_image}"   title="" alt=""/>
						</a>
					</div>
				</div><!-- .prev -->
				

				<ul class="pagination clearfix" id="thumblist">
					<li><a class="zoomThumbActive" href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: '.images/goods-image/w-clothes/dress/${goods.goods_image}',largeimage: '.images/goods-image/w-clothes/dress/${goods.goods_image}'}"><img src='images/goods-image/w-clothes/dress/${goods.goods_image}' alt=""></a></li>
										
					<li><a href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: '.images/goods-image/w-clothes/dress/${goods.goods_image}',largeimage: './images/goods-image/w-clothes/dress/${goods.goods_image}'}"><img src='images/goods-image/w-clothes/dress/${goods.goods_image}' alt=""></a></li>
					<li><a href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: '.images/goods-image/w-clothes/dress/${goods.goods_image}',largeimage: './images/goods-image/w-clothes/dress/${goods.goods_image}'}"><img src='images/goods-image/w-clothes/dress/${goods.goods_image}' alt=""></a></li>
					<li><a href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: '.images/goods-image/w-clothes/dress/${goods.goods_image}',largeimage: './images/goods-image/w-clothes/dress/${goods.goods_image}'}"><img src='images/goods-image/w-clothes/dress/${goods.goods_image}' alt=""></a></li>
					<li><a href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: '.images/goods-image/w-clothes/dress/${goods.goods_image}',largeimage: './images/goods-image/w-clothes/dress/${goods.goods_image}'}"><img src='images/goods-image/w-clothes/dress/${goods.goods_image}' alt=""></a></li>
				
				
				
				</ul>

				<div class="next_prev">
					<a id="img_prev" class="arows" href="#"><span>Prev</span></a>
					<a id="img_next" class="arows" href="#"><span>Next</span></a>
				</div><!-- . -->
			</div><!-- .grid_4 -->

			<div class="grid_5">
				<div class="entry_content">
					<p>${goods.goods_detail}</p>
					<div class="ava_price">
						<div class="availability_sku">
							<div class="sku">
								库存：<span>${stock_quantity}</span>
							</div>
							<div class="sku">
								销量：<span>${sellCount}</span>
							</div>
						</div><!-- .availability_sku -->

						<div class="price">
							<div class="price_new"><fmt:formatNumber pattern="￥ #.#" type="number" value="${goods.goods_price*goods.discount_rate}"/></div>
							<div class="price_old">￥ ${goods.goods_price}</div>
						</div><!-- .price -->
					</div><!-- .ava_price -->
                    <input id="showGoods_id" value="${goods.goods_id}" style="display: none"></input>
					<div class="block_cart">
						<div class="obn_like">
							<div class="obn"><a href="#" class="obn">加入对比</a></div>
							<div class="like"><a href="#" class="like">收藏</a></div>
						</div>
						
						<div class="cart" >
						    <a href="javascript:void(0)" onclick="inCart_2()" class="bay">加入购物车</a>
						    <input type="number" id="txt_count" class="number" value="1"  style="width:60px;height:40px"/>
							<span>数量:</span>
							
						</div>
						<div class="clear"></div>
					</div><!-- .block_cart -->
					<div class="soc">
						<img src="images/soc.png" alt="Soc"/>
					</div><!-- .soc -->
				</div><!-- .entry_content -->

			</div><!-- .grid_5 -->

			<div class="clear"></div>

			<div class="grid_9" >
				<div id="wrapper_tab" class="tab1">
					<a href="#" class="tab1 tab_link">商品描述</a>
					<a href="#" class="tab2 tab_link">商品评论</a>

					<div class="clear"></div>

					<div class="tab1 tab_body">
					<p>${goods.goods_detail}</p>
					   <div class="clear"></div>
					</div><!-- .tab1 .tab_body -->

					<div class="tab2 tab_body">
						<ul class="comments">
						<c:forEach items="${commentList}" var="comment_">
							<li>
								<div class="autor">${comment_.user_name}</div>, <time datetime="2012-11-03">${comment_.comment_time}</time>

								<div class="evaluation">
									<div class="quality">
										<strong>总体评价</strong>
										
										<c:choose>
										<c:when test="${comment_.flag eq '1'}">
										<a class="plus" href="#"></a>
										</c:when>
										<c:when test="${comment_.flag eq '0'}">
										<a class="plus_minus" href="#"></a>
										</c:when>
										<c:when test="${comment_.flag eq '-1'}">
										<a class="#" href="#"></a>
										</c:when>
										</c:choose>
									</div>
									<div class="clear"></div>
								</div><!-- .evaluation -->

								<p>${comment_.comment}</p>
							</li>
                          </c:forEach>
						</ul><!-- .comments -->
		
					<div class="clear"></div>
					</div><!-- .tab2 .tab_body -->
					</div><!-- .tab3 .tab_body -->
					<div class="clear"></div>
				</div><!-- #wrapper_tab -->
				<div class="clear"></div>
			</div><!-- .grid_9 -->

			<div class="clear"></div>
		</div><!-- .product_page -->
		<div class="clear"></div>

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
