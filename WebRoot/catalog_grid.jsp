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

  <title>Catalog (grid view)</title>

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
		
		function inCart(goods_id) {
			var username = document.getElementById("showName").value;
			if(username != "") {
				var url = "addToCartAction?goods_id="+goods_id+"&count=1";
				//window.location.href=url;
				 $.get(url,function(data,status){
						 if(data=="success"){
						 	 alert("加入购物车成功!");
						 }else{
						 	 alert("加入购物车失败！");
						 }
					 }); 
			} else {
				alert("请先登录!");
				window.location.href="/E-Mall/login.jsp";
			}
	}
		
		function inWishlist(goods_id) {
		var username = document.getElementById("showName").value;
		if(username != "") {
		var url = "addToWishlistAction?goods_id="+goods_id;
		$.get(url,function(data,status){
				 if(data=="success"){
				 	 alert("收藏成功！");
				 }else{
				 	alert("你已收藏过该商品！");
				 }
			 }); 
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
		
		function compare(goods_id){
		    var url = "addToCompareAction?goods_id="+goods_id;
		    window.location.href=url;
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
		     <h3>分类目录</h3>
		     
		     <nav class="left_menu">
			    <ul>
			    
				   <c:forEach items="${typeList}" var="type">
				     
	                    <c:choose>
	                      <c:when test="${type.type_id eq current_type_id}">
	                      <li  class="current">
							<s:url var="url" action="searchGoodsByTypeAction">
								<s:param name="goods_id" />
							</s:url> <!--使用上面定义的url--> 
							<a href="searchGoodsByTypeAction.action?type_id=${type.type_id}">${type.type_name}</a>
						  </li>
						  </c:when>
						
						<c:otherwise>
						<li>
						    <s:url var="url" action="searchGoodsByTypeAction">
								<s:param name="goods_id" />
							</s:url> <!--使用上面定义的url--> 
							<a href="searchGoodsByTypeAction.action?type_id=${type.type_id}">${type.type_name}</a>
						</li>
                        </c:otherwise>
						
	                 </c:choose>
  
	              </c:forEach>
				   
			    </ul>
		     </nav><!-- .left_menu -->
	      </aside><!-- #categories_nav -->
	      
	      <aside id="shop_by"> 
		     <h4>目录</h4>
		     
		     <form action="#" class="check_opt">
			    <p><input class="niceCheck" type="checkbox" >生活</p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">汽车</p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">办公</p>
		     </form>
		     
		     <h4>价格</h4>
		     
		     <form action="#" class="check_opt">
			    <p><input class="niceCheck" type="checkbox" name="" value="">0.00 - ￥49.99 </p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">￥50.00 - ￥99.99 </p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">￥100.00以上 </p>
		     </form>
	      </aside><!-- #shop_by -->
	      
	      <aside id="specials" class="specials">
		     <h3>特价商品</h3>

		     <ul>
			    <li>
				   <div class="prev">
					  <a href="#"><img src="images/special1.png" alt="" title="" /></a>
				   </div>

				   <div class="cont">
					  <a href="#">美白面膜</a>
					  <div class="prise"><span class="old">￥177.00</span>￥75.00</div>
				   </div>
			    </li>

			    <li>
				   <div class="prev">
					  <a href="#"><img src="images/special2.png" alt="" title="" /></a>
				   </div>

				   <div class="cont">
					  <a href="#">亲肤沐浴乳</a>
					  <div class="prise"><span class="old">￥177.00</span>￥75.00</div>
				   </div>
			    </li>
		     </ul>
	      </aside><!-- #specials -->
       </div><!-- .sidebar -->
      
       <div id="content" class="grid_9">
	      <h1 class="page_title"></h1>
	      
	      <div class="options">
		     <div class="grid-list">
			   <a class="grid curent" href="index.jsp"><span>img</span></a>
			   <a class="list" href="catalog_list.jsp?type_id=${type_id}"><span>img</span></a>
		     </div><!-- .grid-list -->
		     
		     <div class="show">
			    展示
			    <select>
				   <option>1</option>
				   <option>2</option>
				   <option>3</option>
				   <option>4</option>
				   <option>5</option>
				   <option>6</option>
				   <option>7</option>
				   <option>8</option>
				   <option>9</option>
				   <option>10</option>
				   <option>11</option>
				   <option>12</option>
			     </select>
			    
			    每页
		     </div><!-- .show -->
		     
		     <div class="sort">
			   排序
			    <select>
				   <option>价格</option>
				   <option>位置</option>
				   <option>打折率</option>
				   <option>名称</option>
			     </select>
			    
			    <a class="sort_up" href="#">&#8593;</a>
		     </div><!-- .sort -->
	      </div><!-- .options -->
	      
	      <div class="grid_product">

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
				   
				   <a href="javascript:void(0)" class="obn" onclick="compare('${goods.goods_id}')"></a>
				   <a href="javascript:void(0)" class="like" onclick="inWishlist('${goods.goods_id}')"></a>
				   <a href="javascript:void(0)" class="bay" onclick="inCart('${goods.goods_id}')"></a>
			    </div><!-- .cart -->
		     </div><!-- .grid_3 -->
	      </c:forEach>

	      <div class="clear"></div>
	      </div><!-- .grid_product -->
	      
	      <div class="clear"></div>
	      
	      <div class="pagination">
		     <ul>
			    <li class="prev"><span>&#8592;</span></li>
			    <li class="curent"><a href="#">1</a></li>
			    <li class="next"><a href="#">&#8594;</a></li>
		     </ul>
	      </div><!-- .pagination -->
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