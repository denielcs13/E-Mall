<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>卖家中心</title>
    <link rel="stylesheet" type="text/css" href="css/common.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>

<script type="text/javascript">
		function isLogin() {
			var userName = document.getElementById("showName").value;
			if(userName == "") {
				alert("请先登录!");
				window.location.href="/E-Mall/login.jsp";
			  } 
		}
	</script>
</head>
<body onload="isLogin()">
<button id="showName" value="${user.user_name }" style="display: none"></button>
<div class="topbar-wrap white">
    <div class="topbar-inner clearfix">
        <div class="topbar-logo-wrap clearfix">
            <h1 class="topbar-logo none"><a href="index_1.jsp" class="navbar-brand">后台管理</a></h1>
            <ul class="navbar-list clearfix">
                <li><a class="on" href="index_1.jsp">首页</a></li>
                <li><a href="/E-Mall/index.jsp" target="_blank">网站首页</a></li>
            </ul>
        </div>
        <div class="top-info-wrap">
            <ul class="top-info-list clearfix">
                <li><a href="#">${user.user_name }</a></li>
                <li><a href="#">修改密码</a></li>
                <li><a href="#">退出</a></li>
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
                    <a href="#"><i class="icon-font">&#xe018;</i>物流管理</a>
                    <ul class="sub-menu">
                        <li><a href="showSellorOrderAction?state_id=2"><i class="icon-font">&#xe017;</i>待发货的订单</a></li>
                        <li><a href="showSellorOrderAction?state_id=3"><i class="icon-font">&#xe039;</i>已发货的订单</a></li>
                        <li><a href="showSellorOrderAction?state_id=4"><i class="icon-font">&#xe023;</i>待评价的订单</a></li>
                        <li><a href="showSellorOrderAction?state_id=5"><i class="icon-font">&#xe025;</i>已完成的订单</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe009;</i>用户管理</a>
                    <ul class="sub-menu">
                        <li><a href="#"><i class="icon-font">&#xe003;</i>我的客户</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!--/sidebar-->
    
    
    
    
    <div class="main-wrap">
        <div class="crumb-wrap">
            <div class="crumb-list"><i class="icon-font">&#xe06b;</i><span>欢迎在E-Mall上开店，你值得拥有。</span></div>
        </div>
        
    </div>
    <!--/main-->
</div>
</body>
</html>