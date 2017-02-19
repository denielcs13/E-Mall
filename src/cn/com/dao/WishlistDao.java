package cn.com.dao;

import java.util.List;

import cn.com.vo.Wishlist;

public interface WishlistDao {
	public boolean addToWishlist(Wishlist wishlist);
	public List<Wishlist> wishlistList(String user_name);
}
