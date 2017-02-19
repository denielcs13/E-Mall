package cn.com.service;

import java.util.List;

import cn.com.vo.Goods;

public interface GoodsService {
       public List<Goods> getGoodsListSearchByType(String type_id);
       public Goods getGoodsSearchById(String goods_id);
       public List<Goods> getGoodsSearchByName(String goods_name);
       public int getSellCount(String goods_id);
       public boolean isAddGoods(Goods goods);
}
