package cn.com.service;

import java.util.List;

import cn.com.vo.Goods_Order;
import cn.com.vo.Order;

public interface OrderService {
	    public boolean addToCart(Order order);
        public boolean submitOrders(List<Goods_Order> orderList_G_O);
        public List<Goods_Order> getSubmitOrders(String arr_order_id);
        public List<Goods_Order> getOrdersList(String user_name,String state_id);
        public List<Goods_Order> getOrdersList_all(String user_name);
        public List<Goods_Order> getOrderByOrder_id(String order_id);
}
