package cn.com.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;

import cn.com.service.OrderService;
import cn.com.service.UserService;
import cn.com.service.impl.OrderServiceImpl;
import cn.com.service.impl.UserServiceImpl;
import cn.com.util.FileEveryDaySerialNumber;
import cn.com.util.SerialNumber;
import cn.com.vo.Goods_Order;
import cn.com.vo.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;


public class UserAction extends ActionSupport implements SessionAware {
       private String user_id;
       private String user_name;
       private String password;
       private String role_id;
       private String email;
       private String txt_userName;
       private String txt_password1;
       private String tipMessage;
       
       private List<Goods_Order> cartList_G_O = new ArrayList();
       private List<Goods_Order> cartList_G_O_R = new ArrayList();
       
       private User user = new User();
       
       UserService userService = new UserServiceImpl();
       OrderService orderService = new OrderServiceImpl();
       
       private static Map<String, Object> session;
       
       SerialNumber serial = new FileEveryDaySerialNumber(4, "UserSerialNumber.dat");
       
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole_id() {
		return role_id;
	}
	public void setRole_id(String role_id) {
		this.role_id = role_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getTxt_userName() {
		return txt_userName;
	}
	public void setTxt_userName(String txt_userName) {
		this.txt_userName = txt_userName;
	}
	public String getTxt_password1() {
		return txt_password1;
	}
	public void setTxt_password1(String txt_password1) {
		this.txt_password1 = txt_password1;
	}
	public String getTipMessage() {
		return tipMessage;
	}
	public void setTipMessage(String tipMessage) {
		this.tipMessage = tipMessage;
	}
	@SuppressWarnings("unchecked")
	public String loginAction() { 

		user.setUser_name(user_name);
		user.setPassword(password);
		Map request=(Map)ActionContext.getContext().get("request");
		if(userService.getIsValidate(user)){
			user = userService.getUserByUser_name(user_name);
			//System.out.println("user.getRole_id() = "+user.getRole_id());
	   	    session.put("user", user);
	   	    
	   	    cartList_G_O = orderService.getOrdersList(user_name, "0");
	   	    if(cartList_G_O.size()>0){
		    	int n = cartList_G_O.size();
		    	cartList_G_O_R.add(cartList_G_O.get(0));
		    	if(n>=2){
		    	  cartList_G_O_R.add(cartList_G_O.get(1));
		    	}
		    	session.put("cartList_R", cartList_G_O_R);//存session
	   	    }
	   	    
	   	    return SUCCESS;
		}else{
			tipMessage = "登录失败，用户名或密码错误！";
			request.put("tipMessage", tipMessage);
			return INPUT;
		}
	}
	
	@SuppressWarnings("unchecked")
	public String registerAction(){
		user.setUser_id(serial.getSerialNumber("US"));
		user.setUser_name(user_name);
		user.setPassword(password);
		user.setRole_id("1");
		user.setEmail(email);
		System.out.println(user.getUser_id());
		System.out.println(user.getUser_name());
		System.out.println(user.getPassword());
		System.out.println(user.getRole_id());
		System.out.println(user.getEmail());
		
		Map request=(Map)ActionContext.getContext().get("request");
		if(userService.getRegister(user)){
			tipMessage = "恭喜您，注册成功！";
			request.put("tipMessage", tipMessage);
			session.put("user", user);
			return SUCCESS;
		}else{
			tipMessage = "注册失败了，请重试！";
			request.put("tipMessage", tipMessage);
			return INPUT;
		}
	}
	
	@SuppressWarnings("unchecked")
	public String updatePasswordAction() throws IOException{ 
		
		 /*response.setContentType("text/html;charset=UTF-8");
         response.setCharacterEncoding("UTF-8");//防止弹出的信息出现乱码
         PrintWriter out = response.getWriter();
         System.out.println("response = "+response);*/
         
		 Map request=(Map)ActionContext.getContext().get("request");

		user_name = ((User)session.get("user")).getUser_name();
		password = (String)request.get("txt_password1");
		
		boolean q = userService.getIsUpdatePassword(user_name, password);
		if(q){
            user = (User)session.get("user");
			user.setPassword(password);
			session.put("user", user);
			
			tipMessage = "修改成功！";
			request.put("tipMessage", tipMessage);
			System.out.println("修改成功！");
			return SUCCESS;
		}else{
			tipMessage = "修改成功！";
			return SUCCESS;
		}	
	}
	
	public String toBeSellorAction(){
		user = (User)session.get("user");
		if(userService.isToBeSellor(user)){
			return SUCCESS;
		}else{
			return INPUT;
		}
	}
	
	
	public String exitAction(){
		session.remove("user");
		session.remove("cartList_R");//清空session
		
		return SUCCESS;
	}
	
	public void setSession(Map<String, Object> session) {
		this.session = session;	
	}
       
}
