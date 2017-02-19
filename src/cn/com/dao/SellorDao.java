package cn.com.dao;

import java.util.List;

import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Order;
import cn.com.vo.Sellor_Goods;

public interface SellorDao {
     public List<Sellor_Goods> sellor_GoodsListByUser_name(String user_name);
     public List<Sellor_Goods> searchSellorGoodsById(String goods_id);
     public List<Sellor_Goods> searchSellorGoodsByName(String goods_name);
     public boolean addSellorGoods(Sellor_Goods s_g);
     
     public List<Order> searchSellorOrderByGoodsId(String goods_id,String state_id);
     
     public boolean updateState(List<Goods_Order> g_o_list,String state_id);
     public boolean updateStateByOrderId(String order_id,String state_id);
     
     public boolean updateStock_quantity(String goods_id,int count);
     /*public List<Goods_Order> searchSellorOrderById(String order_id);
     public List<Goods_Order> searchSellorOrderByUser(String user_name);*/
     public boolean addGoods(Sellor_Goods s_g);
}
