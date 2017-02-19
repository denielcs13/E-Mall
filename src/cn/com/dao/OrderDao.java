package cn.com.dao;

import java.util.List;

import cn.com.vo.Goods_Order;
import cn.com.vo.Order;

public interface OrderDao {
     public boolean addToCart(Order order);
     public List<Order> getSubmitOrder(String arr_order_id);//可能不需要该方法
     public boolean submitOrders(List<Order> orderList);
     public List<Order> ordersList(String user_name,String state_id);
     public List<Order> ordersList_all(String user_name);
     
     public List<Order> orderByOrder_id(String order_id);
}
