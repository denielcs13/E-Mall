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

  <title>我的订单</title>

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
		
		function check(order_id){
			 window.open("accountAction?order_id="+order_id);
	         window.history.back(-1);
		}
		
		function receiptGoods(order_id){
		    if(confirm("请确认您是否收到货？"))
		    {
		        var url="receiptGoodsAction?order_id="+order_id;
		        $.get(url,function(data,status){
				 if(data=="success"){
				 	 alert("收货成功！");
				 	 parent.location.reload();
				 }else{
				 	 alert("收货失败！");
				 }
			 }); 
		    }     
		}
		
		function comment(order_id){
		      window.open("commentAction?order_id="+order_id);
		}
	</script>

</head>
<body>


  <div class="grid_9" >
	<div id="wrapper_tab" class="tab1">
		<a href="#" class="tab1 tab_link">所有订单</a>
		<a href="#" class="tab2 tab_link">待支付</a>
		<a href="#" class="tab3 tab_link">待发货</a>
		<a href="#" class="tab4 tab_link">待收货</a>
		<a href="#" class="tab5 tab_link">待评价</a>
		<a href="#" class="tab6 tab_link">已完成</a>
        <a href="#">*</a>
<div class="tab1 tab_body">
						
 <section>
    <div >
       <div class="grid_12">
       <table class="cart_product">
	      <tr>
	         <th><input type="checkBox" name="checkAll" id="checkAll"  value="全选" onclick="selectAll()"></th>
		     <th  class="images"></th>
		     <th class="bg price">商品信息</th>
		     <th class="qty">单价</th>
		     <th class="bg price">数量</th>
		     <th class="qty">总价</th>
		     <th class="bg price">提交时间</th>
		     <th class="qty">操作</th>
	      </tr>

	      <c:forEach items="${ordersList_all}" var="goods_order">
		      <tr>
		         <td>
		         <input type="checkBox" name="chk" id="${goods_order.order.order_id}" onclick="calculate()">
		         </td>
			     <td class="images">
                    <a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}" target="_blank">
	                   <img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" />
					</a>
			     </td>
			     <td class="bg price">${goods_order.goods.goods_name}<br/>${goods_order.order.goods_color}<br/>${goods_order.order.goods_size}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></td>
			     <td class="bg price">${goods_order.order.count}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.order.total_price}"/></td>
			     <td class="bg price">${goods_order.order.order_time}</td>  
			     <td class="qty">

			     <c:choose>
                     <c:when test="${goods_order.order.state_id eq '1'}">  
                       <input type="button" style="background-image:url(images/check.png);width:50px;height:20px" onclick="check('${goods_order.order.order_id}')">
                     </c:when>
                     <c:when test="${goods_order.order.state_id eq '2'}">  
                       待发货
                     </c:when>
                     <c:when test="${goods_order.order.state_id eq '3'}">  
                       <input type="button" style="background-image:url(images/shouhuo.png);width:50px;height:20px" onclick="receiptGoods('${goods_order.order.order_id}')">
                     </c:when>
                     <c:when test="${goods_order.order.state_id eq '4'}">  
                       <input type="button" style="background-image:url(images/pingjia.png);width:50px;height:20px" onclick="comment('${goods_order.order.order_id}')">
                     </c:when>
                     <c:when test="${goods_order.order.state_id eq '5'}">  
                       已完成
                     </c:when>
                 </c:choose>

                 </td>
			     
		      </tr>
	      </c:forEach>
       </table>

       </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </section><!-- #main -->
						
   <div class="clear"></div>
</div><!-- .tab1 .tab_body -->

