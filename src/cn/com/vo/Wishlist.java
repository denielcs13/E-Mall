package cn.com.vo;

public class Wishlist {
     private String wishlist_id;
     private String user_name;
     private String goods_id;
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
	public Wishlist() {};
	public Wishlist(String wishlist_id, String user_name, String goods_id) {
		super();
		this.wishlist_id = wishlist_id;
		this.user_name = user_name;
		this.goods_id = goods_id;
	}
     
}
