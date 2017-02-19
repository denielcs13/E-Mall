package cn.com.action;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import cn.com.service.CommentService;
import cn.com.service.OrderService;
import cn.com.service.SellorService;
import cn.com.service.impl.CommentServiceImpl;
import cn.com.service.impl.OrderServiceImpl;
import cn.com.service.impl.SellorServiceImpl;
import cn.com.util.FileEveryDaySerialNumber;
import cn.com.util.SerialNumber;
import cn.com.vo.Comment;
import cn.com.vo.Goods_Order;
import cn.com.vo.User;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class CommentAction  extends ActionSupport implements SessionAware{
	private String comment_id;
    private String user_name;
    private String goods_id;
    private String comment;
    private String order_id;
    private String flag;
    
    private String ra_comment;
    
    private  Map<String, Object> session;
    private String tipMessage;
    
    CommentService commentService = new CommentServiceImpl();
    OrderService orderService = new OrderServiceImpl();
    SellorService sellorService = new SellorServiceImpl();
    
    private List<Goods_Order> orderList_G_O = new ArrayList();
    private List<Comment> commentList = new ArrayList<Comment>();
    SerialNumber serial = new FileEveryDaySerialNumber(4, "CommentSerialNumber.dat"); 
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
	public void setSession(Map<String, Object> session) {
	    this.session = session;	
	}
	public String getRa_comment() {
		return ra_comment;
	}
	public void setRa_comment(String ra_comment) {
		this.ra_comment = ra_comment;
	}
	@SuppressWarnings("unchecked")
	public String commentAction(){
		orderList_G_O = orderService.getOrderByOrder_id(order_id);
		Map request=(Map)ActionContext.getContext().get("request");
		request.put("goods_order", orderList_G_O.get(0)); //传给前台，前台可用EL表达式显示
		session.put("order_id", order_id);
		return SUCCESS;
	}
	public String addCommentAction(){
		user_name = ((User) session.get("user")).getUser_name();
		order_id = (String)session.get("order_id");
		goods_id = orderService.getOrderByOrder_id(order_id).get(0).getGoods().getGoods_id();

		System.out.println("ra_comment = "+ra_comment);
		System.out.println(comment);
		Comment c = new Comment(serial.getSerialNumber("CO"),user_name,goods_id,comment,order_id,flag,getDate());
		if(commentService.IsAddComment(c)&&sellorService.updateStatByOrderId(order_id, "5")){
		   return SUCCESS;
		}else{
			return INPUT;
		}
	}
	
	/*public String commentListAction(){
		commentList = commentService.getCommentList(goods_id);
		return SUCCESS;
	}*/
	
	public static String getDate() {
	   	 Date date = new Date();
	   	 String str = null;
	   	 SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
	   	 str = df.format(date);
	   	 return str;
	   }
}
