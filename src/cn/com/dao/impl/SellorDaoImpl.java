package cn.com.dao.impl;

import java.util.ArrayList;
import java.util.List;

import cn.com.dao.GoodsDao;
import cn.com.dao.SellorDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Order;
import cn.com.vo.Sellor_Goods;

public class SellorDaoImpl implements SellorDao{

	DefaultJDBCImpl d = new DefaultJDBCImpl();
	GoodsDao goodsDao  = new GoodsDaoImpl();
	@SuppressWarnings("unchecked")
	public List<Sellor_Goods> sellor_GoodsListByUser_name(String user_name) {
		//System.out.println("进入sellor_GoodsListByUser_name！");
		String sql = "select * from EM_SELLOR_GOODS where USER_NAME=? ORDER BY UPDATE_TIME DESC";
		String[] args = {user_name};
		//System.out.println("user_name = "+user_name);
		try{
		   List<Sellor_Goods> sellor_GoodsList = (List<Sellor_Goods>)d.query(sql, args, Sellor_Goods.class);
		   //System.out.println("sellor_GoodsList.get(0).getGoods_id() = "+sellor_GoodsList.get(0).getGoods_id());
		  // System.out.println(sellor_GoodsList.size());
		   return sellor_GoodsList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}	
	}
	public boolean addSellorGoods(Sellor_Goods s_g) {
		Boolean addGoodsDone1 = false;
		Boolean addGoodsDone2 = false;
		Boolean addGoodsDone = false;
		try{
			String sql1 = "insert into EM_GOODS values(?,?,?,?,?,?,?)";
			Object[] args1 = {s_g.getGoods().getGoods_id(),s_g.getGoods().getGoods_name(),s_g.getGoods().getGoods_detail(),s_g.getGoods().getType_id(),s_g.getGoods().getGoods_price(),s_g.getGoods().getGoods_image(),s_g.getGoods().getDiscount_rate()};
			addGoodsDone1 = (Boolean)d.query(sql1, args1, null);
			
			try{
				String sql2 = "insert into EM_GOODS values(?,?,?,?,?)";
				Object[] args2 = {s_g.getUser_name(),s_g.getGoods_id(),s_g.getGoods_color(),s_g.getGoods_size(),s_g.getStock_quantity()};
				addGoodsDone1 = (Boolean)d.query(sql2, args2, null);
				addGoodsDone = addGoodsDone1 & addGoodsDone2;
			}catch(Exception e){
				throw new RuntimeException(e);
			}
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}
		return addGoodsDone;
	}
	@SuppressWarnings("unchecked")
	public List<Sellor_Goods> searchSellorGoodsById(String goods_id) {
		String sql = "select * from EM_SELLOR_GOODS where GOODS_ID=?";
		String[] args = {goods_id};
		try{
		   List<Sellor_Goods> sellor_GoodsList = (List<Sellor_Goods>)d.query(sql, args, Sellor_Goods.class);
		   if(sellor_GoodsList.size()>0){
			   String sql2 = "select * from EM_GOODS where GOODS_ID=?";
				String[] args2 = {goods_id};
				List<Goods> goodsList = (List<Goods>)d.query(sql2, args2, Goods.class);	
				sellor_GoodsList.get(0).setGoods(goodsList.get(0));
		   }
		   return sellor_GoodsList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}	
	}
	
	@SuppressWarnings("unchecked")
	public List<Sellor_Goods> searchSellorGoodsByName(String goods_name) {
		try{
			List<Goods> goodsList = goodsDao.searchGoodsByName(goods_name);
			List<Sellor_Goods> sellor_GoodsList = new ArrayList<Sellor_Goods>();
			if(goodsList.size()>0){
				for(int i=0;i<goodsList.size();i++){
					String sql2 = "select * from EM_SELLOR_GOODS where GOODS_ID=? ORDER BY UPDATE_TIME DESC";
					String[] args2 = {goodsList.get(i).getGoods_id()};
					List<Sellor_Goods> s_gList = new ArrayList<Sellor_Goods>();
				    s_gList = (List<Sellor_Goods>)d.query(sql2, args2, Sellor_Goods.class) ;
				    s_gList.get(0).setGoods(goodsList.get(i));
				    sellor_GoodsList.add(s_gList.get(0));
				}
				System.out.println("sellor_GoodsList.size() = "+sellor_GoodsList.size());
	    	  }
			return sellor_GoodsList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}
	}
	public List<Order> searchSellorOrderByGoodsId(String goods_id,String state_id) {
		String sql = "select * from EM_ORDER where GOODS_ID=? AND STATE_ID=? ORDER BY ORDER_TIME DESC";
		String[] args = {goods_id,state_id};
		try{
		   List<Order> ordersList = (List<Order>)d.query(sql, args, Order.class);
		   return ordersList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}	
	}
	
