package cn.com.action;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import cn.com.service.GoodsService;
import cn.com.service.OrderService;
import cn.com.service.SellorService;
import cn.com.service.impl.GoodsServiceImpl;
import cn.com.service.impl.OrderServiceImpl;
import cn.com.service.impl.SellorServiceImpl;
import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Sellor_Goods;
import cn.com.vo.User;

public class SellorAction  extends ActionSupport implements SessionAware{
       private String user_name;
       private String goods_id;
       private String goods_color;
       private String goods_size;
       private int stock_quantity;
       private String update_time;
       
       private String goods_name;
       private String goods_detail;
       private String type_id;
       private double goods_price;
       private String goods_image;
       private double discount_rate;
       
       private String order_id;
       private String state_id;
       private String client_name;
       private  Map<String, Object> session;
       
       private String tipMessage;
       
       
       List<Sellor_Goods> s_gList = new ArrayList<Sellor_Goods>();
       List<Goods_Order> g_oList = new ArrayList<Goods_Order>();
       List<Goods_Order> g_oList3 = new ArrayList<Goods_Order>();
       List<Goods_Order> g_oList4 = new ArrayList<Goods_Order>();
       
       SellorService s_gService = new SellorServiceImpl();
       GoodsService goodsService = new GoodsServiceImpl();
       OrderService orderService = new OrderServiceImpl();
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(String goods_id) {
		this.goods_id = goods_id;
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
	public int getStock_quantity() {
		return stock_quantity;
	}
	public void setStock_quantity(int stock_quantity) {
		this.stock_quantity = stock_quantity;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	public String getGoods_name() {
		return goods_name;
	}
	public void setGoods_name(String goods_name) {
		this.goods_name = goods_name;
	}
	public String getGoods_detail() {
		return goods_detail;
	}
	public void setGoods_detail(String goods_detail) {
		this.goods_detail = goods_detail;
	}
	public String getType_id() {
		return type_id;
	}
	public void setType_id(String type_id) {
		this.type_id = type_id;
	}
	public double getGoods_price() {
		return goods_price;
	}
	public void setGoods_price(double goods_price) {
		this.goods_price = goods_price;
	}
	public String getGoods_image() {
		return goods_image;
	}
	public void setGoods_image(String goods_image) {
		this.goods_image = goods_image;
	}
	public double getDiscount_rate() {
		return discount_rate;
	}
	public void setDiscount_rate(double discount_rate) {
		this.discount_rate = discount_rate;
	}
    public String getState_id() {
		return state_id;
	}
	public void setState_id(String state_id) {
		this.state_id = state_id;
	}
	public String getOrder_id() {
		return order_id;
	}
	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}
	public String getClient_name() {
		return client_name;
	}
	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}
	public String getTipMessage() {
		return tipMessage;
	}
	public void setTipMessage(String tipMessage) {
		this.tipMessage = tipMessage;
	}
	@SuppressWarnings("unchecked")
	public String showSellorGoodsAction(){
    	user_name = ((User) session.get("user")).getUser_name();
    	s_gList = s_gService.getSellor_GoodsListByUser_name(user_name);
    	//System.out.println("s_gList.size() = "+s_gList.size());
    	for(int i=0;i<s_gList.size();i++){
    		//System.out.println("进入for循环！");

    		s_gList.get(i).setGoods(goodsService.getGoodsSearchById(s_gList.get(i).getGoods_id()));
    	}
    	Map request=(Map)ActionContext.getContext().get("request");
		request.put("sellor_goodsList", s_gList); //传给前台，前台可用EL表达式显示
    	return SUCCESS;
    }
    
    @SuppressWarnings("unchecked")
	public String searchSellorGoodsByIdAction(){
    	s_gList = s_gService.searchSellorGoodsById(goods_id);
    	Map request=(Map)ActionContext.getContext().get("request");
		request.put("sellor_goodsList", s_gList); //传给前台，前台可用EL表达式显示
    	return SUCCESS;
    }
    @SuppressWarnings("unchecked")
	public String searchSellorGoodsByNameAction(){
    	try {
			goods_name = new String(goods_name.getBytes("ISO-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
    	s_gList = s_gService.searchSellorGoodsByName(goods_name);
    	Map request=(Map)ActionContext.getContext().get("request");
    	request.put("sellor_goodsList", s_gList); //传给前台，前台可用EL表达式显示
    	return SUCCESS;
    }
    
    
    @SuppressWarnings("unchecked")
	public String showSellorOrderAction(){
    	user_name = ((User) session.get("user")).getUser_name();
    	s_gList = s_gService.getSellor_GoodsListByUser_name(user_name);
    	g_oList = s_gService.searchSellorOrderByGoodsId(s_gList,state_id);

    	Map request=(Map)ActionContext.getContext().get("request");
    	request.put("g_oList", g_oList); //传给前台，前台可用EL表达式显示
    	return SUCCESS;
    }
    
    @SuppressWarnings("unchecked")
	public String searchSellorOrderByIdAction(){
    	System.out.println("state_id = "+state_id);
    	user_name = ((User) session.get("user")).getUser_name();
    	s_gList = s_gService.getSellor_GoodsListByUser_name(user_name);
    	g_oList = s_gService.searchSellorOrderByGoodsId(s_gList,state_id);
    	
    	for(int i=0;i<g_oList.size();i++){
    		
    		if(order_id.equals(g_oList.get(i).getOrder().getOrder_id())){
    			System.out.println("找到同样的order_id");
    			List<Goods_Order> g = new ArrayList<Goods_Order>();
		    	g.add(g_oList.get(i));
		    	Map request=(Map)ActionContext.getContext().get("request");
				request.put("g_oList",g); //传给前台，前台可用EL表达式显示
				break;
    		}
    	}
    	return SUCCESS;
    }
    
    @SuppressWarnings("unchecked")
	public String searchSellorOrderByUserAction(){
    	try {
			client_name = new String(client_name.getBytes("ISO-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
    	
    	System.out.println("client_name = "+client_name);
    	
    	user_name = ((User) session.get("user")).getUser_name();
    	s_gList = s_gService.getSellor_GoodsListByUser_name(user_name);
    	g_oList = s_gService.searchSellorOrderByGoodsId(s_gList,state_id);
    	List<Goods_Order> G_O_List = new ArrayList<Goods_Order>();
    	for(int i=1;i<g_oList.size();i++){
    		if(client_name.equals(g_oList.get(i).getOrder().getUser_name())){
    			G_O_List.add(g_oList.get(i));	
    		}
    	}
    	Map request=(Map)ActionContext.getContext().get("request");
		request.put("g_oList", G_O_List); //传给前台，前台可用EL表达式显示
    	return SUCCESS;
    }
    
    @SuppressWarnings("unchecked")
	public String sendGoodsAction(){
    	int count = orderService.getOrderByOrder_id(order_id).get(0).getOrder().getCount();
    	goods_id = orderService.getOrderByOrder_id(order_id).get(0).getGoods().getGoods_id();
    	System.out.println("count = "+count);
    	if(s_gService.updateStatByOrderId(order_id, state_id)&&s_gService.updateStock_quantity(goods_id,count)){
    		tipMessage = "success";
    		return SUCCESS;
    	}else{
    		return INPUT;
    	}
    }
    
	public void setSession(Map<String, Object> session) {
		this.session = session;
	}
}
