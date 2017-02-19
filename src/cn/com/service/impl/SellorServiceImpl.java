package cn.com.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import cn.com.dao.GoodsDao;
import cn.com.dao.SellorDao;
import cn.com.dao.impl.GoodsDaoImpl;
import cn.com.dao.impl.SellorDaoImpl;
import cn.com.service.SellorService;
import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Order;
import cn.com.vo.Sellor_Goods;

public class SellorServiceImpl implements SellorService{
	SellorDao dao = new SellorDaoImpl();
	GoodsDao goodsDao = new GoodsDaoImpl();
	public List<Sellor_Goods> getSellor_GoodsListByUser_name(String user_name) {
		return dao.sellor_GoodsListByUser_name(user_name);
	}

	public boolean isAddSellorGoods(Sellor_Goods s_g) {
		return dao.addSellorGoods(s_g);
	}

	public List<Sellor_Goods> searchSellorGoodsById(String goods_id) {
		return dao.searchSellorGoodsById(goods_id);
	}

	public List<Sellor_Goods> searchSellorGoodsByName(String goods_name) {
		return dao.searchSellorGoodsByName(goods_name);
	}

	public List<Goods_Order> searchSellorOrderByGoodsId(List<Sellor_Goods> s_g_list,String state_id) {
		List<Goods_Order> g_o_list = new ArrayList<Goods_Order>();
		Goods goods = new Goods();
		List<Order> order_list = new ArrayList<Order>();
		for(int i=0;i<s_g_list.size();i++){
			String goods_id = s_g_list.get(i).getGoods_id();
			goods = goodsDao.searchGoodsById(goods_id);
			order_list = dao.searchSellorOrderByGoodsId(goods_id,state_id);
			for(int j=0;j<order_list.size();j++){
				Goods_Order g_o = new Goods_Order(goods,order_list.get(j));
				g_o_list.add(g_o);
			}
		}
		return g_o_list;
	}
	
	public boolean updateState(List<Goods_Order> g_o_list, String state_id) {
		return dao.updateState(g_o_list, state_id);
	}

	public boolean updateStatByOrderId(String order_id, String state_id) {
		return dao.updateStateByOrderId(order_id, state_id);
	}

	public boolean updateStock_quantity(String goods_id, int count) {
		return dao.updateStock_quantity(goods_id, count);
	}

	public boolean addGoods(String user_name, String goods_id,
			String goods_color, String goods_size, int stock_quantity) {
		Goods g = new Goods();
		g = goodsDao.searchGoodsById(goods_id);
		Sellor_Goods s = new Sellor_Goods(user_name,goods_id,goods_color,goods_size,stock_quantity,getDate(),null);
		return dao.addGoods(s);
	}
	
	public static String getDate() {
	   	 Date date = new Date();
	   	 String str = null;
	   	 SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
	   	 str = df.format(date);
	   	 return str;
	   }
}
