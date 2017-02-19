package cn.com.dao;

import java.util.List;

import cn.com.vo.Goods;

public interface GoodsDao {
       public List<Goods> searchGoodsByType(String type_id);
       public Goods searchGoodsById(String goods_id);
       public List<Goods> searchGoodsByName(String goods_name);
       public int sellCount(String goods_id);
       public boolean addGoods(Goods goods);
}