	public boolean updateState(List<Goods_Order> g_o_list,String state_id) {
	    System.out.println("进入updateState函数！");
	    Boolean q = false;
		for(int i=0;i<g_o_list.size();i++){
			String sql = "update EM_ORDER set STATE_ID=? where ORDER_ID=?";
			String[] args = {state_id,g_o_list.get(i).getOrder().getOrder_id()};
			try{
			   q = (Boolean)d.query(sql, args, null);
			}catch(Exception ee){
				throw new RuntimeException(ee);
			}
		}
		return q;
    }
	public boolean updateStateByOrderId(String order_id, String state_id) {
		Boolean q = false;
		String sql = "update EM_ORDER set STATE_ID=? where ORDER_ID=?";
		String[] args = {state_id,order_id};
		try{
		   q = (Boolean)d.query(sql, args, null);
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}
		return q;
	}
	@SuppressWarnings("unchecked")
	public List<Goods_Order> searchSellorOrderById(String order_id) {
		String sql = "select * from EM_ORDER where ORDER_ID=?";
		String[] args = {order_id};
		try{
		   List<Order> orderList = (List<Order>)d.query(sql, args, Sellor_Goods.class);
		   List<Goods_Order> g_oList = new ArrayList<Goods_Order>();
		   if(orderList.size()>0){
			   String sql2 = "select * from EM_GOODS where GOODS_ID=?";
				String[] args2 = {orderList.get(0).getGoods_id()};
				List<Goods> goodsList = (List<Goods>)d.query(sql2, args2, Goods.class);	
				g_oList.get(0).setOrder(orderList.get(0));
				g_oList.get(0).setGoods(goodsList.get(0));
		   }
		   return g_oList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}	
	}
	/*public List<Goods_Order> searchSellorOrderByUser(String user_name) {
		String sql = "select * from EM_ORDER where ORDER_ID=?";
		String[] args = {order_id};
		try{
		   List<Order> orderList = (List<Order>)d.query(sql, args, Sellor_Goods.class);
		   List<Goods_Order> g_oList = new ArrayList<Goods_Order>();
		   if(orderList.size()>0){
			   String sql2 = "select * from EM_GOODS where GOODS_ID=?";
				String[] args2 = {orderList.get(0).getGoods_id()};
				List<Goods> goodsList = (List<Goods>)d.query(sql2, args2, Goods.class);	
				g_oList.get(0).setOrder(orderList.get(0));
				g_oList.get(0).setGoods(goodsList.get(0));
		   }
		   return g_oList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}
		return null;
	}*/
	public boolean updateStock_quantity(String goods_id, int count) {
		Boolean q = false;
		String sql = "update EM_SELLOR_GOODS set STOCK_QUANTITY=STOCK_QUANTITY-? where GOODS_ID=?";
		Object[] args = {count,goods_id};
		
		q = (Boolean)d.query(sql, args, null);
		return q;
	}
	public boolean addGoods(Sellor_Goods s_g) {
		Boolean addDone = false;
		String sql = "insert into EM_SELLOR_GOODS values(?,?,?,?,?,?)";
		Object[] args = {s_g.getUser_name(),s_g.getGoods_id(),s_g.getGoods_color(),s_g.getGoods_size(),s_g.getStock_quantity(),s_g.getUpdate_time()};
		addDone = (Boolean)d.query(sql, args, null);
		return addDone;
	}

}
