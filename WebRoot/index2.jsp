<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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

  <title>Home</title>

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
$.get(url,function(data,status){
				 if(data=="success"){
				 	 alert("加入购物车成功");
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
				 	 alert("收藏成功");
				 }else{
				 	alert("收藏失败！");
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
          Hi! &nbsp;<a href="/E-Mall/user_center.jsp">${user.user_name}</a> &nbsp;&nbsp;&nbsp;<a href="exitAction" >退出</a>
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
          <h1 id="site_logo" ><a href="/E-Mall/index.jsp" title=""><img src="images/logo.png" alt="E-Mall Logo"/></a></h1>
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

  <div class="clear"></div>

  <div id="block_nav_primary">
    <div class="container_12">
      <div class="grid_12">
        <nav class="primary">
          <ul>

	         <li class="curent">
	            <a href="index.jsp">首页</a>
	         </li>  
 
	         <c:forEach items="${parent_typeList}" var="type_">
	         <li>
	            <a href="#">${type_.type_name}</a>
                 <ul class="sub">   
                 <c:forEach items="${typeList}" var="type">
	                 <c:choose>
	                      <c:when test="${type.parent_type_id eq type_.type_id}">  
	                        <li>

	                        <s:url var="url" action="searchGoodsByTypeAction">
							   <s:param name="type_id" />
						    </s:url> <!--使用上面定义的url--> 
						    <a href="searchGoodsByTypeAction.action?type_id=${type.type_id}">${type.type_name}</a>
          
	                        </li>
	                      </c:when>
	                 </c:choose>
                 </c:forEach>   
                 </ul>
	         </li> 
	         </c:forEach>
	         
          </ul>
        </nav><!-- .primary -->
      </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </div><!-- .block_nav_primary -->

  <div class="clear"></div>

  <div class="container_12">
    <div class="grid_12">
        <div class="slidprev"><span>Prev</span></div>
        <div class="slidnext"><span>Next</span></div>
        <div id="slider">
          <div id="slide1">
            <img src="images/content/slide1.jpg" alt="" title="" />
            <div class="slid_text">
              <h3 class="slid_title"><span>Breeze Theme</span></h3>
              <p><span>Breeze is the 14 stylish HTML templates,</span></p>
              <p><span>which will helps you boost sales</span></p>
              <p><span>and receive good feedback from your clients.</span></p>
            </div>
          </div>

          <div id="slide2">
            <img src="images/content/slide2.jpg" alt="" title="" />
            <div class="slid_text">
              <h3 class="slid_title"><span>Flexibility</span></h3>
              <p><span>Every product, which you are selling,</span></p>
              <p><span>will look great with Breeze theme.</span></p>
            </div>
          </div>

          <div id="slide3">
            <img src="images/content/slide3.jpg" alt="" title="" />
            <div class="slid_text">
              <h3 class="slid_title"><span>Accuracy and Easiness</span></h3>
              <p><span>Breeze design is mere and accurate,</span></p>
              <p><span>so it will satisfy everybody.</span></p>
            </div>
          </div>
        </div><!-- .slider -->
        <div id="myController">
          <div class="control"><span>1</span></div>
          <div class="control"><span>2</span></div>
          <div class="control"><span>3</span></div>
        </div>


    </div><!-- .grid_12 -->
  </div><!-- .container_12 -->
  
  <div class="clear"></div>

  <section id="main" class="home">
    <div class="container_12">
      <div id="top_button">
        <div class="grid_4">
          <a href="#" class="button_block best_price">
            <img src="images/banner1.png" alt="Banner 1"/>
          </a><!-- .best_price -->
        </div><!-- .grid_4 -->

        <div class="grid_4">
          <a href="#" class="button_block new_smells">
            <img src="images/banner2.png" alt="Banner 2"/>
          </a><!-- .new smells -->
        </div><!-- .grid_4 -->

        <div class="grid_4">
          <a href="#" class="button_block only_natural">
            <img src="images/banner3.png" alt="Banner 3"/>
          </a><!-- .only_natural -->
        </div><!-- .grid_4 -->

        <div class="clear"></div>
      </div><!-- #top_button -->

      <div class="clear"></div>

      <div class="carousel">
        <div class="c_header">
          <div class="grid_10">
            <h2>热销</h2>
          </div><!-- .grid_10 -->

          <div class="grid_2">
            <a id="next_c1" class="next arows" href="#"><span>Next</span></a>
            <a id="prev_c1" class="prev arows" href="#"><span>Prev</span></a>
           </div><!-- .grid_2 -->
        </div><!-- .c_header -->

        <div class="list_carousel">

        <ul id="list_product" class="list_product">
          <li class="">
            <div class="grid_3 product">
              <img class="sale" src="images/sale.png" alt="Sale"/>
              <div class="prev">
                <a href="product_page.html"><img src="images/product_1.png" alt="" title="" /></a>
              </div><!-- .prev -->
              <h3 class="title">亲肤沐浴露</h3>
              <div class="cart">
                <div class="price">
                <div class="vert">
                  <div class="price_new">￥550.00</div>
                  <div class="price_old">￥725.00</div>
                </div>
                </div>
                <input id="goods_id" value="${goods.goods_id}" style="display: none"></input>
                <a href="#" class="obn"></a>
                <a href="#" class="like"></a>
                <a href="#" class="bay"></a>
              </div><!-- .cart -->
            </div><!-- .grid_3 -->
          </li>

          <li class="">
            <div class="grid_3 product">
              <img class="sale" src="images/sale.png" alt="Sale"/>
              <div class="prev">
                <a href="product_page.html"><img src="images/product_2.png" alt="" title="" /></a>
              </div><!-- .prev -->
              <h3 class="title">亲肤沐浴露</h3>
              <div class="cart">
                <div class="price">
                <div class="vert">
                  <div class="price_new">￥550.00</div>
                  <div class="price_old">￥725.00</div>
                </div>
                </div>
                <a href="#" class="obn"></a>
                <a href="#" class="like"></a>
                <a href="#" class="bay"></a>
              </div><!-- .cart -->
            </div><!-- .grid_3 -->
          </li>

          <li class="">
            <div class="grid_3 product">
              <div class="prev">
                <a href="product_page.html"><img src="images/product_3.png" alt="" title="" /></a>
              </div><!-- .prev -->
              <h3 class="title">亲肤沐浴露</h3>
              <div class="cart">
                <div class="price">
                <div class="vert">
                  <div class="price_new">￥550.00</div>
                </div>
                </div>
                <a href="#" class="obn"></a>
                <a href="#" class="like"></a>
                <a href="#" class="bay"></a>
              </div><!-- .cart -->
            </div><!-- .grid_3 -->
          </li>

          <li class="">
            <div class="grid_3 product">
              <img class="sale" src="images/sale.png" alt="Sale"/>
              <div class="prev">
                <a href="product_page.html"><img src="images/product_4.png" alt="" title="" /></a>
              </div><!-- .prev -->
              <h3 class="title">亲肤沐浴露</h3>
              <div class="cart">
                <div class="price">
                <div class="vert">
                  <div class="price_new">￥550.00</div>
                  <div class="price_old">￥725.00</div>
                </div>
                </div>
                <a href="#" class="obn"></a>
                <a href="#" class="like"></a>
                <a href="#" class="bay"></a>
              </div><!-- .cart -->
            </div><!-- .grid_3 -->
          </li>

          <li class="">
            <div class="grid_3 product">
              <div class="prev">
                <a href="product_page.jsp"><img src="images/product_8.png" alt="" title="" /></a>
              </div><!-- .prev -->
              <h3 class="title">亲肤沐浴露</h3>
              <div class="cart">
                <div class="price">
                <div class="vert">
                  <div class="price_new">￥550.00</div>
                  <div class="price_old">￥725.00</div>
                </div>
                </div>
                <a href="#" class="obn"></a>
                <a href="#" class="like"></a>
                <a href="#" class="bay"></a>
              </div><!-- .cart -->
            </div><!-- .grid_3 -->
          </li>

        </ul><!-- #list_product -->
        </div><!-- .list_carousel -->
      </div><!-- .carousel -->
  </section><!-- #main -->

  <div class="clear"></div>

  <div id="footer" align="center">
	        <p style="height:50px"></p>
			<div>Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
	</div>

</body>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
</html>
