package cn.com.action;

import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import cn.com.service.AccountService;
import cn.com.service.OrderService;
import cn.com.service.SellorService;
import cn.com.service.impl.AccountServiceImpl;
import cn.com.service.impl.OrderServiceImpl;
import cn.com.service.impl.SellorServiceImpl;
import cn.com.vo.Account;
import cn.com.vo.Goods_Order;
import cn.com.vo.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class AccountAction extends ActionSupport implements SessionAware{
	   private String account_id;
	   private String account_password;
	   private String user_name;
	   private double banlance;
	   private String account_name;
	   
	   private  Map<String, Object> session;
	   private String check_;
	   
	   private String order_id;
	   private float total_price;
	   
	   AccountService accountService = new AccountServiceImpl();
	   SellorService sellorService = new SellorServiceImpl();
	   OrderService orderService = new OrderServiceImpl();
	public String getAccount_id() {
		return account_id;
	}
	public void setAccount_id(String account_id) {
		this.account_id = account_id;
	}
	public String getAccount_password() {
		return account_password;
	}
	public void setAccount_password(String account_password) {
		this.account_password = account_password;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public double getBanlance() {
		return banlance;
	}
	public void setBanlance(double banlance) {
		this.banlance = banlance;
	}
   public String getAccount_name() {
		return account_name;
	}
	public void setAccount_name(String account_name) {
		this.account_name = account_name;
	}
    public String getOrder_id() {
		return order_id;
	}
	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}
	public float getTotal_price() {
		return total_price;
	}
	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}
	public String getCheck_() {
		return check_;
	}
	public void setCheck_(String check_) {
		this.check_ = check_;
	}
	@SuppressWarnings("unchecked")
	public String accountAction(){
		user_name = ((User)session.get("user")).getUser_name();
		List<Account> accountList = accountService.getAccountByUser_name(user_name);
		
		Map request=(Map)ActionContext.getContext().get("request");
    	request.put("accountList", accountList); //传给前台，前台可用EL表达式显示
    	request.put("check_", "1");
		return SUCCESS;
	}
@SuppressWarnings("unchecked")
public String checkoutAction(){
	   double total_sum = Double.parseDouble((String)session.get("total_sum"));
	   List<Goods_Order> g_o_list = (List<Goods_Order>)session.get("orderList_cmf");
	   if(accountService.isAccountValidate(account_id, account_password)&&accountService.checkout(account_id, total_sum)&&sellorService.updateState(g_o_list, "2")){
		   session.remove("total_sum");
		   session.remove("orderList_cmf");
		   return SUCCESS;
	   }else{
		   return INPUT;
	   }
   }
    public String checkoutAction_(){
    	System.out.println("order_id = "+order_id);
	   List<Goods_Order> g_o_list = orderService.getOrderByOrder_id(order_id);
	   if(accountService.isAccountValidate(account_id, account_password)&&accountService.checkout(account_id, total_price)&&sellorService.updateState(g_o_list, "2")){
		   return SUCCESS;
	   }else{
		   return INPUT;
	   }
    }
   public void setSession(Map<String, Object> session) {
		this.session = session;
	}
   }
