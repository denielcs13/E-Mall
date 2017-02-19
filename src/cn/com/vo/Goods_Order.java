package cn.com.vo;

public class Goods_Order {
     public Goods goods;
     public Order order;
	public Goods getGoods() {
		return goods;
	}
	public void setGoods(Goods goods) {
		this.goods = goods;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	public Goods_Order() {}
	public Goods_Order(Goods goods, Order order) {
		super();
		this.goods = goods;
		this.order = order;
	}
     
}
