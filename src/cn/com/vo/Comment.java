package cn.com.vo;

public class Comment {
    private String comment_id;
    private String user_name;
    private String goods_id;
    private String comment;
    private String order_id;
    private String flag;
    private String comment_time;
	public String getComment_id() {
		return comment_id;
	}
	public void setComment_id(String comment_id) {
		this.comment_id = comment_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getGoods_id() {
		return goods_id;
	}
	public void setGoods_id(String goods_id) {
		this.goods_id = goods_id;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getOrder_id() {
		return order_id;
	}
	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public String getComment_time() {
		return comment_time;
	}
	public void setComment_time(String comment_time) {
		this.comment_time = comment_time;
	}
	public Comment(){}
	public Comment(String comment_id, String user_name, String goods_id,
			String comment, String order_id, String flag,String comment_time) {
		this.comment_id = comment_id;
		this.user_name = user_name;
		this.goods_id = goods_id;
		this.comment = comment;
		this.order_id = order_id;
		this.flag = flag;
		this.comment_time = comment_time;
	}
    
}
