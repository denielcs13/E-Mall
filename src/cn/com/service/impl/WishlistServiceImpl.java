package cn.com.service.impl;

import java.util.List;

import cn.com.dao.WishlistDao;
import cn.com.dao.impl.WishlistDaoImpl;
import cn.com.service.WishlistService;
import cn.com.vo.Wishlist;

public class WishlistServiceImpl implements WishlistService{

	WishlistDao dao = new WishlistDaoImpl();
	public boolean isAddToWishlist(Wishlist wishlist) {
		return dao.addToWishlist(wishlist);
	}
	public List<Wishlist> getWishlistList(String user_name) {
		return dao.wishlistList(user_name);
	}

}
