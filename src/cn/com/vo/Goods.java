package cn.com.vo;

public class Goods {
     private String goods_id;
     private String goods_name;
     private String goods_detail;
     private String type_id;
     private float goods_price;
     private String goods_image;
     private float discount_rate;
     private int sellCount;
	public String getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(String goods_id) {
		this.goods_id = goods_id;
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
	public float getGoods_price() {
		return goods_price;
	}
	public void setGoods_price(float goods_price) {
		this.goods_price = goods_price;
	}
	public String getGoods_image() {
		return goods_image;
	}
	public void setGoods_image(String goods_image) {
		this.goods_image = goods_image;
	}
	public float getDiscount_rate() {
		return discount_rate;
	}
	public void setDiscount_rate(float discount_rate) {
		this.discount_rate = discount_rate;
	}
	public int getSellCount() {
		return sellCount;
	}
	public void setSellCount(int sellCount) {
		this.sellCount = sellCount;
	}
	public Goods(){}
	
	public Goods(String goods_id, String goods_name, String goods_detail,
			String type_id, float goods_price, String goods_image,
			float discount_rate,int sellCount) {
		super();
		this.goods_id = goods_id;
		this.goods_name = goods_name;
		this.goods_detail = goods_detail;
		this.type_id = type_id;
		this.goods_price = goods_price;
		this.goods_image = goods_image;
		this.discount_rate = discount_rate;
		this.sellCount = sellCount;
	}
     
}
