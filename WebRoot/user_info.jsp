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
    
    <title>个人资料</title>
    <style type="text/css">
     body{
        font-family:微软雅黑;
        font-size:13px;
     }
     div#first{
        margin-top:30px;
        margin-left:300px;
     }
     div#last{
        margin-top:30px;
        margin-left:300px;
        display:none;
     }
     .style_text{
        font-family:微软雅黑;
        font-size:14px;
        width:200px;
        height:30px;
     }
     .style_btn{
        font-family:微软雅黑;
        font-size:14px;
        width:80px;
        height:30px;
     }
     .style_td{
        width:400px;
        height:60px;
     }
    </style>
    <script type="text/javascript">
      function checkPassword(){
	      var input_pw = document.getElementById("txt_oldpassword").value;
	      var password = document.getElementById("btn_test").value;
          if(input_pw == password){
             first.style.display="none";
             last.style.display = "block";
          }else{
             error_pic.style.display = "block";
          }
      }
      function check(){
        	var pw1 = document.getElementById("txt_password1").value;
			var pw2 = document.getElementById("txt_password2").value;
		    if((pw1=="")||(pw2=="")){
		       alert("每个空都要填哦~");
		    }else{
				if(pw1==pw2){	
					document.form1.submit();
				}else{
				   alert("两次输入的密码不一致！");	
				}
			}
      }
    </script>
	<script type="text/javascript">
		var msg="${requestScope.tipMessage}";
		if(msg!=""){
		alert(msg);
		}
	</script>
  </head>
  
  <body>
     <div id="first">
     
           <table> 
             <tr>
                <td class="style_td"><input type="button" name="btn_test" id="btn_test" value="${user.password}"  style="display:none"/></td>
             </tr>
             <tr>
                <td class="style_td" >请输入旧密码：
                <input type="password" name="txt_oldpassword" id="txt_oldpassword"  class="style_text"/>
		        <img name="error_pic" alt="" src="/E-Mall/images/old_password_error.jpg" style="display:none;width:80px;height:30px"/>
		        </td>
             </tr>
		     <tr>
		        <td class="style_td"><input type="button" name = "nextStep"  onclick="checkPassword()" value="下一步" class="style_btn"/></td>
		     </tr>
		   </table>    
     </div>
     <div id="last">
         <form action="updatePasswordAction" method="post" name="form1">
         <table>
         <tr>
             <td class="style_td">用户名：&nbsp;&nbsp;<input type="text" name="txt_ueserName" value="${user.user_name}" class="style_text" disabled/></td>
         </tr>
         <tr>
	         <td class="style_td">新密码：&nbsp;&nbsp;<input type="password" name="txt_password1" id="txt_password1" class="style_text"/></td>
	     </tr>
	     <tr>
		     <td class="style_td">确认密码：<input type="password" name="txt_password2" id="txt_password2" class="style_text"/></td>
		 </tr>
		 <tr>
		     <td class="style_td"><input type="button" name = "nextStep"  value="提交" class="style_btn" onclick="check()"/></td>
		 </tr>
	    </table> 
	     </form>
     </div>
  </body>
</html>
