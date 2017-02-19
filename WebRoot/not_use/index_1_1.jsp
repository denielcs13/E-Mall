<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index_1_1.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <link rel="stylesheet" type="text/css" href="css/common.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
  </head>
  
  <body>
   <div class="main-wrap">
        <div class="crumb-wrap">
            <div class="crumb-list"><i class="icon-font">&#xe06b;</i><span>欢迎在E-Mall上开店，你值得拥有。</span></div>
        </div>
        <div class="result-wrap">
            <div class="result-title">
                <h1 align="center">开店规则</h1>
                
            </div>
        </div>
        <div class="result-wrap">
            <div class="result-content">
                <ul class="sys-info-list">
                    <li>
                        <span class="res-info"><strong>1、开店资格条件判断：</strong></span>
                    </li>
                    <li>
                        <span class="res-info">
                        商城工作人员无法创建E-Mall店铺
						<br/>一个身份证只能创建一个E-Mall店铺
						<br/>同账户如创建过U站或其他站点则无法创建E-Mall店铺，可更换账户开店
						<br/>同账户如创建过天猫店铺则无法创建E-Mall店铺，可更换账户开店
						<br/>同账户如在1688有过经营行为（发过供应产品信息、下单订购诚信通服务、卖家发起订单、报价、下单订购实地认证、开通旺铺、企业账户注册入口注册的企业账户）则无法创建E-Mall店铺，可更换账户开店
						<br/>E-Mall账户如果违规被E-Mall处罚永久禁止创建店铺，则无法创建E-Mall店铺</span>
                    </li>
                    <li>
                        <span class="res-info"><strong>2、店铺创建成功后会出现的三种店铺异常规则：</strong></span>
                    </li>
                    <li>
                        <span class="res-info">
                        A、出售中的宝贝数量连续3周为0件，系统会发送旺旺及邮件提醒您“宝贝数量连续3周为0件，必须发布宝贝，否则您的店铺将有可能暂时释放”； 
				   <br/>B、出售中的宝贝数量连续5周为0件，店铺会暂时释放，此时点击“查看我的店铺”店铺不能正常显示；系统会发送旺旺及邮件告诉您“店铺已经暂时释放，但是我们将为您的店铺名保留一周，请任意发布一件闲置宝贝或上架仓库中的宝贝，24小时后，店铺即可恢复之前开店状态”， 店铺激活后店铺信誉、装修、订购的服务等都不受影响；
				   <br/>C、出售中的宝贝数量连续6周为0件，店铺会彻底释放，系统会发送旺旺及邮件告诉您“店铺已经彻底释放，任何人都可以申请并使用您的店铺名称”。您需要登陆卖家中心操作激活店铺，按照提示完成指定操作，店铺就可重新开张。店铺激活后店铺信誉、装修、订购的服务等都不受影响；</span>
                    </li>
                    <li>
                       <span class="res-info"><strong>3、E-Mall开店认证注意事项：</strong></span>
                    </li>
                    <li>
                        <span class="res-info">
                        当您完成支付宝实名认证操作之后，请返回E-Mall开店页面，点击“立即认证”后，您会进入E-Mall开店认证的页面，请仔细阅读提示信息并严格按要求进行填写</span>
                    </li>
                    <li>
                        <input class="btn btn-primary btn6 mr10" value="我要开店" type="submit">
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </body>
</html>