<div class="tab2 tab_body">
									
 <section>
    <div>
       <div class="grid_12">
       <table class="cart_product">
	      <tr>
	         <th><input type="checkBox" name="checkAll" id="checkAll" value="全选" onclick="selectAll()"></th>
		     <th class="images"></th>
		     <th class="bg price">商品信息</th>
		     <th class="qty">单价</th>
		     <th class="bg price">数量</th>
		     <th class="qty">总价</th>
		     <th class="bg price">提交时间</th>
		     <th class="qty">操作</th>
	      </tr>

	      <c:forEach items="${ordersList_1}" var="goods_order">
		      <tr>
		         <td>
		         <input type="checkBox" name="chk" id="${goods_order.order.order_id}" onclick="calculate()">
		         </td>
			     <td class="images">

			        <s:url var="url" action="searchGoodsByIdAction">
					<s:param name="goods_id"  />
					</s:url>
					<!--使用上面定义的url-->
					<a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}">
	                   <img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" />
					</a>

			     </td>
			     <td class="bg price">${goods_order.goods.goods_name}<br/>${goods_order.order.goods_color}<br/>${goods_order.order.goods_size}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></td>
			     <td class="bg price">${goods_order.order.count}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.order.total_price}"/></td>
			     <td class="bg price">${goods_order.order.order_time}</td>  
			     <td class="qty"><input type="button" name="btn_check" style="background-image:url(images/check.png);width:50px;height:20px" onclick="check('${goods_order.order.order_id}')"></td>  
			     
		      </tr>
	      </c:forEach>
       </table>

       </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </section><!-- #main -->
					
					
	<div class="clear"></div>
</div><!-- .tab2 .tab_body -->

