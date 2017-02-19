package cn.com.vo;

public class Sellor_Goods {
    private String user_name;
    private String goods_id;
    private String goods_color;
    private String goods_size;
    private int stock_quantity;
    private String update_time;
    
    private Goods goods = null;
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
	public Goods getGoods() {
		return goods;
	}
	public void setGoods(Goods goods) {
		this.goods = goods;
	}
	public Sellor_Goods(){}
	public Sellor_Goods(String user_name, String goods_id, String goods_color,
			String goods_size, int stock_quantity,String update_time,Goods goods) {
		super();
		this.user_name = user_name;
		this.goods_id = goods_id;
		this.goods_color = goods_color;
		this.goods_size = goods_size;
		this.stock_quantity = stock_quantity;
		this.update_time = update_time;
		this.goods = goods;
	}
    
}
