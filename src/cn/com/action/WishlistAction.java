package cn.com.action;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import cn.com.dao.impl.WishlistDaoImpl;
import cn.com.service.GoodsService;
import cn.com.service.WishlistService;
import cn.com.service.impl.GoodsServiceImpl;
import cn.com.service.impl.WishlistServiceImpl;
import cn.com.util.FileEveryDaySerialNumber;
import cn.com.util.SerialNumber;
import cn.com.vo.Goods;
import cn.com.vo.User;
import cn.com.vo.Wishlist;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class WishlistAction extends ActionSupport  implements SessionAware{
     private String wishlist_id;
     private String user_name;
     private String goods_id;
     private String tipMessage;
     private Map<String, Object> session;
     
     List<Wishlist> list = new ArrayList<Wishlist>();
     List<Goods> goodsList = new ArrayList<Goods>();
     SerialNumber serial = new FileEveryDaySerialNumber(4, "WishlistSerialNumber.dat");  
     
     private WishlistService wishlistService = new WishlistServiceImpl();
     private GoodsService goodsService = new GoodsServiceImpl();
	public String getWishlist_id() {
		return wishlist_id;
	}
	public void setWishlist_id(String wishlist_id) {
		this.wishlist_id = wishlist_id;
	}
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
	public void setSession(Map<String, Object> session) {
		this.session = session;
		
	}
     public String getTipMessage() {
		return tipMessage;
	}
	public void setTipMessage(String tipMessage) {
		this.tipMessage = tipMessage;
	}
	@SuppressWarnings("unchecked")
	public String addToWishlistAction(){
    	 user_name = ((User)session.get("user")).getUser_name();
    	 Wishlist wishlist = new Wishlist(serial.getSerialNumber("WI"),user_name,goods_id);
    	 if(wishlistService.isAddToWishlist(wishlist)){
    		 tipMessage = "success";
    		 return SUCCESS;
    	 }else{
    		 tipMessage = "fail";
    		 return SUCCESS;
    	 }
     }
     
     @SuppressWarnings("unchecked")
	public String showWishlistAction(){
    	 user_name = ((User)session.get("user")).getUser_name();
    	 try{
    		 Map request=(Map)ActionContext.getContext().get("request");
    		 list = wishlistService.getWishlistList(user_name);
    		 for(int i=0;i<list.size();i++){
    			 goodsList.add(goodsService.getGoodsSearchById(list.get(i).getGoods_id())); 
    		 }
    		 request.put("goodsList", goodsList);
    		 return SUCCESS;
    	 }catch(Exception e){
    		 return INPUT;
    	 }
     }
	
	
}
