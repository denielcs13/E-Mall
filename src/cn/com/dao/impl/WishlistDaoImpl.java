package cn.com.dao.impl;

import java.util.List;

import cn.com.dao.WishlistDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Goods;
import cn.com.vo.Order;
import cn.com.vo.Wishlist;

public class WishlistDaoImpl implements WishlistDao{
	
	DefaultJDBCImpl d = new DefaultJDBCImpl();
	public boolean addToWishlist(Wishlist wishlist) {
		Boolean addWishlistDone = false;
		if(!existWishlist(wishlist)){
			String sql = "insert into EM_WISHLIST values(?,?,?)";
			Object[] args = {wishlist.getWishlist_id(),wishlist.getUser_name(),wishlist.getGoods_id()};
			addWishlistDone = (Boolean)d.query(sql, args, null);
		}
		return addWishlistDone;
	}
	public List<Wishlist> wishlistList(String user_name) {
		String sql = "select * from EM_WISHLIST where USER_NAME=?";
		String[] args = {user_name};
		List<Wishlist> list = (List<Wishlist>)d.query(sql, args, Wishlist.class);	
		return list;
	}
	
	@SuppressWarnings("unchecked")
	public boolean existWishlist(Wishlist wishlist){
		String sql = "select * from EM_WISHLIST where USER_NAME=? and GOODS_ID=?";
		String[] args = {wishlist.getUser_name(),wishlist.getGoods_id()};
		List<Wishlist> list= (List<Wishlist>)d.query(sql, args, Wishlist.class);
		if(list.size()>0){
			return true;
		}else{
			return false;
		}
	}

}
