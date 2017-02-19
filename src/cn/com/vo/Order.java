package cn.com.vo;

public class Order {
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
	public Order(){}
	public Order(String order_id, String goods_id, String user_name,
			String goods_color, String goods_size, int count,
			String state_id, String order_time,String address_id,float total_price) {
		super();
		this.order_id = order_id;
		this.goods_id = goods_id;
		this.user_name = user_name;
		this.goods_color = goods_color;
		this.goods_size = goods_size;
		this.count = count;
		this.state_id = state_id;
		this.order_time = order_time;
		this.address_id = address_id;
		this.total_price = total_price;
	}
     
}
