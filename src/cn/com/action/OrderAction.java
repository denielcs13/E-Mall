package cn.com.action;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;

import cn.com.service.AccountService;
import cn.com.service.AddressService;
import cn.com.service.GoodsService;
import cn.com.service.OrderService;
import cn.com.service.SellorService;
import cn.com.service.impl.AccountServiceImpl;
import cn.com.service.impl.AddressServiceImpl;
import cn.com.service.impl.GoodsServiceImpl;
import cn.com.service.impl.OrderServiceImpl;
import cn.com.service.impl.SellorServiceImpl;
import cn.com.util.FileEveryDaySerialNumber;
import cn.com.util.SerialNumber;
import cn.com.vo.Account;
import cn.com.vo.Address;
import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Order;
import cn.com.vo.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class OrderAction extends ActionSupport implements SessionAware{
	private String order_id;
    private String goods_id;
    private String user_name;
    private String goods_color;
    private String goods_size;
    private int count;
    private String state_id;
    private String order_time;
    private String address_id;
    private float total_price;
    private  Map<String, Object> session;
    private String tipMessage;
    private double total_sum = 0;
    private String check_;
    
    
    private List<Goods_Order> cartList_G_O = new ArrayList();
    private List<Goods_Order> cartList_G_O_R = new ArrayList();
    private List<Goods_Order> orderList_G_O = new ArrayList();
    private List<Order> ordersList = new ArrayList();
    private List<Address> addressList = new ArrayList();
    
    private static boolean isFirst = true;
    
    private String txt_test;
    
    GoodsService goodsService = new GoodsServiceImpl();
    OrderService orderService = new OrderServiceImpl();
    AddressService addressService = new AddressServiceImpl();
    AccountService accountService = new AccountServiceImpl();
    SellorService sellorService = new SellorServiceImpl();
    
    SerialNumber serial = new FileEveryDaySerialNumber(4, "OrderSerialNumber.dat");  
    
	public String getOrder_id() {
		return order_id;
	}
	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}
	public String getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(String goods_id) {
		this.goods_id = goods_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getGoods_color() {
		return goods_color;
	}
	public void setGoods_color(String goods_color) {
		this.goods_color = goods_color;
	}
	public String getGoods_size() {
		return goods_size;
	}
	public void setGoods_size(String goods_size) {
		this.goods_size = goods_size;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getState_id() {
		return state_id;
	}
	public void setState_id(String state_id) {
		this.state_id = state_id;
	}
	public String getOrder_time() {
		return order_time;
	}
	public void setOrder_time(String order_time) {
		this.order_time = order_time;
	}
	public String getAddress_id() {
		return address_id;
	}
	public void setAddress_id(String address_id) {
		this.address_id = address_id;
	}
    public float getTotal_price() {
		return total_price;
	}
	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}
	public String getTxt_test() {
		return txt_test;
	}
	public void setTxt_test(String txt_test) {
		this.txt_test = txt_test;
	}
	public String getTipMessage() {
		return tipMessage;
	}
	public void setTipMessage(String tipMessage) {
		this.tipMessage = tipMessage;
	}
	public double getTotal_sum() {
		return total_sum;
	}
	public void setTotal_sum(double total_sum) {
		this.total_sum = total_sum;
	}
	public String getCheck_() {
		return check_;
	}
	public void setCheck_(String check_) {
		this.check_ = check_;
	}
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String addToCartAction(){      //加入数据库，state_id=0

    	String order_time = getDate();
    	state_id = "0";
    	user_name = ((User) session.get("user")).getUser_name();
    		
    	Goods goods = goodsService.getGoodsSearchById(goods_id);
    	Order order = new Order(serial.getSerialNumber("OR"), goods_id, user_name, goods_color, goods_size, count,state_id, order_time,address_id,goods.getGoods_price()*goods.getDiscount_rate()*count);

    	if(orderService.addToCart(order)){

			cartList_G_O = orderService.getOrdersList(user_name, "0");
	    	int n = cartList_G_O.size();
	    	cartList_G_O_R.add(cartList_G_O.get(0));
	    	if(n>=2){
	    	  cartList_G_O_R.add(cartList_G_O.get(1));
	    	}
	    	session.put("cartList_R", cartList_G_O_R);//存session
	    	
            tipMessage = "success"; //传参到前台，利用Ajax，弹出“加入购物车成功！”并且停留在当前页面
            
    		return SUCCESS;
    	}else{
    		return INPUT;
    	}
    }

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String confirmOrderAction(){    //确定订单
		
		System.out.println("进入confirmOrderAction！");
		
		user_name = ((User) session.get("user")).getUser_name();
		addressList = addressService.getAddressByUser_name(user_name);

		orderList_G_O = orderService.getSubmitOrders(txt_test);
		
		for(int i=0;i<orderList_G_O.size();i++){
        	total_sum+=orderList_G_O.get(i).getOrder().getTotal_price();
        }
		Map request=(Map)ActionContext.getContext().get("request");
		request.put("addressList", addressList); //传给前台，前台可用EL表达式显示
		session.put("orderList_cmf", orderList_G_O);//存orderList_G_Osession
		session.put("total_sum", Math.ceil(total_sum*100+.5)/100+"");
	    return SUCCESS;	
	}
	
	
	@SuppressWarnings("unchecked")
	public String submitOrdersAction(){      //订单生成，修改数据库，state_id=1

	    orderList_G_O = (List<Goods_Order>)session.get("orderList_cmf");  //取session
        for(int i=0;i<orderList_G_O.size();i++){
        	System.out.println("orderList_G_O.get(i).getOrder().setAddress_id(address_id) = "+address_id);
        	orderList_G_O.get(i).getOrder().setAddress_id(address_id);
        }
            
	    if(orderService.submitOrders(orderList_G_O)){  
	    	user_name = ((User)session.get("user")).getUser_name();
	    	Map request=(Map)ActionContext.getContext().get("request");
	    	cartList_G_O = orderService.getOrdersList(user_name, "0");
	    	int n = cartList_G_O.size();
	    	System.out.println("cartList_G_O.size() = "+cartList_G_O.size());
	    	if(n>0){
		    	cartList_G_O_R.add(cartList_G_O.get(0));
		    	if(n>=2){
		    	  cartList_G_O_R.add(cartList_G_O.get(1));
		    	}
		    	session.put("cartList_R", cartList_G_O_R);//存session
	    	}else{
	    		session.put("cartList_R", null);//存session
	    	}
	    	
	    	List<Account> accountList = accountService.getAccountByUser_name(user_name);
	    	/*System.out.println("user_name = "+user_name);
	    	System.out.println("action     accountList.size() = "+accountList.size());
	    	System.out.println("accountList.get(0).getAccount_id() = "+accountList.get(0).getAccount_id());*/
	    	request.put("check_", "0");
	    	request.put("accountList", accountList); //传给前台，前台可用EL表达式显示
	    	
	    	return SUCCESS;
	    }
	    else{
	    	return INPUT;
	    }
    }

	@SuppressWarnings("unchecked")
	public String showCartListAction(){
		user_name = ((User)session.get("user")).getUser_name();
		cartList_G_O = orderService.getOrdersList(user_name,"0");
		Map request=(Map)ActionContext.getContext().get("request");
		request.put("cartList", cartList_G_O); //传给前台，前台可用EL表达式显示
		return SUCCESS;
	}
	
	@SuppressWarnings("unchecked")
	public String showOrdersListAction(){
		user_name = ((User)session.get("user")).getUser_name();
		
		Map request=(Map)ActionContext.getContext().get("request");
		orderList_G_O = orderService.getOrdersList_all(user_name);
		request.put("ordersList_all", orderList_G_O); //传给前台，前台可用EL表达式显示
		orderList_G_O = orderService.getOrdersList(user_name,"1");
		request.put("ordersList_1", orderList_G_O); //传给前台，前台可用EL表达式显示
		orderList_G_O = orderService.getOrdersList(user_name,"2");
		request.put("ordersList_2", orderList_G_O); //传给前台，前台可用EL表达式显示
		orderList_G_O = orderService.getOrdersList(user_name,"3");
		request.put("ordersList_3", orderList_G_O); //传给前台，前台可用EL表达式显示
		orderList_G_O = orderService.getOrdersList(user_name,"4");
		request.put("ordersList_4", orderList_G_O); //传给前台，前台可用EL表达式显示
		orderList_G_O = orderService.getOrdersList(user_name,"5");
		request.put("ordersList_5", orderList_G_O); //传给前台，前台可用EL表达式显示
		return SUCCESS;
	}

	public String receiptGoodsAction(){
		orderList_G_O = orderService.getOrderByOrder_id(order_id);
		goods_id = orderList_G_O.get(0).getGoods().getGoods_id();
		total_price = orderList_G_O.get(0).getOrder().getTotal_price();
		if(sellorService.updateState(orderList_G_O, "4")&&accountService.checkin(accountService.getAccountByGoods_Id(goods_id), total_price)){
			tipMessage = "success";
			return SUCCESS;
		}else{
			return INPUT;
		}
	}
    public static String getDate() {
   	 Date date = new Date();
   	 String str = null;
   	 SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
   	 str = df.format(date);
   	 return str;
   }
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}
}
