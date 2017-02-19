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
    <script src="/E-Mall/sellor/js/jquery-1.7.min.js" type="text/javascript"></script>
	<script src="/E-Mall/sellor/js/Area.js" type="text/javascript"></script>
	<script src="/E-Mall/sellor/js/AreaData_min1.js" type="text/javascript"></script>
	<script type="text/javascript">
	$(function (){
		initComplexArea('seachprov', 'seachcity', 'seachdistrict', area_array, sub_array, '44', '0', '0');
	});
	
	//得到地区码
	function getAreaID(){
		var area = 0;          
		if($("#seachdistrict").val() != "0"){
			area = $("#seachdistrict").val();                
		}else if ($("#seachcity").val() != "0"){
			area = $("#seachcity").val();
		}else{
			area = $("#seachprov").val();
		}
		return area;
	}
	
	function showAreaID() {
		//地区码
		var areaID = getAreaID();
		//地区名
		var areaName = getAreaNamebyID(areaID) ;
		alert("您选择的地区码：" + areaID + "      地区名：" + areaName);            
	}
	
	//根据地区码查询地区名
	function getAreaNamebyID(areaID){
		var areaName = "";
		if(areaID.length == 2){
			areaName = area_array[areaID];
		}else if(areaID.length == 4){
			var index1 = areaID.substring(0, 2);
			areaName = area_array[index1] + " " + sub_array[index1][areaID];
		}else if(areaID.length == 6){
			var index1 = areaID.substring(0, 2);
			var index2 = areaID.substring(0, 4);
			areaName = area_array[index1] + " " + sub_array[index1][index2] + " " + sub_arr[index2][areaID];
		}
		return areaName;
	}
	
	function check(){
	var typeid = getAreaID();
	var goodsname = document.getElementById("goods_name").value;
	var goodsprice = document.getElementById("goods_price").value;
	var discountrate = document.getElementById("discount_rate").value;
    var stockquantity = document.getElementById("stock_quantity").value;
    if((goodsname=="")||(goodsprice=="")||(discountrate=="")||(stockquantity=="")||(typeid=="")){
       alert("每个空都要填哦~");
       if(typeid<"9"){
          alert("请选择商品类型！");
       }
    }else{
				 document.myform.action = "/E-Mall/addGoodsAction?type_id="+typeid;
		         document.myform.submit(); 
	}
	}
	</script>
	<script type="text/javascript">
		var msg="${requestScope.tipMessage_}";
		if(msg!=""){
		alert(msg);
		}
	</script>
</head>
<body>
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
                    <a href="#"><i class="icon-font">&#xe018;</i>物流管理</a>
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
            <div class="crumb-list"><i class="icon-font"></i><a href="index_2.jsp">首页</a><span class="crumb-step">&gt;</span><a class="crumb-name" href="#">商品管理</a><span class="crumb-step">&gt;</span><span>新增商品</span></div>
        </div>
        <div class="result-wrap">
            <div class="result-content">
                <form action="" method="post" id="myform" name="myform" enctype="multipart/form-data">
                    <table class="insert-tab" width="100%">
                        <tbody><tr>
                            <th width="120"><i class="require-red">*</i>分类：</th>
                            <td>
                                <select id="seachprov" name="seachprov" onChange="changeComplexProvince(this.value, sub_array, 'seachcity', '');"></select>&nbsp;&nbsp;
								<select id="seachcity" name="homecity" ></select>&nbsp;&nbsp;
								<span id="seachdistrict_div" style="display: none"><select id="seachdistrict" name="seachdistrict"></select></span>
                                
                            </td>
                        </tr>
                            <tr>
                                <th><i class="require-red">*</i>商品名称：</th>
                                <td>
                                    <input class="common-text required" id="goods_name" name="goods_name" size="50" value="" type="text">
                                </td>
                            </tr>
                            <tr>
                                <th><i class="require-red">*</i>价格：</th>
                                <td><input class="common-text" name="goods_price" id="goods_price" size="50" value="" type="text"></td>
                            </tr>
                            <tr>
                                <th><i class="require-red">*</i>打折率(0~1)：</th>
                                <td><input class="common-text" name="discount_rate" id="discount_rate" size="50" value="" type="text"></td>
                            </tr>
                            <tr>
                                <th><i class="require-red">*</i>库存量：</th>
                                <td><input class="common-text" name="stock_quantity" id="stock_quantity" size="50" value="" type="text"></td>
                            </tr>
                            <tr>
                                <th><i class="require-red">*</i>缩略图：</th>
                                <td><input name="file" id="file" type="file" accept=".png,.jpe,.jpg,.jpeg"></td>
                            </tr>
                            <tr>
                                <th>商品详情：</th>
                                <td><textarea name="goods_detail" class="common-textarea" id="goods_detail" cols="30" style="width: 98%;" rows="10"></textarea></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <input class="btn btn-primary btn6 mr10" value="提交" type="button" onclick="check()">
                                    <input class="btn btn6" onClick="history.go(-1)" value="返回" type="button">
                                </td>
                            </tr>
                        </tbody></table>
                </form>
            </div>
        </div>

    </div>
    <!--/main-->
</div>
</body>
</html>