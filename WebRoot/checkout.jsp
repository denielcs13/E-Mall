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
    
    <title>结算页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
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
      function  selectAll(){
         checkAll = document.getElementById('checkAll');
         arr   =   document.getElementsByName('chk'); 
	        for(var i=0;i<arr.length;i++){   
	              arr[i].checked   =   checkAll.checked;   
	        }   
        }
        
        function getSelectedOrderId(){
          var  arr_orderId="";
          arr   =   document.getElementsByName('chk');
          var flag=0;
          for(var i=0;i<arr.length;i++){
             if(arr[i].checked==true){
                if(flag==0){
                  arr_orderId = arr_orderId + arr[i].id;
                  flag=1;
                  }else{
                  arr_orderId = arr_orderId+","+arr[i].id;
                  }
             }           
          }
          return arr_orderId;        
       } 
        
       function submitOrders(){
           var arr_orderId = getSelectedOrderId();
           if(arr_orderId==""){
               alert("您还没有勾选任何商品哦~");
           }else{
               document.getElementById("txt_test").value = arr_orderId;
               document.form1.submit();
           }
       }
       function calculate() {
          arr   =   document.getElementsByName('chk');
          price_arr = document.getElementsByName('btn_name_sum');
          //_table = document.getgetElementById('tab_table');
          var sum=0;
          for(var i=0;i<arr.length;i++){
             if(arr[i].checked==true){
              //  sum = sum+_table[i][7].value;
                sum = sum+parseFloat(price_arr[i].value);
             }           
          }
          document.getElementById('lab_totalSum').interHTML = sum;
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
		
		function getAccount(){
		  var value="";
		  var radio=document.getElementsByName("ra_account");
		  for(var i=0;i<radio.length;i++){
			if(radio[i].checked==true){
			  value=radio[i].value;
			  break;
			}
		  }
		  return value;
       }
		
		function checkout(){
		    var username = document.getElementById("showName").value;
			var account_id = getAccount();
			if(account_id==""){
			  alert("请选择银行账号！");
			}else{
				var check_ = document.getElementById("btn_check_").value;
				var order_id = document.getElementById("btn_order_id").value;
				document.getElementById("account_id").value = account_id;
	
				if(username != "") {
	                //alert("check_ = "+check_);
				    if(check_=="0"){
				       //alert("进入0 ");
					   document.form1.action = "checkoutAction?order_id="+order_id;
					   document.form1.submit();
					}else if(check_=="1"){
					  // alert("进入1 ");
					   document.form1.action = "checkoutAction_?order_id="+order_id;
					   document.form1.submit();
					}
				} else {
				alert("请先登录!");
					window.location.href="/E-Mall/login.jsp";
				}
			}
		}
	</script>

  </head>
  
  <body>
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
            <li><a href="#">我的E-Mall</a></li>
		    <li class="separator">|</li>
            <li><a href="#">我的收藏</a></li>
		    <li class="separator">|</li>
          </ul>
        </nav><!-- .private -->
      </div><!-- .grid_6 -->
    </header><!-- #branding -->
    
    <aside id="community_poll" style="margin-left:150px">
		     <h3>订单结算</h3>

		     <h4>选择支付的账号</h4>

		     <div class="poll">
			<ul>
			<c:forEach items="${accountList}" var="account">
			    <li><input class="niceRadio" type="radio" name="ra_account" value="${account.account_id}" />${account.account_name}</li>
			</c:forEach>
			</ul>
             <input type="button" name="btn_check_" id="btn_check_" value="${check_}" style="display:none">
             <input type="button" name="btn_order_id" id="btn_order_id" value="${order_id}" style="display:none">
            <form name="form1" action="" method="post">
				<input type="password" name="account_password"  placeholder="输入你的银行账户密码..."/>
				<input type="text" name="account_id" id="account_id" value="" style="display: none"/>
				<input class="vote" type="button" onclick="checkout()" style="background-image:url(images/querenfukuan.png)" />
			</form>
		     </div>
	</aside><!-- #community_poll -->
    
  </div><!-- .container_12 -->
  <div id="footer" align="center">
	        <p style="height:50px"></p>
			<div>Copyright 2008-2013 长沙理工大学 薛倩，All Rights Reserved ICP证：湘 B2-20080329</div>
	</div>
  
  
  
  </body>
</html>
