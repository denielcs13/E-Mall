package cn.com.dao.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import cn.com.dao.OrderDao;
import cn.com.jdbc.DefaultJDBCImpl;
import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Order;

public class OrderDaoImpl implements OrderDao{

	DefaultJDBCImpl d = new DefaultJDBCImpl();
	public boolean addToCart(Order order) { //加入购物车
		Boolean addOrderDone = false;
		try{
			String order_id = existOrder(order.getUser_name(), order.getGoods_id());
			if(order_id==null){
				String sql = "insert into EM_ORDER values(?,?,?,?,?,?,?,?,?,?)";
				Object[] args = {order.getOrder_id(),order.getUser_name(),order.getGoods_id(),order.getGoods_color(),order.getGoods_size(),order.getCount(),order.getOrder_time(),order.getState_id(),order.getAddress_id(),order.getTotal_price()};
				addOrderDone = (Boolean)d.query(sql, args, null);
			}else{
				String sql = "update EM_ORDER set COUNT=COUNT+? where ORDER_ID=?";
				Object[] args = {order.getCount(),order_id};
				addOrderDone = (Boolean)d.query(sql, args, null);
			}
		}catch(Exception e){
			throw new RuntimeException(e);
		}
		return addOrderDone;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Order> getSubmitOrder(String arr_order_id){
		System.out.println("进入submitOrders函数！");
		String[] arr = null;
		arr = arr_order_id.split(",");
		List<Order> ordersList = new ArrayList();
		List<Order> ordersList_2 = new ArrayList();
		String sql = "select * from EM_ORDER where ORDER_ID=? ORDER BY ORDER_TIME DESC";
		for(int i=0;i<arr.length;i++){
			String[] args = {arr[i]};
			try{
			   ordersList_2 = (List<Order>)d.query(sql, args, Order.class);
			   ordersList.add(ordersList_2.get(0));
			}catch(Exception ee){
				throw new RuntimeException(ee);
			}
		}

		return ordersList;
	}

	public boolean submitOrders(List<Order> orderList) {
		    Boolean q = false;
			for(int i=0;i<orderList.size();i++){
				String sql = "update EM_ORDER set STATE_ID = 1,ORDER_TIME=?,ADDRESS_ID=? where ORDER_ID=? ";
				String[] args = {getDate(),orderList.get(i).getAddress_id(),orderList.get(i).getOrder_id()};
				try{
				   q = (Boolean)d.query(sql, args, null);
				}catch(Exception ee){
					throw new RuntimeException(ee);
				}
			}
			return q;
    }
	
	@SuppressWarnings("unchecked")
	public List<Order> ordersList(String user_name,String state_id) {
		String sql = "select * from EM_ORDER where USER_NAME=? and STATE_ID=? ORDER BY ORDER_TIME DESC";
		String[] args = {user_name,state_id};
		try{
		
		   List<Order> ordersList = (List<Order>)d.query(sql, args, Order.class);
		   return ordersList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}	
	}
	
	@SuppressWarnings("unchecked")
	public List<Order> ordersList_all(String user_name) {
		String sql = "select * from EM_ORDER where USER_NAME=? and STATE_ID!=0 ORDER BY STATE_ID ASC";
		String[] args = {user_name};
		try{
		   List<Order> ordersList = (List<Order>)d.query(sql, args, Order.class);
		   return ordersList;
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}	
	}
	
	@SuppressWarnings("unchecked")
	public String existOrder(String user_name, String goods_id) {
		String sql = "select * from EM_ORDER where USER_NAME=? and GOODS_ID=? and STATE_ID=0";
		String[] args = {user_name,goods_id};
		List<Order> list= (List<Order>)d.query(sql, args, Order.class);
		if(list.size()>0){
			String order_id = list.get(0).getOrder_id();
			System.out.println("existOrderId----------orderId-------------"+order_id);
			return order_id;
		}else{
			return null;
		}
	}
	
	public static String getDate() {
	   	 Date date = new Date();
	   	 String str = null;
	   	 SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
	   	 str = df.format(date);
	   	 return str;
	   }

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Order> orderByOrder_id(String order_id) {
		List<Order> ordersList = new ArrayList();
		String sql = "select * from EM_ORDER where ORDER_ID=? ORDER BY ORDER_TIME DESC";
		String[] args = {order_id};
		try{
			ordersList = (List<Order>)d.query(sql, args, Order.class);
		}catch(Exception ee){
			throw new RuntimeException(ee);
		}
		return ordersList;
	}
}
