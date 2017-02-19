package cn.com.service.impl;

import java.util.List;

import cn.com.dao.GoodsDao;
import cn.com.dao.impl.GoodsDaoImpl;
import cn.com.service.GoodsService;
import cn.com.vo.Goods;

public class GoodsServiceImpl implements GoodsService{
	
    public GoodsDao dao = new GoodsDaoImpl();
        
	public List<Goods> getGoodsListSearchByType(String type_id) {
		return dao.searchGoodsByType(type_id);
	}

	public Goods getGoodsSearchById(String goods_id) {
		return dao.searchGoodsById(goods_id);
	}

	public List<Goods> getGoodsSearchByName(String goods_name) {
		return dao.searchGoodsByName(goods_name);
	}

	public int getSellCount(String goods_id) {
		return dao.sellCount(goods_id);
	}

	public boolean isAddGoods(Goods goods) {
		return dao.addGoods(goods);
	}

}