<div class="tab3 tab_body">
				
  <section>
    <div>
       <div class="grid_12">
       <table class="cart_product">
	      <tr>
	         <th><input type="checkBox" name="checkAll" id="checkAll" value="全选" onclick="selectAll()"></th>
		     <th class="images"></th>
		     <th class="bg price">商品信息</th>
		     <th class="qty">单价</th>
		     <th class="bg price">数量</th>
		     <th class="qty">总价</th>
		     <th class="bg price">提交时间</th>
		     <th class="qty">操作</th>
	      </tr>

	      <c:forEach items="${ordersList_2}" var="goods_order">
		      <tr>
		         <td>
		         <input type="checkBox" name="chk" id="${goods_order.order.order_id}" onclick="calculate()">
		         </td>
			     <td class="images">

			        <s:url var="url" action="searchGoodsByIdAction">
					<s:param name="goods_id"  />
					</s:url>
					<!--使用上面定义的url-->
					<a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}">
	                   <img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" />
					</a>

			     </td>
			     <td class="bg price">${goods_order.goods.goods_name}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></td>
			     <td class="bg price">${goods_order.order.count}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.order.total_price}"/></td>
			     <td class="bg price">${goods_order.order.order_time}</td>  
			     <td class="qty">待发货</td>  
			     
		      </tr>
	      </c:forEach>
       </table>

       </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </section><!-- #main -->
						
	<div class="clear"></div>
 </div><!-- .tab3 .tab_body -->
 
 <div class="tab4 tab_body">
				
  <section>
    <div>
       <div class="grid_12">
       <table class="cart_product">
	      <tr>
	         <th><input type="checkBox" name="checkAll" id="checkAll" value="全选" onclick="selectAll()"></th>
		     <th class="images"></th>
		     <th class="bg price">商品信息</th>
		     <th class="qty">单价</th>
		     <th class="bg price">数量</th>
		     <th class="qty">总价</th>
		     <th class="bg price">提交时间</th>
		     <th class="qty">操作</th>
	      </tr>

	      <c:forEach items="${ordersList_3}" var="goods_order">
		      <tr>
		         <td>
		         <input type="checkBox" name="chk" id="${goods_order.order.order_id}" onclick="calculate()">
		         </td>
			     <td class="images">

			        <s:url var="url" action="searchGoodsByIdAction">
					<s:param name="goods_id"  />
					</s:url>
					<!--使用上面定义的url-->
					<a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}">
	                   <img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" />
					</a>

			     </td>
			     <td class="bg price">${goods_order.goods.goods_name}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></td>
			     <td class="bg price">${goods_order.order.count}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.order.total_price}"/></td>
			     <td class="bg price">${goods_order.order.order_time}</td>  
			     <td class="qty"><input type="button" name="btn_receiptGoods" style="background-image:url(images/shouhuo.png);width:50px;height:20px" onclick="receiptGoods('${goods_order.order.order_id}')"></td>  
			     
		      </tr>
	      </c:forEach>
       </table>

       </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </section><!-- #main -->
						
	<div class="clear"></div>
 </div><!-- .tab4 .tab_body -->
 
 
 <div class="tab5 tab_body">
				
  <section>
    <div>
       <div class="grid_12">
       <table class="cart_product">
	      <tr>
	         <th><input type="checkBox" name="checkAll" id="checkAll" value="全选" onclick="selectAll()"></th>
		     <th class="images"></th>
		     <th class="bg price">商品信息</th>
		     <th class="qty">单价</th>
		     <th class="bg price">数量</th>
		     <th class="qty">总价</th>
		     <th class="bg price">提交时间</th>
		     <th class="qty">操作</th>
	      </tr>

	      <c:forEach items="${ordersList_4}" var="goods_order">
		      <tr>
		         <td>
		         <input type="checkBox" name="chk" id="${goods_order.order.order_id}" onclick="calculate()">
		         </td>
			     <td class="images">

			        <s:url var="url" action="searchGoodsByIdAction">
					<s:param name="goods_id"  />
					</s:url>
					<!--使用上面定义的url-->
					<a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}">
	                   <img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" />
					</a>

			     </td>
			     <td class="bg price">${goods_order.goods.goods_name}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></td>
			     <td class="bg price">${goods_order.order.count}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.order.total_price}"/></td>
			     <td class="bg price">${goods_order.order.order_time}</td>  
			     <td class="qty"><input type="button" name="btn_comment" style="background-image:url(images/pingjia.png);width:50px;height:20px" onclick="comment('${goods_order.order.order_id}')"></td>  
			     
		      </tr>
	      </c:forEach>
       </table>

       </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </section><!-- #main -->
						
	<div class="clear"></div>
 </div><!-- .tab5 .tab_body -->
 
  <div class="tab6 tab_body">
				
  <section>
    <div>
       <div class="grid_12">
       <table class="cart_product">
	      <tr>
	         <th><input type="checkBox" name="checkAll" id="checkAll" value="全选" onclick="selectAll()"></th>
		     <th class="images"></th>
		     <th class="bg price">商品信息</th>
		     <th class="qty">单价</th>
		     <th class="bg price">数量</th>
		     <th class="qty">总价</th>
		     <th class="bg price">提交时间</th>
		     <th class="qty">操作</th>
	      </tr>

	      <c:forEach items="${ordersList_5}" var="goods_order">
		      <tr>
		         <td>
		         <input type="checkBox" name="chk" id="${goods_order.order.order_id}" onclick="calculate()">
		         </td>
			     <td class="images">

			        <s:url var="url" action="searchGoodsByIdAction">
					<s:param name="goods_id"  />
					</s:url>
					<!--使用上面定义的url-->
					<a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}">
	                   <img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" />
					</a>

			     </td>
			     <td class="bg price">${goods_order.goods.goods_name}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.goods.goods_price*goods_order.goods.discount_rate}"/></td>
			     <td class="bg price">${goods_order.order.count}</td>
			     <td class="qty"><fmt:formatNumber pattern="#.#" type="number" value="${goods_order.order.total_price}"/></td>
			     <td class="bg price">${goods_order.order.order_time}</td>  
			     <td class="qty">已完成</td>  
			     
		      </tr>
	      </c:forEach>
       </table>

       </div><!-- .grid_12 -->
    </div><!-- .container_12 -->
  </section><!-- #main -->
						
	<div class="clear"></div>
 </div><!-- .tab6 .tab_body -->
 
   <div class="clear"></div>
</div><!-- #wrapper_tab -->
	<div class="clear"></div>
</div><!-- .grid_9 -->
</body>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
</html>
