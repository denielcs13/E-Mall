package cn.com.service;

import java.util.List;

import cn.com.vo.Wishlist;

public interface WishlistService {
	public boolean isAddToWishlist(Wishlist wishlist) ;
	public List<Wishlist> getWishlistList(String user_name);
}
