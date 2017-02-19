<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>后台管理</title>
    <link rel="stylesheet" type="text/css" href="/E-Mall/sellor/css/common.css"/>
    <link rel="stylesheet" type="text/css" href="/E-Mall/sellor/css/main.css"/>
    <script type="text/javascript">
		function isLogin() {
		var userName = document.getElementById("showName").value;
		if(userName == "") {
			alert("请先登录!");
			window.location.href="/E-Mall/login.jsp";
		  }
		}
		
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
       
       function searchGoods(){
          var g = document.getElementById('keywords').value;
         var obj=document.getElementById('search-sort');
          var text=obj.options[obj.selectedIndex].text;//获取文本
           if(text=="商品编号"){
              var url = "/E-Mall/searchSellorGoodsByIdAction?goods_id="+g;
              window.location.href=url;
           }else{
              var url = "/E-Mall/searchSellorGoodsByNameAction?goods_name="+g;
              window.location.href=url;
           }
       }
	</script>
</head>
<body onload="isLogin()">
<button id="showName" value="${user.user_name }" style="display: none"></button>
<div class="topbar-wrap white">
    <div class="topbar-inner clearfix">
        <div class="topbar-logo-wrap clearfix">
            <h1 class="topbar-logo none"><a href="index_2.jsp" class="navbar-brand">后台管理</a></h1>
            <ul class="navbar-list clearfix">
                <li><a class="on" href="index_2.jsp">首页</a></li>
                <li><a href="/E-Mall/index.jsp" target="_blank">网站首页</a></li>
            </ul>
        </div>
        <div class="top-info-wrap">
            <ul class="top-info-list clearfix">
                <li><a href="#">${user.user_name }</a></li>
                <li><a href="#">修改密码</a></li>
                <li><a href="exitAction">退出</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container clearfix">
    <div class="sidebar-wrap">
        <div class="sidebar-title">
            <h3>菜单</h3>
        </div>
        <div class="sidebar-content">
            <ul class="sidebar-list">
                <li>
                    <a href="#"><i class="icon-font">&#xe003;</i>商品管理</a>
                    <ul class="sub-menu">
                        <li><a href="showSellorGoodsAction"><i class="icon-font">&#xe008;</i>查看商品</a></li>
                        <li><a href="#"><i class="icon-font">&#xe002;</i>编辑商品</a></li>
                        <li><a href="#"><i class="icon-font">&#xe006;</i>分类管理</a></li>
                        <li><a href="#"><i class="icon-font">&#xe012;</i>评论管理</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe018;</i>订单管理</a>
                    <ul class="sub-menu">
                        <li><a href="showSellorOrderAction?state_id=2"><i class="icon-font">&#xe017;</i>待发货的订单</a></li>
                        <li><a href="showSellorOrderAction?state_id=3"><i class="icon-font">&#xe039;</i>已发货的订单</a></li>
                        <li><a href="showSellorOrderAction?state_id=4"><i class="icon-font">&#xe023;</i>待评价的订单</a></li>
                        <li><a href="showSellorOrderAction?state_id=5"><i class="icon-font">&#xe025;</i>已完成的订单</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe009;</i>顾客管理</a>
                    <ul class="sub-menu">
                        <li><a href="#"><i class="icon-font">&#xe003;</i>我的顾客</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!--/sidebar-->
    
    <div class="main-wrap">

        <div class="crumb-wrap">
            <div class="crumb-list"><i class="icon-font"></i><a href="index_2.jsp">首页</a><span class="crumb-step">&gt;</span><span class="crumb-name">商品管理</span></div>
        </div>
        <div class="search-wrap">
            <div class="search-content">

                    <table class="search-tab">
                        <tr>
                            <th width="120">选择分类:</th>
                            <td>
                                <select name="search-sort" id="search-sort">
                                    <option value="goods_id">商品编号</option>
                                    <option value="goods_name">商品名称</option>
                                </select>
                            </td>
                            <th width="70">关键字:</th>
                            <td><input class="common-text" placeholder="关键字" name="keywords" value="" id="keywords" type="text"></td>
                            <td><input class="btn btn-primary btn2" name="sub" value="查询" type="button" onclick="searchGoods()"></td>
                        </tr>
                    </table>

            </div>
        </div>
        <div class="result-wrap">
            <form name="myform" id="myform" method="post">
                <div class="result-title">
                    <div class="result-list">
                        <a href="/E-Mall/sellor/add_goods.jsp"><i class="icon-font"></i>新增商品</a>
                        <a id="batchDel" href="javascript:void(0)"><i class="icon-font"></i>批量删除</a>
                        <a id="updateOrd" href="javascript:void(0)"><i class="icon-font"></i>更新排序</a>
                    </div>
                </div>
                <div class="result-content">
                    <table class="result-tab" width="100%">
                        <tr>
                            <th class="tc" width="5%"><input class="allChoose" name="checkAll" id="checkAll" type="checkbox" onclick="selectAll()"></th>
                            <th></th>
                            <th>编号</th>
                            <th>名称</th>
                            <th>价格</th>
                            <th>打折率</th>
                            <th>库存</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                        <c:forEach items="${sellor_goodsList }" var="s_goods">
                        <tr>
	                            <td class="tc"><input name="chk" id="${s_goods.goods.goods_id}" type="checkbox"></td>
	                            <td title="${s_goods.goods.goods_name}" style="height:80px;width:70px">
	                                 <a href="/E-Mall/searchGoodsByIdAction?goods_id=${s_goods.goods.goods_id}" class="prev_cart">
	                                    <img src="/E-Mall/images/goods-image/w-clothes/dress/${s_goods.goods.goods_image}" alt="" title="" style="height:80px;width:70px"/>
	                                 </a>
	                            </td>
	                            <td>${s_goods.goods.goods_id}</td>
	                            <td>${s_goods.goods.goods_name}</td>
	                            <td>${s_goods.goods.goods_price}</td>
	                            <td>${s_goods.goods.discount_rate}</td>
	                            <td>${s_goods.stock_quantity}</td>
	                            <td>${s_goods.update_time}</td>
	                            <td>
	                                <a class="link-update" href="#">修改</a>
	                                <a class="link-del" href="#">删除</a>
	                            </td>
                         </tr>
                         </c:forEach>
                       
                    </table>
                </div>
            </form>
        </div>
    </div>
    <!--/main-->
</div>
</body>
</html>