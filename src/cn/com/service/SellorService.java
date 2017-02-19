package cn.com.service;

import java.util.List;

import cn.com.vo.Goods;
import cn.com.vo.Goods_Order;
import cn.com.vo.Sellor_Goods;

public interface SellorService {
	public List<Sellor_Goods> getSellor_GoodsListByUser_name(String user_name);
    public boolean isAddSellorGoods(Sellor_Goods s_g);
    public List<Sellor_Goods> searchSellorGoodsById(String goods_id);
    public List<Sellor_Goods> searchSellorGoodsByName(String goods_name);
    public List<Goods_Order> searchSellorOrderByGoodsId(List<Sellor_Goods> s_g_list,String state_id);
    public boolean updateState(List<Goods_Order> g_o_list,String state_id);
    public boolean updateStatByOrderId(String order_id,String state_id);
    public boolean updateStock_quantity(String goods_id,int count);
    public boolean addGoods(String user_name,String goods_id,String goods_color,String goods_size,int stock_quantity);
}
