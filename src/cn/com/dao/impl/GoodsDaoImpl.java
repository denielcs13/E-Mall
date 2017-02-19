package cn.com.dao.impl;

import java.util.List;
import cn.com.dao.GoodsDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Goods;

public class GoodsDaoImpl implements GoodsDao{
	
	DefaultJDBCImpl d = new DefaultJDBCImpl(); 
	
	public List<Goods> searchGoodsByType(String type_id) {
		String sql = "select * from EM_GOODS where TYPE_ID=?";
		String[] args = {type_id};
		List<Goods> goodsList = (List<Goods>)d.query(sql, args, Goods.class);	
		return goodsList;
	}

	@SuppressWarnings("unchecked")
	public Goods searchGoodsById(String goods_id) {
		//System.out.println("goods_id = "+goods_id);
		String sql = "select * from EM_GOODS where GOODS_ID=?";
		String[] args = {goods_id};
		List<Goods> goodsList = (List<Goods>)d.query(sql, args, Goods.class);	
		//System.out.println(goodsList.get(0).getGoods_id());
		return goodsList.get(0);
	}

	@SuppressWarnings("unchecked")
	public List<Goods> searchGoodsByName(String goods_name) {
		String sql = "select * from EM_GOODS where lower(GOODS_NAME) like ?";
		String[] args = {"%"+goods_name+"%"};
		List<Goods> goodsList = (List<Goods>)d.query(sql, args, Goods.class);	
		System.out.println("impl  goodsList.size()=  "+goodsList.size());
		return goodsList;
	}

	@SuppressWarnings("unchecked")
	public int sellCount(String goods_id) {
		String sql = "select sum(count) as sellCount from EM_ORDER where GOODS_ID=? and STATE_ID>3";
		String[] args = {goods_id};
		List<Goods> g = (List<Goods>)d.query(sql, args, Goods.class);
		if(g.get(0).getSellCount()+""!=null){
		    return g.get(0).getSellCount();
		}else{
			return 0;
		}
	}

	public boolean addGoods(Goods goods) {
		Boolean addDone = false;
		String sql = "insert into EM_GOODS values(?,?,?,?,?,?,?)";
		Object[] args = {goods.getGoods_id(),goods.getGoods_name(),goods.getGoods_detail(),goods.getType_id(),goods.getGoods_price(),goods.getGoods_image(),goods.getDiscount_rate()};
		addDone = (Boolean)d.query(sql, args, null);
		return addDone;
	}

	

}
