package cn.com.service.impl;

import java.util.ArrayList;
import java.util.List;

import cn.com.dao.GoodsDao;
import cn.com.dao.OrderDao;
import cn.com.dao.impl.GoodsDaoImpl;
import cn.com.dao.impl.OrderDaoImpl;
import cn.com.service.OrderService;
import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Order;

public class OrderServiceImpl implements OrderService{
    
	public OrderDao orderDao = new OrderDaoImpl();
	public GoodsDao goodsDao = new GoodsDaoImpl();
	
	public boolean addToCart(Order order) {
		return orderDao.addToCart(order);
	}
	
	public boolean submitOrders(List<Goods_Order> orderList_G_O) {
		List<Order> ordersList = new ArrayList<Order>();
		for(int i=0;i<orderList_G_O.size();i++){
			ordersList.add(orderList_G_O.get(i).getOrder());
			System.out.println("ordersList.get(i).getAddress_id() = "+ordersList.get(i).getAddress_id());
		}
		return orderDao.submitOrders(ordersList);
	}

	public List<Goods_Order> getOrdersList(String user_name,String state_id) {
		List<Order> ordersList = orderDao.ordersList(user_name,state_id);
		List<Goods_Order> ordersList_G_O = new ArrayList<Goods_Order>();
		
		Goods goods = new Goods();
		for(int i=0;i<ordersList.size();i++){
			goods = goodsDao.searchGoodsById(ordersList.get(i).getGoods_id());
			Goods_Order G_O = new Goods_Order(goods,ordersList.get(i));
			ordersList_G_O.add(G_O);
		}
		
		return ordersList_G_O;
	}

	
	public List<Goods_Order> getSubmitOrders(String arr_order_id) {
		List<Order> ordersList = orderDao.getSubmitOrder(arr_order_id);
		List<Goods_Order> ordersList_G_O = new ArrayList<Goods_Order>();
		Goods goods = new Goods();
		for(int i=0;i<ordersList.size();i++){
			goods = goodsDao.searchGoodsById(ordersList.get(i).getGoods_id());
			Goods_Order G_O = new Goods_Order(goods,ordersList.get(i));
			ordersList_G_O.add(G_O);
		}
		return ordersList_G_O;
	}
	
	public List<Goods_Order> getOrdersList_all(String user_name) {
		List<Order> ordersList = orderDao.ordersList_all(user_name);
		List<Goods_Order> ordersList_G_O = new ArrayList<Goods_Order>();
		
		Goods goods = new Goods();
		for(int i=0;i<ordersList.size();i++){
			goods = goodsDao.searchGoodsById(ordersList.get(i).getGoods_id());
			Goods_Order G_O = new Goods_Order(goods,ordersList.get(i));
			ordersList_G_O.add(G_O);
		}
		
		return ordersList_G_O;
	}

	public List<Goods_Order> getOrderByOrder_id(String order_id) {
		List<Order> ordersList = orderDao.orderByOrder_id(order_id);
		List<Goods_Order> ordersList_G_O = new ArrayList<Goods_Order>();
		Goods goods = new Goods();
			goods = goodsDao.searchGoodsById(ordersList.get(0).getGoods_id());
			Goods_Order G_O = new Goods_Order(goods,ordersList.get(0));
			ordersList_G_O.add(G_O);
		return ordersList_G_O;
	}

	

}
